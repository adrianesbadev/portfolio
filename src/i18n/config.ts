export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

const localeSet = new Set(locales);

export function isLocale(value: string | null | undefined): value is Locale {
  return Boolean(value) && localeSet.has(value as Locale);
}

export function normalizeLocale(value: string | null | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalizedPathname = pathname.toLowerCase();
  if (normalizedPathname === '/en' || normalizedPathname.startsWith('/en/')) {
    return 'en';
  }
  return defaultLocale;
}
