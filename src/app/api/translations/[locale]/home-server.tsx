// src/app/[locale]/HomeServer.tsx
import { unstable_setRequestLocale } from "next-intl/server";
import Home from "@/app/[locale]/page";

export default function HomeServer({ params }: any) {
  const { locale } = params;
  
  unstable_setRequestLocale(locale);
  
  return <Home params={params} />;
}
