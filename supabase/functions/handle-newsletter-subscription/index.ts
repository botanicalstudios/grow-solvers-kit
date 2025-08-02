import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

interface NewsletterData {
  email: string;
  recaptchaToken: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function verifyRecaptcha(token: string): Promise<boolean> {
  const recaptchaSecret = Deno.env.get("RECAPTCHA_SECRET_KEY");
  if (!recaptchaSecret) {
    console.error("RECAPTCHA_SECRET_KEY not found");
    return false;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${recaptchaSecret}&response=${token}`,
    });

    const result = await response.json();
    return result.success && result.score > 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}

async function sendNotificationEmail(email: string): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not found");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "newsletter@katari.farm",
        to: ["fresh@katari.farm"],
        subject: "New Newsletter Subscriber",
        html: `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    });

    if (response.ok) {
      console.log("Notification email sent successfully");
      return true;
    } else {
      const error = await response.text();
      console.error("Failed to send notification email:", error);
      return false;
    }
  } catch (error) {
    console.error("Error sending notification email:", error);
    return false;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: NewsletterData = await req.json();

    // Verify reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(data.recaptchaToken);
    if (!isRecaptchaValid) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Create Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Get client info for logging
    const userAgent = req.headers.get("user-agent") || "unknown";
    const clientIP = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    // Add subscriber to database
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email: data.email,
        ip_address: clientIP,
        user_agent: userAgent,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      // Check if it's a duplicate email error
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "Email already subscribed" }),
          { 
            status: 409, 
            headers: { ...corsHeaders, "Content-Type": "application/json" } 
          }
        );
      }
      return new Response(
        JSON.stringify({ error: "Failed to save subscription" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Send notification email
    await sendNotificationEmail(data.email);

    return new Response(
      JSON.stringify({ message: "Successfully subscribed to newsletter" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});