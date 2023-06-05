import React, { useEffect, useState } from 'react';
import { DataProvider } from './components/services/CONTEXT_USER';
import LAYOUT_APP from './layouts/LAYOUT_APP';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setJsonData(data);

      localStorage.setItem('productsDataStorage', JSON.stringify(data));
    } catch (error) {
      console.log('Erreur lors de la récupération des données de l\'API', error);
    }
  };

  return (
    <DataProvider>
      {/* <TABLE jsonData={jsonData} /> */}
      <LAYOUT_APP/>
    </DataProvider>
  );
};

export default App;
