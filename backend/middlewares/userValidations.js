const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name").isString().withMessage("O nome é obrigatório")
    ];
}

module.exports = {
    userCreateValidation,
}