import { useState } from "react";
import { uploadImage } from "../services/api";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (
    file: File
  ): Promise<{ dateOfBirth: string; expiryDate: string }> => {
    setIsLoading(true);
    setError(null);

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result?.toString().split(",")[1];
          if (!base64Image) throw new Error("Failed to process image.");
          const data = await uploadImage(base64Image);
          resolve(data.extractedData);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError(String(err));
          }
          reject(err);
        } finally {
          setIsLoading(false);
        }
      };
      reader.onerror = () => {
        setIsLoading(false);
        reject("Failed to read the file.");
      };
      reader.readAsDataURL(file);
    });
  };

  return { handleUpload, isLoading, error };
};
