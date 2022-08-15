import Image from 'next/image';
import React from 'react';

export default function Experts() {
  return (
    <>
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto mb-12 lg:mb-16 text-center">
                    <p className="text-lg font-black">당신의 전문가는 어떤 사람인가요?</p>
                </div>
            <div className="flex flex-wrap m-4">
            <div className="w-56 p-4">
                <div className="flex items-center justify-center py-12 shadow-2xl hover:bg-indigo-300 rounded-2xl">
                <div className="text-center">
                <Image 
                    src="/assets/society.svg"
                    alt=""
                    width={55}
                    height={55}
                />
                <h3 className="text-2xl font-bold">정치 · 사회</h3>
            </div>
        </div>
        </div>
        <div className="w-56 p-4">
        <div className="flex items-center justify-center py-12 shadow-2xl hover:bg-indigo-300 rounded-2xl">
            <div className="text-center">
                <Image 
                    src="/assets/economy.svg"
                    alt=""
                    width={55}
                    height={55}
                />
                <h3 className="text-2xl font-bold font-heading">경제 · 금융</h3>
            </div>
        </div>
        </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 rounded-lg shadow-2xl hover:bg-indigo-300">
        <div className="text-center">
            <Image 
                    src="/assets/education.svg"
                    alt=""
                    width={55}
                    height={55}
                />
            <h3 className="text-2xl font-bold font-heading">교육</h3>
        </div>
      </div>
    </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 shadow-2xl hover:bg-indigo-300 rounded-2xl">
        <div className="text-center">
        <Image 
                    src="/assets/art.svg"
                    alt=""
                    width={55}
                    height={55}
                />
            <h3 className="text-2xl font-bold font-heading">문화 · 예술</h3>
        </div>
      </div>
    </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 shadow-2xl hover:bg-indigo-300 rounded-2xl">
        <div className="text-center">
        <Image 
                    src="/assets/it.svg"
                    alt=""
                    width={55}
                    height={55}
                />
          <h3 className="text-2xl font-bold font-heading">IT · 과학</h3>
        </div>
      </div>
    </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 shadow-2xl hover:bg-indigo-300 rounded-2xl">
        <div className="text-center">
        <Image 
                    src="/assets/law.svg"
                    alt=""
                    width={55}
                    height={55}
                />
            <h3 className="text-2xl font-bold font-heading">법률</h3>
        </div>
      </div>
    </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 rounded-lg shadow-2xl hover:bg-indigo-300">
        <div className="text-center">
        <Image 
                    src="/assets/medical.svg"
                    alt=""
                    width={55}
                    height={55}
                />
            <h3 className="text-2xl font-bold font-heading">의료 · 복지</h3>
        </div>
      </div>
    </div>
    <div className="w-56 p-4">
      <div className="flex items-center justify-center py-12 rounded-lg shadow-2xl hover:bg-indigo-300">
        <div className="text-center">
        <Image 
                    src="/assets/etc.svg"
                    alt=""
                    width={55}
                    height={55}
                />
            <h3 className="text-2xl font-bold font-heading">기타</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};