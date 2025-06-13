/* eslint-disable @typescript-eslint/no-unused-vars */

import { assetsServices } from "@/services/assets/assets.services";

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

export const paramsToQueryString = (params: QyeryParamsDto) => {
    return Object.entries(params)
        .filter(([_, value]) => value !== undefined && value !== null) // Supprime les valeurs null/undefined
        .map(([key, value]) =>
            Array.isArray(value)
                ? value.map(v => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&')
                : `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join('&');
}


export interface QyeryParamsDto {
    page?: number;
    limit?: number;
    search?: string;
    tags?: string[];
    startDate?: string;
    endDate?: string;
    createdById?: string;
    categories?: string[];
}

export const getInitials = (firstname: string, lastname: string) => {
    if (!firstname || !lastname) return '';
    return firstname[0].toUpperCase() + lastname[0].toUpperCase();
}

export const EventDataFilter = (data: any) => {
    const { address,
        postedBy,
        id,
        postedById,
        ticketsSold,
        ticketsSoldByEventPrice,
        updatedAt,
        createdAt,
        orders,
        favorites,
        ...other
    } = data;
    return {id,other};
}

export const uploadMultipleFiles = async (files: File[]) => {
  const results = await Promise.all(
    files.map(async (file) => {
      const response = await assetsServices.getPresignUrl({
        fileName: "" + new Date().getTime() + file.name,
        fileType: file.type,
      });

      const { uploadUrl, fields, downloadUrl } = cleanResponse(response.data);

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append("file", file);

      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      // Même si le téléchargement échoue, on renvoie quand même l'objet (optionnel : à filtrer si besoin)
      return {
        url: downloadUrl,
        type: file.type.includes("image") ? "image" :file.type.includes("audio") ? "audio" : "pdf",
      };
    })
  );

  return results; // tableau de { url: string, type: string }
};
