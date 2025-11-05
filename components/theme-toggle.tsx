'use client'
import { useEffect, useState } from 'react'
export function ThemeToggle(){
  const [dark,setDark]=useState(false)
  useEffect(()=>{
    setDark(document.documentElement.classList.contains('dark'))
  },[])
  function toggle(){
    const v = !dark
    setDark(v)
    document.documentElement.classList.toggle('dark', v)
    try{ localStorage.setItem('theme', v?'dark':'light') }catch{}
  }
  return (
    <button className="rounded-lg px-3 py-1 border dark:border-slate-700" onClick={toggle} aria-label="Toggle tema">
      {dark? '🌙 Gelap':'☀️ Terang'}
    </button>
  )
}
