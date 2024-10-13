"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";

export function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const handleChangeLanguage = (nextLocale: string) => {
    router.replace(`/${nextLocale}`);
  };

  return (
    <div className="flex flex-col items-center">
      <Switch
        checked={localActive === "pt"}
        onCheckedChange={(checked) =>
          handleChangeLanguage(checked ? "pt" : "en")
        }
      />
      <span className="mt-2">
        {localActive === "en" ? "EN" : "PT"}
      </span>
    </div>
  );
}
