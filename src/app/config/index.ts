import dotenv from "dotenv";

import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  jwt_secret:
    process.env.JWT_SECRET ||
    "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxODQzNDE1MSwiaWF0IjoxNzE4NDM0MTUxfQ.30As548iCSy6Tr6nimHxh2Fh54Hsb4zbq-gPHftYLOw",
  bcrypt_salt_rounds: process.env.BCRYPT_SALY_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
