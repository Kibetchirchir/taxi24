import { Joi } from 'celebrate'


export const userValidator = Joi.object().keys({
    first_name: Joi.string().required(),
    second_name: Joi.string().required(),
    phone_number: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required,
})