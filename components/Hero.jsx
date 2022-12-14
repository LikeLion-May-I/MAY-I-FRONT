import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <main className="relative border">
        <Image
          className="z-[-1]"
          src="assets/bg.svg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
       <div className="mx-auto max-w-[1000px] w-3/4 py-20 md:py-36 px-6 ">
          <div className="text-left w-full flex text-2xl md:text-4xl font-bold text-gray-900">
            <span className="block">
              당신의 전문가에게
              <br />
              지금 바로
              <p className="font-bold mx-3 inline text-indigo-500">May I</p>
              하세요
            </span>
          </div>
          <div className="my-6 w-full flex text-center text-sm md:text-lg font-medium text-gray-500">
            <span>기다림 없는 인터뷰 컨택 플랫폼, May I</span>
          </div>
          <div className="absolute z-10">
            <button className="px-4 md:px-12 py-2 text-center text-md md:text-xl text-white bg-indigo-300 hover:bg-indigo-500 font-bold rounded-xl">
              전문가 바로 찾기
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
