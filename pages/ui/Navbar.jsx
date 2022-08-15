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
      name: 'Q&A',
      href: '#',
    },
  ]
  return (
    <>
      <nav className="max-w-[1000px] mx-auto relative overflow-hidden flex px-20 justify-between border-b bg-white">
        <Link href="/">
          <a>
            <Image
              src="/assets/landing_page1_MayI_logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <div className="flex items-center ml-auto">
          {navbar.map((data) => (
            <Link key={data.name} href={data.href}>
              <a className="mr-10 hover:text-indigo-500 font-bold">
                {data.name}
              </a>
            </Link>
          ))}
          <Link href="/login">
            <a className="font-heading text-white font-bold inline-flex items-center justify-center py-3 px-6 rounded-full transform duration-200 bg-indigo-300 hover:bg-indigo-500">
              Sign up
            </a>
          </Link>
        </div>
      </nav>
    </>
  )
}
