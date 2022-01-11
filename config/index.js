const serverMap = {
  production: "https://sidewrite.com",
  development: "https://sidewrite-rodritter.vercel.app",
};

const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
export const server = serverMap[env] ? serverMap[env] : "http://localhost:3000";
