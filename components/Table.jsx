import { data } from 'autoprefixer'
import Image from 'next/image'
import React from 'react'

export default function Table() {
  const table = [
    {
      name: '김산보',
      career: '중앙대학교 산업보안학과 교수',
      tag: '블록체인',
      percent: '95%',
    },
    {
      name: '박서버',
      career: '당근마켓 PM',
      tag: '백엔드',
      percent: '100%',
    },
    {
      name: '이솝',
      career: '스타트업 개발자',
      tag: '풀스텍',
      percent: '85%',
    },
    {
      name: '추기계',
      career: '한국기계연구원',
      tag: '아두이노',
      percent: '95%',
    },
    {
      name: '강연구',
      career: '중앙대학교 소프트웨어학과 교수',
      tag: '컴퓨터 비전',
      percent: '90%',
    },
    {
      name: '고개발',
      career: 'IT 기업 개발자',
      tag: '앱 아키텍처',
      percent: '100%',
    },
  ]

  return (
    <>
      <section className="flex justify-center">
        <div className="container p-4">
          <div className="flex justify-evenly flex-wrap">
            {table.map((data) => (
              <div className="w-full lg:w-1/3">
                <div className="bg-white shadow-2xl rounded-2xl p-5">
                  <div className="flex mb-3 justify-end">
                    <Image
                      src="/assets/verify.svg"
                      alt=""
                      width={30}
                      height={28}
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="rounded-full object-cover">
                      <Image
                        src="/assets/blank.svg"
                        alt=""
                        width={70}
                        height={70}
                      />
                    </div>

                    <div className="pl-4">
                      <p className="font-bold md:w-1/3" key={data.name}>
                        {data.name}
                      </p>
                      <p className="text-gray-700">{data.career}</p>
                    </div>
                  </div>
                  <p className="mb-5 border-2 rounded-full text-center text-black w-28">
                    # {data.tag}
                  </p>

                  <div className="flex justify-start space-x-4">
                    <Image
                      src="/assets/comment.svg"
                      alt=""
                      width={20}
                      height={18}
                    />
                    <p>{data.percent}</p>
                    <Image
                      src="/assets/response-time.svg"
                      alt=""
                      width={20}
                      height={18}
                    />
                    <p>30분 이내</p>
                    <Image
                      src="/assets/history.svg"
                      alt=""
                      width={20}
                      height={18}
                    />
                    <p>최근 1일 이내</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
