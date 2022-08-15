import Image from 'next/image'
import React from 'react'

export default function Login() {
  return (
    <>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex max-w-md mx-auto flex-col text-center">
            <a
              className="block mx-auto text-white text-3xl font-semibold leading-none"
              href="#"
            ></a>
            <div className="mt-12 mb-8 p-8 bg-white rounded shadow-2xl">
              <h4 className="m-3 mb-10 font-bold">
                전문가 인터뷰가 필요하다면? May I
              </h4>
              <div className="flex mb-4 border rounded-full p-1 px-4">
                <input
                  className="w-full font-semibold leading-none outline-none py-3 px-4"
                  type="email"
                  placeholder="name@email.com"
                />
              </div>
              <div className="flex px-4 border rounded-full mb-6 p-1">
                <input
                  className="w-full font-semibold leading-none outline-none py-3 px-4"
                  type="password"
                  placeholder="Enter your password"
                />
                <button className="ml-4" />
              </div>
              <button className="block w-full p-4 text-center text-white rounded bg-indigo-300 font-bold rounded-full">
                로그인
              </button>
              <p className="text-center my-6 text-gray-400 text-sm">
                간편하게 시작하기
              </p>
              <div className="px-3">
                <button
                  className="items-center py-3 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded rounded-full px-3 bg-yellow"
                  href="#"
                >
                  <Image
                    src="/assets/kakao-logo.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </button>

                <button
                  className="items-center py-3 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded rounded-full px-3 bg-white"
                  href="#"
                >
                  <Image
                    src="/assets/naver-logo.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </button>

                <button
                  className="items-center py-3 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded-full px-3"
                  href="#"
                >
                  <Image
                    src="/assets/google-logo.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </button>

                <button
                  className="items-center py-3 text-xs text-blueGray-500 font-semibold leading-none border hover:bg-blueGray-50 rounded-full px-3"
                  href="#"
                >
                  <Image
                    src="/assets/apple-logo.svg"
                    alt=""
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
