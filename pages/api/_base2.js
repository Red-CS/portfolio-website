import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kcnvttpaqvkyaqsiummu.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxODYzOTIwMSwiZXhwIjoxOTM0MjE1MjAxfQ.LDccerMtdPIXqCd4afcshjakTWbU5jb53_vW5vqvcow'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;