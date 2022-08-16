import Image from 'next/image';
import React from 'react';

export default function Table() {
  return (
    <>
    <section class="justify-center flex">
        <div class="container p-4">
    <div class="flex">
    <div class="w-26">
      <div class="bg-white shadow-2xl rounded-2xl p-4">
        <div className="flex mb-3 justify-end">
        <Image
            src="/assets/verify.svg"
            alt=""
            width={30}
            height={28}
        />
        </div>
        <div class="flex items-center mb-4">
            <div className="rounded-full object-cover">
        <Image
            src="/assets/blank.svg"
            alt=""
            width={70}
            height={70}
        />
        </div>
            <div class="pl-4">
        <p class="font-bold md:w-1/3">김산보</p>
        <p class="text-gray-700">중앙대학교 산업보안학과 교수</p>
        </div>
        </div>
        <p class="mb-5 border-2 rounded-full text-center text-black w-20">#블록체인</p>
        <div class="flex justify-start space-x-4">
            <Image
                src="/assets/comment.svg"
                alt=""
                width={20}
                height={18}
            />
            <p>95%</p>
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
  </div>
  </div>
</section>
    </>
  );
};