import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required().min(9).max(11)
  });
