export const config = {
  appUrl:
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
      : `http://localhost:3000`,
  githubUrl: "https://github.com/akash3444/basecn",
};

export const siteConfig = {
  name: "basecn",
  title: "shadcn/ui components powered by Base UI",
  description:
    "Beautifully crafted shadcn/ui components powered by Base UI, providing a solid foundation to build modern and elegant interfaces with speed.",
  url: config.appUrl,
};
