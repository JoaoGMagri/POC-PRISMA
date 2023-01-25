import Joi from "joi";

export const SpendingSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
})