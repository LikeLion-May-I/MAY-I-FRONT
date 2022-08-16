import React from 'react'

export default function ReporterList() {
  return (
    <>
      <div class="flex justify-center p-10">
        <div class="bg-white rounded-2xl border p-5 w-full">
          <div class="flex mb-5 text-center font-bold text-base justify-around text-black">
            <p>전문가</p>
            <p>제목</p>
            <p>기한</p>
            <p>진행상황</p>
          </div>
          <div class="flex p-3 justify-around text-base text-black">
            <p>김산보</p>
            <p>백신여권, 한국에도 도입해야 하는가?</p>
            <p>6시간 10분</p>
            <p>요청</p>
          </div>
          <div class="flex p-3 justify-around text-base text-black">
            <p>이경제</p>
            <p>코스피 이대로 떨어져도 괜찮은가?</p>
            <p>8시간 30분</p>
            <p>임시저장</p>
          </div>
        </div>
      </div>
    </>
  )
}
