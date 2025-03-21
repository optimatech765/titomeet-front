/* eslint-disable @typescript-eslint/no-explicit-any */
export const cleanResponse = (response: any): any => {
    if (typeof response === 'string') {
        // On enlève %22, les guillemets " et les antislash \ 
        return response.split('%22').join('').split('"').join('').split('\\').join('');
    }
    if (Array.isArray(response)) {
        return response.map(cleanResponse);
    }
    if (typeof response === 'object' && response !== null) {
        const cleaned: Record<string, any> = {};
        for (const key in response) {
            if (Object.prototype.hasOwnProperty.call(response, key)) {
                cleaned[key] = cleanResponse(response[key]);
            }
        }
        return cleaned;
    }

    console.log(response);
    return response;
}
