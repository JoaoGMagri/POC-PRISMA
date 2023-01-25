import Joi from "joi";

export const SignUpSchema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
})

export const SignInSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().required(),
})