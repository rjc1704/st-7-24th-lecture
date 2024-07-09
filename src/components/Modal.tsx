"use client";

import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      router.back();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="bg-black/50 fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center"
    >
      <div className="w-[300px] h-[500px] border bg-green-300">{children}</div>
    </div>
  );
}
