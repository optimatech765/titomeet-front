import Joi from "joi";
import { ProviderDto } from "../dto/providers.dto";
import { customMessages, returnError } from "./validator.utils";

export const ProviderValidator = (providerData: ProviderDto) => {
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(50).label('Nom du prestataire'),
        categoryId: Joi.string().required().label('Categorie du prestataire'),
        email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
        addressId: Joi.string().required().label('Adresse du prestataire'),
        phoneNumber: Joi.string().required().label('Numéro de téléphone du prestataire'),
        website: Joi.string().uri().optional().label('Site web du prestataire'),
        image: Joi.any().required().label("Image du prestataire/Entreprise"),
        description: Joi.string().required().label('Description du prestataire'),
        pricingDetails: Joi.string().required().label('Tarifs du prestataire'),
        docs:Joi.object({
            cni: Joi.any().required().label('Carte nationale d\'identité'),
            ifu: Joi.any().required().label('Carte d\'identité'),
            rccm: Joi.any().required().label('RCCM'),
        }).required().label('Documents du prestataire'),
        
    }).messages(customMessages)
        .unknown(true)
        .messages({
            "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
        });
        console.log(providerData);
    return returnError(schema.validate(providerData));
}