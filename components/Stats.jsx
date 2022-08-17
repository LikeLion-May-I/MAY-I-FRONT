import Image from 'next/image'
import React from 'react'

const Stats = () => {
  const stats = [
    {
      number: '832명',
      title: '신뢰할 수 있는 전문가',
      src: 'assets/stats1.svg',
    },
    { number: '78명', title: '하루 평균 매칭', src: 'assets/stats2.svg' },
    { number: '96%', title: '요청 응답률', src: 'assets/stats3.svg' },
  ]
  return (
   <div className="max-w-[1000px] h-auto mx-auto py-12">
      <div className="mx-auto text-center">
    <h2 className="text-xl md:text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight">
          <p className="font-bold mx-1 inline text-indigo-500">May I</p>는
          이렇게 활동해요
        </h2>
      </div>

      <div className="mt-10 relative max-w-[1000px] mx-auto px-8">
        <div className="max-w-4xl mx-8 md:mx-20">
          <div className="block md:flex rounded-lg bg-white shadow-2xl">
            {stats.map((stat) => (
              <div className="md:w-1/3 border-b border-gray-100 px-3 py-4 md:p-10 text-center">
                <Image src={stat.src} width={200} height={200} />
                <p className="mt-3 text-3xl md:text-5xl tracking-tight font-bold text-indigo-500">
                  {stat.number}
                </p>
                <p className="mt-2 text-md md:text-lg leading-6 font-medium text-gray-500">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
