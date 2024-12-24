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
  height: number;
  src: string;
  format?: string;
};

export const getCloudinaryImgUrl = ({
  width,
  height,
  src,
  format = "webp",
}: CloudinaryImg) => {
  const extendedSrc = src.replace(
    "upload/",
    `upload/w_${width},h_${height},c_fill,q_auto/`,
  );

  return {
    originalUrl: extendedSrc,
    formattedUrl: changeImgFormat({ src: extendedSrc, format }),
  };
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
export const preloadImgs = (imgs: PreloadImg[], supportingWebp: boolean) => {
  imgs.forEach((img) => {
    const { width, height, src } = img;
    const image = new Image();
    const { originalUrl, formattedUrl } = getCloudinaryImgUrl({
      width,
      height,
      src,
    });
    image.src = supportingWebp ? formattedUrl : originalUrl;
  });
};
