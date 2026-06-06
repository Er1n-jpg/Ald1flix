"use client"
import { useEffect } from 'react'

export default function MyComponent() {
  useEffect(() => {
    const fetchData = async() => {
        try{
      const response = await fetch('/api/posts')
      const data = await response.json()
      console.log(data)
    } catch (error){
            console.log(error)
        }
    }
    fetchData()
  }, [])

  return(
    <div> 
      hi
    </div>
  )
}

