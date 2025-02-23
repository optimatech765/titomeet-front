import {Image} from "@heroui/react";
import NextImage from "next/image";

export const PubCardComponent = () => {
  return (
    <Image
      alt="HeroUI hero Image"
    //   as={NextImage}
     
      src="https://heroui.com/images/hero-card-complete.jpeg"
     
      className="w-full"
    />
  );
}
