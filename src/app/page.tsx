"use client";
import { BANNER_IMGS, CARD_IMGS } from "@/constants/images";
import ImgCard from "@/components/ImgCard";
import { ImgFormatContext } from "@/context/ImgFormatContext";
import { preloadImgs } from "@/utils/cdnImage";
import { useDisclosure } from "@/hooks/useDisclosure";

import { useContext } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from "react-material-ui-carousel";
import ImgGallaryModal from "@/components/ImgGalleryModal";

const FIRST_IMG = CARD_IMGS[0];
const THUMB_IMG1 = CARD_IMGS[0];
const THUMB_IMG2 = CARD_IMGS[1];
const THUMB_IMG3 = CARD_IMGS[2];
const THUMB_IMG4 = CARD_IMGS[3];

export default function Home() {
  const { isOpen, onOpen, onToggle } = useDisclosure();
  // const { supportingWebp } = useContext(ImgFormatContext);
  // const preloadingImgs = [
  //   { src: FIRST_IMG, width: 400, height: 250 },
  //   { src: THUMB_IMG1, width: 100, height: 60 },
  //   { src: THUMB_IMG2, width: 100, height: 60 },
  //   { src: THUMB_IMG3, width: 100, height: 60 },
  //   { src: THUMB_IMG4, width: 100, height: 60 },
  // ];
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
          <Carousel>
            {BANNER_IMGS.map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-lg h-96"
              >
                <img
                  src={src.jpg.src}
                  alt={`cat${idx}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </section>
        <section
          // onMouseEnter={() => preloadImgs(preloadingImgs, supportingWebp)}
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <div className="cursor-pointer  grid gap-6 lg:grid-cols-3 lg:gap-12">
              {CARD_IMGS.map((src) => (
                <ImgCard key={src.src} src={src} handleClick={onOpen} />
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
      <ImgGallaryModal
        isOpen={isOpen}
        onOpenChange={onToggle}
        images={CARD_IMGS}
      />
    </div>
  );
}
