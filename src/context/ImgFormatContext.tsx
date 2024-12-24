import { checkSupportWebP } from "@/utils/cdnImage";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

type ImgContextType = {
  supportingWebp: boolean;
  setSupportingWebp: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ImgFormatContext = createContext<ImgContextType>({ supportingWebp: true, setSupportingWebp: () => {} });

function ImgFormatContextProvider({ children }: PropsWithChildren) {
  const [supportingWebp, setSupportingWebp] = useState(true);

  useEffect(() => {
    checkSupportWebP().then((result) => setSupportingWebp(result));
  }, []);
  return <ImgFormatContext.Provider value={{ supportingWebp, setSupportingWebp }}>{children}</ImgFormatContext.Provider>;
}

export default ImgFormatContextProvider;
