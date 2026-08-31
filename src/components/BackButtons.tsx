"use client";

import { useRouter } from "next/navigation";

export default function BackButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-4 text-[#8CF5E4]">
      <button
        type="button"
        className="cursor-pointer hover:underline"
        onClick={() => {
          console.log("BACK CLICK");
          router.back();
        }}
      >
        BACK
      </button>

      <span>//</span>

      <button
        type="button"
        className="cursor-pointer hover:underline"
        onClick={() => {
          console.log("HOME CLICK");
          router.push("/");
        }}
      >
        HOME
      </button>
    </div>
  );
}