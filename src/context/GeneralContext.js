import React, { useState, useContext } from 'react';

export const GeneralContext = React.createContext("");

export const useGeneralContext = () => useContext(GeneralContext);


export function LoaderProvider({children, initial}) {
    const [isLoading, setLoading] = useState(initial);
    return (
        <GeneralContext.Provider
            value={{
                isLoading, 
                setLoading
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
}