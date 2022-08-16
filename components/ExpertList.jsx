import React from 'react';

export default function ExpertList() {
  return (
    <>
        <div class="flex justify-center p-10">
  <div class="bg-white rounded-10 border p-5 w-full">
    <div class="flex mb-5 text-center font-bold text-base justify-evenly text-black">
      <p>소속</p>
      <p>제목</p>
      <p>기한</p>
      <p>진행상황</p>
    </div>
    <div class="flex p-3 justify-around text-base text-black">
      <p>중앙헤럴드</p>
      <p>백신여권, 한국에도 도입해야 하는가?</p>
      <p>6시간 10분</p>
      <p>요청</p>
    </div>
    <div class="flex p-3 justify-around text-base text-black">
      <p>한국신문</p>
      <p>블록체인의 미래, 5명의 전문가에게 물어봤다</p>
      <p>12시간 30분</p>
      <p>요청</p>
    </div>
    <div class="flex p-3 justify-around">
      <p>우리경제</p>
      <p>급부상 헬스케어 시장, 당신의 정보 과연 안전한가?</p>
      <p>24시간 50분</p>
      <p>요청</p>
    </div>
  </div>
</div>
    </>
  );
};