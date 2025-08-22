import V1 from "@/app/versions/1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `PrintFlow - kompleksowe i zawsze pod ręką zarządzanie drukarnią w jednym miejscu`,
  description: `Aplikacja PrintFlow to kompletne rozwiązanie dla wszystkich metod druku – flexografii, druku cyfrowego arkuszowego i rolowego – dostosowane do specyficznych potrzeb polskiej branży poligraficznej.

`,
};


export default function Component() {
  return (
    <V1 />
  );
}
