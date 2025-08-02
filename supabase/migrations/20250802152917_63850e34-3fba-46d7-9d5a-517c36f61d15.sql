-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies (public can insert, only authenticated users can view)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (false); -- No one can read the list for privacy

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger function for new subscriber notifications
CREATE OR REPLACE FUNCTION public.notify_new_subscriber()
RETURNS TRIGGER AS $$
BEGIN
  -- This will be handled by the edge function
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for new subscriber notifications
CREATE TRIGGER on_newsletter_subscriber_created
  AFTER INSERT ON public.newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_subscriber();