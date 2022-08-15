import React from 'react'

export default function Sidebar() {
  return (
    <>
<div class="flex-col bg-white w-48">
  <ul class="mb-8 text-sm font-medium"><li>
    <a class="flex items-center pl-3 py-3 hover:bg-indigo-50 rounded text-black pr-4 border-b-2" href="#">
      <span>정치 · 사회</span>
    </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black border-b-2" href="#">
        <span>경제 · 금융</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black border-b-2" href="#">
        <span>교육</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black border-b-2" href="#">
        <span>문화 · 예술</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 pr-4 hover:bg-indigo-50 rounded text-black border-b-2" href="#">
        <span>IT · 과학</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 hover:bg-indigo-50 rounded text-black pr-4 border-b-2" href="#">
        <span>법률</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 hover:bg-indigo-50 rounded text-black pr-4 border-b-2" href="#">
        <span>의료 · 복지</span>
      </a>
    </li>
    <li>
      <a class="flex items-center pl-3 py-3 hover:bg-indigo-50 rounded text-black pr-4" href="#">
        <span>기타</span>
      </a>
    </li>
  </ul>
  </div>
    </>
  );
};