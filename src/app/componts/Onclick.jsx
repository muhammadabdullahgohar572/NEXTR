"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export const Oncli = () => {
  const [name, username] = useState(" My Name is  Abdukllah");
  const com = () => {
    username("And My father name is Safdar");
  };
  const router = useRouter();
  return (
    <>
      <div className="text-center p-14">
        <h1 className="text-2xl font-semibold p-6">{name} </h1>
        <div onClick={()=>router.push('/About')}>
          <button
            onClick={com}
            className="bg-blue-600 text-yellow-200 p-5 font-semibold text-2xl text-center align-middle"
          >
            on click
          </button>
        </div>
      </div>
    </>
  );
};
// onClick={() => alert("ok")}
