import { useState, useCallback } from "react";
import { addToast } from "@heroui/react";

type ApiRequest<T> = () => Promise<T>;

export function useApiToast<T>() {
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (request: ApiRequest<T>) => {
    setLoading(true);
    
    // Affiche un toast au début de la requête
    addToast({
      title: "Chargement...",
      description: "La requête est en cours",
    });

    try {
      const response = await request();
      
      // Succès : afficher un toast de succès
      addToast({
        title: "Succès ✅",
        description: "Données chargées avec succès !",
      });

      return response;
    } catch (error) {
      
      // Erreur : afficher un toast d'erreur
      addToast({
        title: "Erreur ❌",
        description: "Une erreur s'est produite.",
      });

      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  return { execute, loading };
}
