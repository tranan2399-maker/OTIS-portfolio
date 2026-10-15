const BASE = import.meta.env.BASE_URL ?? "/";

// Ensure path always starts with the base URL prefix
const withBase = (path: string): string => {
  const base = BASE.endsWith("/") ? BASE.slice(0, -1) : BASE;
  if (path.startsWith(base)) return path;
  return base + path;
};

export const useRouter = () => {
  const push = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", withBase(path));
    }
  };

  const replace = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", withBase(path));
    }
  };

  const back = () => {
    if (typeof window !== "undefined") {
      window.history?.back?.();
    }
  };

  return {
    push,
    replace,
    back,
  };
};
