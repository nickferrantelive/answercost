const isPages = process.env.GITHUB_PAGES === "true";
const base = isPages ? "/answercost" : "";
export default {
  output: isPages ? "export" : undefined,
  basePath: base,
  images: { unoptimized: true },
  trailingSlash: isPages,
  env: { NEXT_PUBLIC_BASE_PATH: base },
};
