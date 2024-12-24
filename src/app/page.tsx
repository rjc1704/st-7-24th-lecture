"use client";
import { bannerImgs, cardImgs } from "@/assets/imgs";
import ImgCard from "@/components/ImgCard";
import { ImgFormatContext } from "@/context/ImgFormatContext";
import { preloadImgs } from "@/utils/cdnImage";
import { useDisclosure } from "@/hooks/useDisclosure";
import dynamic from "next/dynamic";
import { Suspense, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-material-ui-carousel";
const ImgGallaryModal = dynamic(() => import("@/components/ImgGalleryModal"), {
  ssr: false,
});

const FIRST_IMG = cardImgs[0];
const THUMB_IMG1 = cardImgs[0];
const THUMB_IMG2 = cardImgs[1];
const THUMB_IMG3 = cardImgs[2];
const THUMB_IMG4 = cardImgs[3];

export default function Home() {
  const { isOpen, onOpen, onToggle } = useDisclosure();
  const { supportingWebp } = useContext(ImgFormatContext);
  const preloadingImgs = [
    { src: FIRST_IMG, width: 400, height: 250 },
    { src: THUMB_IMG1, width: 100, height: 60 },
    { src: THUMB_IMG2, width: 100, height: 60 },
    { src: THUMB_IMG3, width: 100, height: 60 },
    { src: THUMB_IMG4, width: 100, height: 60 },
  ];
  return (
    <div className="w-[1200px] flex flex-col mx-auto">
      <header className="w-full h-20 flex items-center justify-between px-4 md:px-6 text-xl">
        <div className="flex items-center justify-center">
          <span>리액트 로딩 최적화</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <div className="text-sm font-medium hover:underline underline-offset-4">
            이미지
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4">
            폰트
          </div>
          <div className="text-sm font-medium hover:underline underline-offset-4">
            코드스플리팅
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Carousel height={384}>
            {bannerImgs.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg h-96"
              >
                <picture>
                  <source srcSet={src.webp.src} type="image/webp" />
                  <LazyLoadImage
                    src={src.jpg.src}
                    alt={`cat${idx}`}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
            ))}
          </Carousel>
        </section>
        <section
          onMouseEnter={() => preloadImgs(preloadingImgs, supportingWebp)}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="cursor-pointer  grid gap-6 lg:grid-cols-3 lg:gap-12">
              {cardImgs.map((src) => (
                <ImgCard key={src} src={src} handleClick={onOpen} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-5">
          <div className="container px-4 md:px-6">
            <p className="text-gray-500 md:text-2xl lg:text-[36px]">
              {"가나다라마바사아자차카타파하"}
              <br />
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
              <br />
              {"abcdefghijklmnopqrstuvwxyz"}
              <br />
              {"0123456789"}
              <br />
              {"~`!@#$%^&*()-_=+[{]}|’”/?,<.>:;"}
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full h-20 flex items-center justify-center px-4 md:px-6 border-t">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Footer Contents Here
        </p>
      </footer>
      <Suspense
        fallback={<div className="bg-red-500 text-[50px]">Loading...</div>}
      >
        <ImgGallaryModal
          isOpen={isOpen}
          onOpenChange={onToggle}
          images={cardImgs}
        />
      </Suspense>
    </div>
  );
}
