/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `subscribed_at` (timestamptz, default now())
      - `is_active` (boolean, default true)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for anonymous users to insert their email
    - Add policy for authenticated users to view only their own subscription

  3. Notes
    - Email addresses are unique to prevent duplicates
    - Includes subscription timestamp for tracking
    - Soft delete capability with is_active flag
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their own subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (email = (SELECT email FROM auth.users WHERE auth.users.id = auth.uid()));
