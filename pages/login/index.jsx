import Image from 'next/image'
import React from 'react'
import { Navbar } from '../ui/Navbar'

export default function Login() {
  return (
    <>
      <Navbar />
      <section className="container max-w-[1000px] flex px-36 mx-auto py-12 ">
        <div className="w-full mt-12 p-16 shadow-2xl text-center rounded-2xl">
          <p className="mb-10 font-bold">전문가 인터뷰가 필요하다면? May I</p>
          <div className="w-2/3 mx-auto">
            <input
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
              placeholder="name@email.com"
            />
            <input
              className="mt-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3"
              placeholder="Enter your password"
            />
          </div>
          <button className="mt-3 px-10 py-2 text-center text-white bg-indigo-300 hover:bg-indigo-500 font-bold rounded-full">
            Login
          </button>
          <p className="text-center mt-6 mb-4 text-gray-400 text-md">
            Social Login
          </p>
          <div className="flex w-1/2 mx-auto justify-between">
            {login.map((data) => (
              <div className="space-x-2 py-3 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded-full px-3 bg-yellow">
                <button>
                  <Image src={data.src} alt="" width={25} height={25} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const login = [
  { name: 'kakao', src: '/assets/kakao-logo.svg' },
  { name: 'naver', src: '/assets/naver-logo.svg' },
  { name: 'google', src: '/assets/google-logo.svg' },
  { name: 'apple', src: '/assets/apple-logo.svg' },
]
