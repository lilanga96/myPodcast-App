import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  'https://ruswjhbzzumgfzklhibe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1c3dqaGJ6enVtZ2Z6a2xoaWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNDg2MjAsImV4cCI6MjAwNjcyNDYyMH0.6zBy3kvrP8ihV5chvR-_dHGgqcnWXObZX9_ziAivacM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

