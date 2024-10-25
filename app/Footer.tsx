import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import techkunLogo from "@/public/Images/icon.png";

export default function Footer() {
  return (
    <div className='bg-gray-300'>
        <div className='case-responsive-container'>
            <div className='w-full py-4 flex flex-row justify-between items-start'>
                <div className='flex flex-row items-center space-x-4'>
                    <Link className='w-8' href="/">
                        <Image src={techkunLogo} alt='techkun-logo' className='w-full'/>
                    </Link>
                    <h1 className='text-xl font-semibold'>Techkun</h1>
                </div>
                <div className=''>
                    <div>Services</div>
                    <div>Carriers</div>
                    <div>About Us</div>
                </div>
            </div>
            <div className='border-t w-full'></div>
        </div>
    </div>
  )
}
