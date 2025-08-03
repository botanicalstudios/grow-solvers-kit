import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  interest: string;
  message: string;
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

async function sendEmail(data: ContactFormData): Promise<boolean> {
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
        from: "contact@katari.farm",
        to: ["fresh@katari.farm"],
        subject: `New Contact Form Message from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Organization:</strong> ${data.organization || 'Not provided'}</p>
          <p><strong>Interest:</strong> ${data.interest}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (response.ok) {
      console.log("Email sent successfully");
      return true;
    } else {
      const error = await response.text();
      console.error("Failed to send email:", error);
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactFormData = await req.json();

    // Skip reCAPTCHA verification completely
    console.log("Skipping reCAPTCHA verification");

    // Send email
    const emailSent = await sendEmail(data);
    if (!emailSent) {
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
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