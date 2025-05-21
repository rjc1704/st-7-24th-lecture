import { CLOUDINARY_BASE_URL } from "@/constants/images";

export const changeImgFormat = ({
  src,
  format,
}: {
  src: string;
  format: string;
}) => {
  return src.replace(/\.[^/.]+$/, `.${format}`);
};

type CloudinaryImg = {
  width: number;
  height?: number;
  src: string;
  format?: string;
};

export const getCloudinaryImgUrl = ({
  width,
  height = undefined,
  src,
}: CloudinaryImg) => {
  const heightStr = height ? `,h_${height}` : "";
  return `${CLOUDINARY_BASE_URL}/w_${width}${heightStr},c_fill,q_auto,f_auto/${src}`;
};

export const checkSupportWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function () {
      resolve(true);
    };
    img.onerror = function () {
      resolve(false);
    };
    img.src =
      "data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA";
  });
};

type PreloadImg = { src: string; width: number; height: number };
export const preloadImgs = (imgs: PreloadImg[]) => {
  return Promise.all(
    imgs.map((img) => {
      const { width, height, src } = img;
      return new Promise((resolve, reject) => {
        const image = new Image();
        const imgUrl = getCloudinaryImgUrl({
          width,
          height,
          src,
        });

        image.onload = () => resolve(image);
        image.onerror = () =>
          reject(new Error(`Failed to load image: ${image.src}`));
        image.src = imgUrl;
      });
    }),
  );
};
