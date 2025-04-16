/* eslint-disable @typescript-eslint/no-explicit-any */

export const customMessages = {
    "string.base": "{{#label}} doit être une chaîne de caractères",
    "string.uri": "{{#label}} doit être une URL valide",
    "string.empty": "{#label} ne doit pas être vide",
    "array.base": "{{#label}} doit être un tableau",
    "array.min": "{#label} doit comporter au minimum {{#limit}} elément(s)",
    "array.max": "{#label} doit comporter au plus {{#limit}} elément(s)",
    "array.length": "{#label} doit comporter au minimum {{#limit}} elément(s)",
    "string.email": "Veuillez fournir une adresse email valide pour {{#label}}",
    "string.required": "{{#label}} est obligatoire",
    "string.length":
        "{{#label}} doit contenir contient {{#limit}} de caractère(s)",
    "string.min": "{{#label}} doit comporter au minimum {{#limit}} caractère(s)",
    "string.max": "{{#label}} doit comporter au plus {{#limit}} caractère(s)",
    "any.required": "{{#label}} est obligatoire",
    "string.isoDate": "{{#label}} doit être une date valide au format ISO",
    "string.valid": "{{#label}} n'a pas une valeur valide",
    "boolean.base": "{{#label}} doit être un boolean",
    "number.base": "{{#label}} doit être un nombre",
    "object.base": "{{#label}} doit être un objet",
    "string.pattern.base": "{{#label}} est invalide",
    //  "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
    "object.unknown": " Vous aviez ajouté un champ supplémentaire {{#label}}",
    "date.base": "{{#label}} doit être une date valide",
    "date.min": "{{#label}} doit être après le {{#limit}}", // Message pour date min
    "date.max": "{{#label}} doit être avant le {{#limit}}", // Message pour date max
    "any.only": "{{#label}} doit être égal à {{#compare}}",
    'string.pattern.name.majuscule': 'Le mot de passe doit contenir au moins 1 lettre majuscule',
    'string.pattern.name.symbole': 'Le mot de passe doit contenir au moins 1 caractère spécial',
};

export const returnError = (response: any) => {
    const { error } = response;
    if (error) {
        const firstError = error.details[0];
        const fieldName = firstError.path[0];
        const errorMessage = firstError.message;
        const detail = error.details[0];
        return {
            valid: false,
            error: true,
            errorData: {
                field: fieldName,
                message: errorMessage,
                position: detail?.context?.key,
                positionArray: error.details[0]["path"][0] ?? 0,
            },
        };
    }
    return { valid: true };
};

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\n]{8,}$/;