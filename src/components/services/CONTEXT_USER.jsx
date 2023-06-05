import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [jsonData, setJsonData] = useState(JSON.parse(localStorage.getItem('productsDataStorage')));

    const updateJsonData = (newData) => {
        setJsonData(newData);
        localStorage.setItem('productsDataStorage', JSON.stringify(newData));
    };
    console.log(children)

    return (
        <DataContext.Provider value={{ jsonData, updateJsonData }}>
            {children}
        </DataContext.Provider>
    );
};

const useDataContext = () => useContext(DataContext);


export { DataProvider, useDataContext };