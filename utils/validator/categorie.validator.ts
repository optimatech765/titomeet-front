import Joi from "joi";
import { ProviderDto } from "../dto/providers.dto";
import { customMessages, returnError } from "./validator.utils";

export const CategorieValidator = (providerData: ProviderDto) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50).label('Nom de la catégorie'),
        description: Joi.string().required().label('Description de la catégorie'),

    }).messages(customMessages)
        .unknown(true)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });
    console.log(providerData);
    return returnError(schema.validate(providerData));
}