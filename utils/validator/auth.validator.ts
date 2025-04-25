import Joi from 'joi';
import { customMessages, returnError } from './validator.utils';
import { LoginDto, SignUpDto } from '../dto/auth.dto';

export const authValidator = (data: LoginDto) => {

    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string()
            .min(4)
            .pattern(/[A-Z]/, 'majuscule') // au moins une majuscule
            .pattern(/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\\/]/, 'symbole')
            .required().label('Mot de passe'),
    })
        .messages(customMessages)
        .unknown(false)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });

    return returnError(schema.validate(data));

}

export const registerValidator = (data: SignUpDto) => {

    const schema = Joi.object({
        firstName: Joi.string().required().label('Prénom'),
        lastName: Joi.string().required().label('Nom'),
        username: Joi.string().required().label('Nom d\'utilisateur'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string()
            .min(4)
            .pattern(/[A-Z]/, 'majuscule') // au moins une majuscule
            .pattern(/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\\/]/, 'symbole')
            .required().label('Mot de passe'),
        confirmPassword: Joi.string().equal(Joi.ref('password')).required().label('Confirmer le mot de passe'),
    })
        .messages({
            ...customMessages,
            'any.only': '{{#label}} doit être identique à Mot de passe.'
        })
        .unknown(false)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });

    return returnError(schema.validate(data));

}

export const emailValidator = (data: string) => {
    const schema = Joi.string().email({ tlds: { allow: false } }).required().label('Email')
        .messages({
            ...customMessages,
            'any.only': '{{#label}} doit être identique à Mot de passe.'
        })

    return returnError(schema.validate(data));
}

export const passwordValidator = (data: any) => {
    const schema = Joi.object({
        password: Joi.string()
            .min(4)
            .pattern(/[A-Z]/, 'majuscule') // au moins une majuscule
            .pattern(/[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\\/]/, 'symbole')
            .required().label('Mot de passe'),
        confirmPassword: Joi.string().equal(Joi.ref('password')).required().label('Confirmer le mot de passe'),
    })
        .messages({
            ...customMessages,
            'any.only': '{{#label}} doit être identique à Mot de passe.'
        })
        .unknown(false)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });

    return returnError(schema.validate(data));
}