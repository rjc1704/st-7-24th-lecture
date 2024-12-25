import ImgFormatContextProvider from "@/context/ImgFormatContext";

type Props = {
  children: React.ReactNode;
};
export default function Providers({ children }: Props) {
  return <ImgFormatContextProvider>{children}</ImgFormatContextProvider>;
}
