const {validationResult} = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next();
    }

    const extractErros = [];
    errors.array().map((err => extractErros.push(err.msg)));

    return res.status(422).json({
        errors: extractErros,
    });
};