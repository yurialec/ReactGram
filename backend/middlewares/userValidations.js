const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString()
            .withMessage("O nome é obrigatório")
            .isLength({ min: 3 })
            .withMessage("O nome precisa ter no mínimo três caractéres."),
        body("email")
            .isString()
            .withMessage("O e-mail é obrigatório")
            .isEmail()
            .withMessage("insira um e-mail válido."),
        body("password")
            .isString()
            .withMessage("A senha é obrigatória")
            .isLength({ min: 6 })
            .withMessage("A senha precisa ter no mínimo seis caracteres."),
        body("confirmpassword")
            .isString()
            .withMessage("A confirmação da senha é obrigatória")
            .custom((value, {req}) =>{
                if(value != req.body.password){
                    throw new Error("As senhas precisam ser iguais.");
                }
                return true;
            })
    ];
}

module.exports = {
    userCreateValidation,
}