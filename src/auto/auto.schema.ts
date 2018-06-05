import * as Joi from 'joi';
// npm install --save joi
export const AUTO_SCHEMA_INSERT = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .required()
            .integer(),
        nombreMarca: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorUno: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorDos: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        nombreModelo: Joi
            .string()
            .required()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        anio: Joi
            .number()
            .required()
            .integer()
            .min(1900)
            .max(2030),
        idConductor: Joi
            .number()
            .required()
            .integer(),
    });

export const AUTO_SCHEMA_UPDATE = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer(),
        nombreMarca: Joi
            .string()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorUno: Joi
            .string()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        colorDos: Joi
            .string()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        nombreModelo: Joi
            .string()
            .regex(/^[a-z A-Z]{3,50}$/)
            .min(3)
            .max(50),
        anio: Joi
            .number()
            .integer()
            .min(1900)
            .max(2030),
        idConductor: Joi
            .number()
            .integer(),
    });