import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='w-full px-[24px] py-5'>
        <Image src="https://i.imgur.com/YcdjEZW.png" className='w-[150px] h-[30px]' width={150} height={150} alt='logo' />
    </header>
  )
}
