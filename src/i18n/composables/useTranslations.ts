import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";
import { LOCALES } from "../constants";

import type { Locale } from "../types";

export const useTranslations = () => {
  onMounted(() => {
    const storedLocale = window.localStorage.getItem("portfolio-locale") as Locale;
    
    // Nếu có locale lưu sẵn và locale đó vẫn hợp lệ (có trong LOCALES)
    if (storedLocale && storedLocale in LOCALES) {
      locale.value = storedLocale;
    } else {
      // Nếu không, ưu tiên ngôn ngữ trình duyệt, hoặc fallback về 'vn'
      const preferredLocale = navigator.language.split("-")[0] as Locale;
      if (preferredLocale in LOCALES) {
        locale.value = preferredLocale;
      } else {
        locale.value = "vn";
      }
    }
  });

  watch(locale, () => {
    if (!locale.value) return;
    window.localStorage.setItem("portfolio-locale", locale.value);
  });

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
