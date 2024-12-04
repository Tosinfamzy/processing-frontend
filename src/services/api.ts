import axios from "axios";

const API_BASE_URL = "http://localhost:3000/dev";

export const uploadImage = async (
  base64Image: string
): Promise<{ extractedData: { dateOfBirth: string; expiryDate: string } }> => {
  const response = await axios.post(`${API_BASE_URL}/upload`, {
    image: base64Image,
  });
  return response.data;
};
