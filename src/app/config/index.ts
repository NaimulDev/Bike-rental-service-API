import dotenv from "dotenv";

import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 5000,
  database_url: process.env.DATABASE_URL,
  jwt_secret: process.env.JWT_SECRET || "your_jwt_secret",
  bcrypt_salt_rounds: process.env.BCRYPT_SALY_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
