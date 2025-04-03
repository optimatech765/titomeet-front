/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from "joi";
import { customMessages, returnError } from "./validator.utils";

export const ProvidersValidatorStepOne = (data: any) => {

    const schema = Joi.object({
        name: Joi.string().required().label("Nom du prestataire/Entreprise"),
        categoryId: Joi.string().required().label("Category"),
        email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
        addressId: Joi.string().required().label("Adresse"),
        phoneNumber: Joi.string().required().label("Téléphone"),
        website: Joi.string().uri().required().label("Site web"),
    })
        .messages(customMessages)
        .unknown(true)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });
    return returnError(schema.validate(data));
}

export const ProvidersValidatorStepTwo = (data: any) => {

    const schema = Joi.object({
        image: Joi.any().required().label("Image du prestataire/Entreprise"),
        description: Joi.string().required().label("Description"),
        pricingDetails: Joi.string().required().label("Details de prix"),
    })
        .messages(customMessages)
        .unknown(true)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });
    return returnError(schema.validate(data));
}