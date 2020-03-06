import React, { useState } from 'react';
export const HowToContext = React.createContext([]);
export const DescriptionContext = React.createContext([]);
const Store = ({ children }) => {
    const [howToList, setHowToList] = useState([]);
    
    return (
        <HowToContext.Provider value={[howToList, setHowToList]}>     
                {children}
        </HowToContext.Provider>
    );
};
export default Store;