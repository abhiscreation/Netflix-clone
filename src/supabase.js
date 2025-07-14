import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dxkqdtbiwzuxxdumuuvn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4a3FkdGJpd3p1eHhkdW11dXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzNzc3ODEsImV4cCI6MjA2Nzk1Mzc4MX0.2Hr_MI2lzyIUJNx4hvC9wHHHwz0MOTJdtnAA5_xKOHY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 