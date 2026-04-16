const rawBasePath = import.meta.env.BASE_URL;

const basePath =
  rawBasePath.endsWith("/") && rawBasePath !== "/"
    ? rawBasePath.slice(0, -1)
    : rawBasePath;

export function withBase(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (basePath === "/") {
    return normalizedPath;
  }
  return `${basePath}${normalizedPath}`;
}

export function homeWithBase(): string {
  if (basePath === "/") {
    return "/";
  }
  return `${basePath}/`;
}
