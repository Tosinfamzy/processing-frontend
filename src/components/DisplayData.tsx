import React from "react";
import { useAppContext } from "../contexts/AppContext";

const DisplayData: React.FC = () => {
  const { extractedData } = useAppContext();

  if (!extractedData) {
    return (
      <p className="text-gray-500 mt-4">
        No data available. Upload an image to see results.
      </p>
    );
  }

  return (
    <div className="mt-6 p-6 bg-gray-50 shadow-md rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700">Extracted Data</h2>
      <p className="mt-2 text-gray-600">
        <strong className="font-medium text-gray-700">Date of Birth:</strong>{" "}
        {extractedData.dateOfBirth}
      </p>
      <p className="mt-2 text-gray-600">
        <strong className="font-medium text-gray-700">Expiry Date:</strong>{" "}
        {extractedData.expiryDate}
      </p>
    </div>
  );
};

export default DisplayData;
