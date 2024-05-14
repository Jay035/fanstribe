import React, { useEffect } from 'react'
import NewsFetch from '../components/NewsFetch'

export default function News() {
    useEffect(() => {
        NewsFetch()
    }, [])
  return (
    <div>News</div>
  )
}
