import Joi from "joi"
import { customMessages, returnError } from "./validator.utils";
import { EventDto } from "../dto/events.dto";

export const EventsValidator = (data: EventDto) => {
    const eventSchema = Joi.object({
        name: Joi.string().required().label('Nom de l\'événement'),
        categories: Joi.array().items(Joi.string()).required().label('Catégories'),
        description: Joi.string().required().label('Description'),
        coverPicture: Joi.any().required().label('Photo de couverture'),
        badge: Joi.any().required().label('Badge'),
        addressId: Joi.string().required().label('ID de l\'adresse'),
        capacity: Joi.number().integer().min(1).required().label('Nombre de place'),
        tags: Joi.array().items(Joi.string()).required().label('Tags'),
        accessType: Joi.string().required().label('Type d\'accès'),
        prices: Joi.array().items(Joi.object({
            name: Joi.string().required().label('Nom du pass'),
            description: Joi.string().optional().label('Description'),
            amount: Joi.number().required().label('Montant'),
        })).optional().label('Prix'),
        startDate: Joi.string().required().label('Date de début'),
        endDate: Joi.string().required().label('Date de fin'),
        startTime: Joi.string().required().label("Heure de début"), // Format HH:mm
        endTime: Joi.string().required().label("Heure de fin"),   // Format HH:mm
    }).messages(customMessages)
        .unknown(false)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });


    console.log(data)

    return returnError(eventSchema.validate(data));
}

export const EventStepOneValidator = (data: EventDto) => {
    const eventSchema = Joi.object({
        name: Joi.string().required().label('Nom de l\'événement'),
        categories: Joi.array().items(Joi.string()).required().label('Catégories'),
        startDate: Joi.string().required().label('Date de début'),
        endDate: Joi.string().required().label('Date de fin'),
        startTime: Joi.string().required().label("Heure de début"), // Format HH:mm
        endTime: Joi.string().required().label("Heure de fin"),   // Format HH:mm
        addressId: Joi.string().required().label('ID de l\'adresse'),
        capacity: Joi.number().integer().min(1).required().label('Nombre de place'),
    }).messages(customMessages)
        .unknown(false)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });

    return returnError(eventSchema.validate(data));
}