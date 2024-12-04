import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { useUpload } from "../hooks/useUpload";

const UploadForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const { setExtractedData } = useAppContext();
  const { handleUpload, isLoading, error } = useUpload();

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const onSubmit = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }
    try {
      const extractedData = await handleUpload(file);
      setExtractedData(extractedData);
    } catch (uploadError) {
      console.error(uploadError);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-gray-700">
        Upload Passport Image
      </h2>
      <input
        type="file"
        accept="image/*"
        onChange={onFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className={`px-4 py-2 rounded-md text-white ${
          isLoading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isLoading ? "Uploading..." : "Upload"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default UploadForm;
