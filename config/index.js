const dotenv = require("dotenv");
const path = require("path");

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root(".env") });

module.exports = {
    PORT: process.env.PORT || 3051,
    SESSION_SECRET: process.env.SESSION_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    IS_PRODUCTION: process.env.NODE_ENV === "production",
};