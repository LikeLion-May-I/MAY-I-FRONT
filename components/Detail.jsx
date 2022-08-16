import Image from 'next/image';
import React from 'react';

export default function Detail() {
  return (
    <>
    <section class="w-128 overflow-hidden py-36 relative">
        <div class="relative z-10 container mx-auto px-4">
  <div class="flex flex-wrap -m-6 w-full">
    <div class="w-full flex px-6 justify-center">
      <div class="bg-white rounded-10 shadow-2xl flex">
        <div class="flex-col flex-wrap w-72 p-4">
          <div class="flex justify-center p-8">
            <Image
                src="/assets/blank.svg"
                alt=""
                width={150}
                height={150}
            />
            </div>
          <h3 class="font-heading font-medium text-xl text-black text-center">김산보</h3>
          <p class="mb-7 text-lg text-black text-center">중앙대학교 산업보안학과 교수</p>
          <div class="flex">
            <p class="text-black border rounded-full text-center text-base w-20"># 블록체인</p>
          </div>
        </div>

        <div class="flex-col p-10">
          <div class="w-full">
            <div class="bg-white rounded border p-4 mb-5">
              <div class="flex text-black justify-between">
                <p class="font-semibold">학력</p>
                <p>중앙대학교 경영학 박사</p>
              </div>
              <div class="flex text-black justify-between">
                <p class="font-semibold">이메일</p>
                <p>professor@cau.ac.kr</p>
              </div>
              <div class="flex justify-between text-black">
                <p class="font-semibold">사무실</p>
                <p>중앙대학교 310관 1502호</p>
              </div>
              <div class="flex justify-between">
                <p class="font-semibold">연락처</p>
                <p class="text-black">02-820-1234</p>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="bg-white rounded border mb-5 p-4">
              <h3 class="mb-5 font-heading font-bold text-black">이전 인터뷰 기록</h3>
              <div class="flex justify-between text-base space-x-4">
                <p class="text-gray-900">“지속 가능한 블록체인 생태계에 대한 고찰”</p>
                <p class="text-gray-900">2022/04/05</p>
              </div>
              <div class="flex justify-between text-base space-x-4">
                <p class="text-gray-900">“중앙대 블록체인서비스연구센터, 블록체인 기반 연구 시작”</p>
                <p class="text-gray-900">2021/12/11</p>
              </div>
            </div>
          </div>
          <button class="bg-indigo-300 w-full rounded-full mb-5 p-3 font-semibold">취재 요청하기</button>
          <div class="flex justify-evenly text-base">
            <Image
                src="/assets/comment.svg"
                alt=""
                width={20}
                height={18}
            />
            <p>응답률 95%</p>
            <Image
                src="/assets/response-time.svg"
                alt=""
                width={20}
                height={18}
            />
            <p>평균 30분 이내 응답</p>
            <Image
                src="/assets/history.svg"
                alt=""
                width={20}
                height={18}
            />
            <p>최근 1일 이내 활동</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
    </>
  );
};