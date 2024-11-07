export const getEnvironment = () => {
  const NEXT_PUBLIC_TEMPLATE_CLIENT_ID =
    process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID || "";
  const THIRDWEB_API_SECRET_KEY = process.env.THIRDWEB_API_SECRET_KEY || "";
  const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x5b0b4c9fd1ffc668ca18c153df80aee4ba7c510c245c9107ae16dbf35fd039f6";
  const DOMAIN =
    process.env.DOMAIN || "https://techvantage.icu";
  const FACTORY_ADDRESS =
    process.env.FACTORY_ADDRESS || "0x4227171B7230B3cC220D69F49491cc816446dD85";
  const ENCRYPTION_PASSWORD = process.env.ENCRYPTION_PASSWORD || "";
  const THIRDWEB_ENGINE_URL =
    "https://ec2-52-23-246-237.compute-1.amazonaws.com:3005";
  const THIRDWEB_ENGINE_ACCESSTOKEN =
    process.env.THIRDWEB_ENGINE_ACCESSTOKEN ||
    "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweGM4OGE2RjM0M0RCYzgyNTk0OTMxNGE4MTk1NGY0NzFhNDMzMzk0MGQiLCJzdWIiOiIweGE0RGFjZTAxNDI5ZjQzNDBmODUyZDE0ODY2NzhBMGViRjI4RDIwYUUiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ4NjgzNjYxODcsIm5iZiI6MTcxNDc2NjE4NywiaWF0IjoxNzE0NzY2MTg3LCJqdGkiOiI3NDZlOWFmYi1hNjE0LTRlNTUtYmIxNS1hYWZkZDgzM2ViMDYiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHg1Y2RhZTI1NWUxYWY5YjY4YjQ1YjVjM2E0ZjNlMGRlODEwMjVhYTAzY2FjZWE1YzA1ZDA5YWZhNzIyOGM5MWU0MzAyMzE2MzBmMzlhZWQ3NmFlYWE0MDJhMjkxNmMzOTkyNDA4MjIxNWQ3ZTJkMGU3MTk4NmI0ODkwNDA0YWIyYzFi";
  const THIRDWEB_ENGINE_WALLET = process.env.THIRDWEB_ENGINE_WALLET || "0xa4Dace01429f4340f852d1486678A0ebF28D20aE";
  const ADMIN_WALLET_ADDRESS = process.env.ADMIN_WALLET_ADDRESS || "";
  const POSTGRES_CONNECTION_URL = process.env.POSTGRES_CONNECTION_URL || "";

  return {
    NEXT_PUBLIC_TEMPLATE_CLIENT_ID,
    THIRDWEB_API_SECRET_KEY,
    PRIVATE_KEY,
    DOMAIN,
    FACTORY_ADDRESS,
    ENCRYPTION_PASSWORD,
    THIRDWEB_ENGINE_URL,
    THIRDWEB_ENGINE_ACCESSTOKEN,
    THIRDWEB_ENGINE_WALLET,
    ADMIN_WALLET_ADDRESS,
    POSTGRES_CONNECTION_URL,
  };
};