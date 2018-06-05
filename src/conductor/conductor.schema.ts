import * as Joi from 'joi';
// npm install --save joi
export const CONDUCTOR_SCHEMA_INSERT = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .required()
            .integer(),
        nombres: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,100}$/)
            .min(3)
            .max(100),
        apellidos: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,100}$/)
            .min(3)
            .max(100),
        fechaNacimiento: Joi
            .date()
            .required(),
        numeroAutos: Joi
            .number()
            .required()
            .integer(),
        licenciaValida: Joi
            .boolean()
            .required(),
    });

export const CONDUCTOR_SCHEMA_UPDATE = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer(),
        nombres: Joi
            .string()
            .regex(/^[a-z A-Z]{3,100}$/)
            .min(3)
            .max(100),
        apellidos: Joi
            .string()
            .regex(/^[a-z A-Z]{3,100}$/)
            .min(3)
            .max(100),
        fechaNacimiento: Joi
            .date(),
        numeroAutos: Joi
            .number()
            .integer(),
        licenciaValida: Joi
            .boolean(),
    });