import { StaticImageData } from "next/image";

export type MemberInfo = {
  image: StaticImageData;
  name: string;
  title: string;
  description: string;
  linkedInTag?: string;
};
