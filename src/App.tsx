import React from "react";
import { AppProvider } from "./contexts/AppContext";
import UploadForm from "./components/UploadForm";
import DisplayData from "./components/DisplayData";

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Passport Data Processor
          </h1>
          <UploadForm />
          <DisplayData />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
