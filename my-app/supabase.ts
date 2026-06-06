import { createClient } from '@supabase/supabase-js'
const sbrl = 'https://pxsziiptruxpbufqpodz.supabase.co'
const sbkey = 'sb_publishable_wjp-J-diOQaFASLUSASnDQ_oI1DnZBS'

export const supabase = createClient(sbrl, sbkey)