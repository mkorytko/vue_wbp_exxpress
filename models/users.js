const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schem = new Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
schem.set("toJSON", {
    virtuals: true,
});
module.exports = mongoose.model("User", schem);