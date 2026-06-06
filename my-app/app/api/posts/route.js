import {createConnection} from '@/lib/db.js'
import {NextResponse} from 'next/server'


export async function GET() {
    try{
        const db = await createConnection()
        const sql = "SELECT * FROM posts"
        const [posts] = await db.query(sql)
        return NextResponse.json(posts)
    } catch (error ){
        console.log(error)
        return NextResponse.json ({error: error.message})

    console.log('Error name:', error.name)
    console.log('Error message:', error.message)
    console.log('Full error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
    }
}