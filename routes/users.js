const express = require("express");
const router = express.Router();
const models = require("../models");
const regCorrectLogin = /[a-zA-Z0-9_][^а-яёЁА-Я]{3,15}/i;
const regCorrectPass = /[a-zA-Z0-9_][^а-яёЁА-Я]{4,30}/i;

// POST register
router.post("/register", (req, res) => {
    const { login, password, passwordConfirm } = req.body;
    if (!login || !password || !passwordConfirm) {
        res.json({
            access: false,
            error: "Все поля должны быть заполнены",
            fields: ["login", "password", "passwordConfirm"],
        });
    }   else if(!login.match(regCorrectLogin)) {
        res.json({
            access: false,
            error: "Логин должен содержать только цифры и латинские буквы",
            fields: ["login"]
        });
    }   else if(login.length < 4 || login.length > 15) {
        res.json({
            access: false,
            error: "Длина лоига должна быть минимум 4 - максимум 15 символов",
            fields: ["login"]
        });
    }   else if(!password.match(regCorrectPass)) {
        res.json({
            access: false,
            error: "Пароль должен содержать только цифры и латинские буквы и быть не менее 5 символов.",
            fields: ["password", "passwordConfirm"]
        });
    }   else if(password !== passwordConfirm) {
        res.json({
            access: false,
            error: "Пароли не совпадают",
            fields: ["password", "passwordConfirm"]
        });
    }   else {
            models.User.findOne({login}).then((user) => {
                if (!user) {
                        models.User.create({login, password})
                            .then((user) => {
                                res.json({
                                    access: true
                                })
                            }).catch((e) => {
                                res.json({
                                    access: false,
                                    error: "Ошибка, попробуйте позже",
                            });
                        });
                } else {
                    res.json({
                        access: false,
                        error: "Логин уже существует",
                        fields: ["login"]
                    });
                }
        })
    }
});

// User logout
router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy(() => {
            res.redirect("/");
        })
    } else {
        res.redirect("/");
    }
});

module.exports = router;