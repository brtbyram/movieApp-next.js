"use client";
import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import MenuItem from './MenuItem';
import ThemeComp from './ThemeComp';
import { useRouter } from 'next/navigation';

function Header() {
  
  const [keyword, setKeyword] = useState('')
  const router = useRouter()
  const menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Movies',
      link: '/movies'
    },
    {
      name: 'TV Shows',
      link: '/tv-shows'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Sign In',
      link: '/login'
    }
  ]
  
  const searchFunc = (e:any) => {
    if (e.key === 'Enter' && keyword.length >= 3) {
      router.push(`/search/${keyword}`)
      setKeyword('')
    }
  }

  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">MovieApp</div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input onKeyDown={searchFunc} value={keyword} onChange={(e) => setKeyword(e.target.value)} type="text" className='outline-none flex-1 bg-transparent' placeholder="Search" />
        <BiSearch size={25}/>
      </div>
      <ThemeComp/>
      {menu.map((item:any, index:number) => (
        <MenuItem key={index} item={item}/>
      ))}
    </div>
  )
}

export default Header