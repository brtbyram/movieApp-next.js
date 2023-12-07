"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function Tabs() {

    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')                                                     

    const tabs = [
        {
            name: 'En Popüler',
            link: 'popular'
        },
        {
            name: 'En Çok Oylanan',
            link: 'top_rated'
        },
        {
            name: 'Vizyondakiler',
            link: 'now_playing'
        },
        {
            name: 'Yakında Gelecekler',
            link: 'upcoming'
        }
    ]

  return (
    <div className="p-5 m-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7">
        {
            tabs.map((tab:any, index:number) => (
                <div key={index}>
                    <Link href={`/?genre=${tab.link}`} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.link === genre ? "underline underline-offset-8 text-amber-600" : ""}`}>{tab.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Tabs