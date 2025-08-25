import { Metadata } from "next";
import V1 from "@/app/versions/1";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_NODE_ENV === "development" ? "🏗️ " : ""}PrintFlow - kompleksowe zarządzanie drukarnią`,
  description: `Aplikacja PrintFlow to kompletne rozwiązanie dla wszystkich metod druku – flexografii, druku cyfrowego arkuszowego i rolowego – dostosowane do specyficznych potrzeb polskiej branży poligraficznej.`,
};

export default function IndexPage() {
  return (
    <V1 />
  );
}
