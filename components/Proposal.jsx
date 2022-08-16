import Image from 'next/image';
import React from 'react';

export default function Proposal() {
    const text = `안녕하세요.\n저는 중앙대학교 영자신문사 중앙헤럴드 문화부 기자 김중앙입니다.\n\n저희 중앙헤럴드에서는 이번 6월 호에 ‘백신여권, 한국에도 도입해야 하는가?’를 주제로 찬반양측의 의견을 담은 글을 작성하고자 합니다.\n이에 교수님의 견해를 담은 서면 인터뷰를 요청드리는 바입니다.\n\n인터뷰가 가능하시다면, 7월 13일까지 reporter@cau.ac.kr 주소로 원고를 보내주시기 바랍니다.\n양식은 없으며, 분량은 워드 기준 1p입니다.\n\n읽어주셔서 감사합니다.\n좋은 하루 보내시길 바랍니다.`
  return (
    <>
<section className="flex justify-center">
    <div className="container px-4">
  <div className="overflow-hidden bg-white rounded-md shadow-2xl p-3">
    <div className="border-coolGray-100">
      <div className="flex flex-wrap items-center justify-center mb-6">
        <div className="w-full md:w-auto p-2 text-center">
          <h2 className="text-coolGray-900 font-semibold text-3xl">May I 제안서</h2>
        </div>
        <div className="w-full md:w-auto p-2">
          <div className="flex flex-wrap justify-between -m-1.5"></div>
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 py-1 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="p-3 w-full md:w-1/4">
            <p className="text-coolGray-800 font-semibold">받는이</p>
          </div>
          <div className="w-full md:w-1/3 p-3 md:flex-1">
            <p className="w-full px-4 text-base font-normal outline-none text-black py-2">김산보</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 py-1 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">제목</p>
          </div>
          <div className="md:flex-1 p-3">
            <input className="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg shadow-input py-2" type="text" placeholder="백신여권, 한국에도 도입해야 하는가?" />
            </div>
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 py-1 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">소속</p>
          </div>
          <div className="w-full md:w-1/3 p-3 md:flex-1">
            <p className="w-full px-4 text-base font-normal outline-none text-black py-2">중앙대학교 영자신문사 중앙헤럴드</p>
          </div>
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 py-1 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">용도</p>
          </div>
          <div className="w-full p-3 md:flex-1">
            <input className="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="전문가 의견 기고"/>
            </div>
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 flex justify-center py-5">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">형식</p>
          </div>
          <div className="px-4 py-3 space-x-3">
            <label>
              <input type="radio" name="inline-radio" value="option 1"/>
                <span class="ml-1">대면</span>
            </label>
            <label>
              <input type="radio" name="inline-radio" value="option 2"/>
              <span class="ml-1">서면</span>
            </label>
            <label>
              <input type="radio" name="inline-radio" value="option 2"/>
              <span class="ml-1">전화</span>
            </label>
          </div>        
        </div>
      </div>
    </div>

    <div className="border-coolGray-100 py-3 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">분량</p>
          </div>
          <div className="w-full md:flex-1 p-3">
            <input className="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="워드 1페이지(11pt)"/>

            </div>
        </div>
      </div>
    </div>    

    <div className="border-coolGray-100 py-3 flex justify-center">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full p-3 md:w-1/4">
            <p className="text-coolGray-800 font-semibold">내용</p>
          </div>
          <div className="w-full md:flex-1 p-3">
          <textarea class="block w-full p-6 text-base text-coolGray-900 font-normal outline-none border border-coolGray-200 rounded-lg resize-none h-80 py-2" placeholder={text}></textarea></div>        
        </div>
      </div>
    </div>

    <div class="border-coolGray-100 flex justify-center py-3">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full p-3 md:w-1/4">
            <p class="text-sm text-coolGray-800 font-semibold">첨부파일</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <div class="relative items-center justify-center text-center text-green-500 border border-coolGray-200 rounded-lg flex justify-between p-3">
              <p class="mb-1 text-sm text-coolGray-800 font-medium">없음</p>
              <Image
                src="/assets/upload.svg"
                alt=""
                width={24}
                height={24}
              />
              <input class="absolute top-0 left-0 w-full opacity-0" type="file"/>
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-coolGray-100 py-3 flex justify-center">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full p-3 md:w-1/4">
            <p class="text-coolGray-800 font-semibold">참고링크</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <input class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="없음"/>

            </div>
        </div>
      </div>
    </div> 

    <div class="border-coolGray-100 py-3 flex justify-center">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full p-3 md:w-1/4">
            <p class="text-coolGray-800 font-semibold">기한</p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <input class="w-full px-4 text-base text-coolGray-900 font-normal outline-none focus:border-green-500 border border-coolGray-200 rounded-lg py-2" type="text" placeholder="2022-01-08"/>

            </div>
        </div>
      </div>
    </div> 

    <div class="border-coolGray-100 py-3 flex justify-center">
      <div class="w-full md:w-9/12">
        <div class="flex flex-wrap -m-3">
          <div class="w-full p-3 md:w-1/4">
            <p class="text-coolGray-800 font-semibold"></p>
          </div>
          <div class="w-full md:flex-1 p-3">
            <div class="border border-coolGray-200 rounded-lg">
              <div class="flex px-4 py-2 space-x-2">
                <Image
                    src="/assets/warning.svg"
                    alt=""
                    width={18}
                    height={18}
                />
                <p class="w-full text-base font-normal outline-none text-red-600">한번 전송하면 취소할 수 없어요. 신중하게 작성해주세요.</p>
              </div>
              <div class="flex px-4 py-2 space-x-2">
              <Image
                    src="/assets/warning.svg"
                    alt=""
                    width={18}
                    height={18}
                />
                <p class="w-full text-base font-normal outline-none text-red-600">명확하고 구체적으로 작성할수록 답변율이 높아요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    <div class="py-4 flex justify-center space-x-4">
        <button class="border p-2 w-28 rounded-full text-black">임시저장</button>
      <button class="border bg-violet-300 p-2 w-28 rounded-full text-black">전송</button>
    </div>

  </div>
  </div>
</section>
    </>
  );
};