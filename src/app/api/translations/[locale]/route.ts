import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Params = {
  locale: string;
};

type Translations = {
  en: {
    Index: { title: string };
    Metadata: { title: string; description: string };
  };
  pt: {
    Index: { title: string };
    Metadata: { title: string; description: string };
  };
};

const translations: Translations = {
  en: {
    Index: { title: "Software Engineer" },
    Metadata: {
      title: "Portfolio",
      description:
        "Simple BoilerPlate for language switcher and theme switcher",
    },
  },
  pt: {
    Index: { title: "Engenheiro de Software" },
    Metadata: {
      title: "Portifólio",
      description: "Modelo Simples para o alternador de idiomas e tema",
    },
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { locale } = params;

  const translation = translations[locale as keyof Translations];

  if (!translation) {
    console.error("Invalid locale:", locale);
    return NextResponse.json({ error: "Locale not found" }, { status: 404 });
  }

  console.log("Translation for locale:", locale, translation);

  return NextResponse.json(translation);
}
