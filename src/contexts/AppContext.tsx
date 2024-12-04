import React, { createContext, useState, ReactNode, useContext } from "react";

interface ExtractedData {
  dateOfBirth: string;
  expiryDate: string;
}

interface AppContextType {
  extractedData: ExtractedData | null;
  setExtractedData: React.Dispatch<React.SetStateAction<ExtractedData | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(
    null
  );

  return (
    <AppContext.Provider value={{ extractedData, setExtractedData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
