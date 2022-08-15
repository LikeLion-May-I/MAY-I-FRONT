import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  const navbar = [
    {
      name: 'Expert',
      href: '#',
    },
    {
      name: 'Reporter',
      href: '#',
    },
    {
      name: 'Q&A',
      href: '#',
    },
  ]
  return (
    <>
      <nav className="max-w-[1000px] relative overflow-hidden flex mx-8 md:px-20 md:mx-auto justify-between border-b bg-white">
        <Link href="/">
          <Image
            src="/assets/landing_page1_MayI_logo.svg"
            alt="logo"
            width={100}
            height={80}
          />
        </Link>
        <div className="flex items-center ml-auto">
          {navbar.map((data) => (
            <Link key={data.name} href={data.href}>
              <a className="hidden md:flex text-sm md:text-lg ml-[0.6rem] md:mr-10 hover:text-indigo-500 font-bold">
                {data.name}
              </a>
            </Link>
          ))}
          <Link href="/login">
            <a className="font-heading text-white font-bold inline-flex items-center justify-center px-[1rem] text-sm md:text-lg py-2 md:px-6 rounded-full transform duration-200 bg-indigo-300 hover:bg-indigo-500">
              Sign Up/In
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
