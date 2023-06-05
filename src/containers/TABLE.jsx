// Ce composant affiche les données issues du Json qui a été stocké dans le localStorage, il permet d'appeler 
// lors d'un clic sur une ligne du tableau le composant ProductDetails qui pourra être mis à jour 
// et renvoyer la donnée vers la table.

// This component displays the data retrieved from the JSON stored in the localStorage. It allows calling 
// the ProductDetails component when a row in the table is clicked, which can be updated 
// and send the data back to the table.

import React, { useState, useEffect, useRef } from 'react';
import { useDataContext } from '../components/services/CONTEXT_USER';
import PRODUCT_DETAILS from './PRODUCT_DETAILS';
import TABLE_PRODUCT_NAME from '../components/TABLE_PRODUCT_NAME';
import TABLE_PRODUCT_PRICE from '../components/TABLE_PRODUCT_PRICE';
import TABLE_PRODUCT_VAT_PRICE from '../components/TABLE_PRODUCT_VAT_PRICE';
import CAT_SELECT from '../components/CAT_SELECT';
import CAT_FLAGS from '../components/CAT_FLAGS';
import CAT_SELECT_OPTION from '../components/CAT_SELECT_OPTION';
import { CSSTransition } from 'react-transition-group';
import './table-transition.css'; // Importer le fichier CSS de transition
import H1_TITLE from '../components/H1_TITLE';

const TABLE = () => {
    const { jsonData } = useDataContext();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showProductDetails, setShowProductDetails] = useState(false); // Nouvel état pour contrôler l'affichage
    const transitionRef = useRef(null); // Référence pour le composant Transition

    useEffect(() => {
        // Vérifiez si le produit sélectionné est toujours présent dans les nouvelles données
        if (selectedProduct && jsonData) {
            const updatedSelectedProduct = jsonData.find((item) => item.title === selectedProduct.title);
            setSelectedProduct(updatedSelectedProduct || null);
        }
    }, [jsonData]);

    const handleRowClick = (product) => {
        setSelectedProduct(product);
        setShowProductDetails(true); // Affiche le composant PRODUCT_DETAILS
    };

    const handleBackToTable = () => {
        setShowProductDetails(false); // Affiche le composant TABLE
    };

    const filterDataByCategory = () => {
        if (selectedCategory === '' || selectedCategory === 'category') {
            return jsonData || [];
        } else {
            return (jsonData || []).filter((item) => item.category === selectedCategory);
        }
    };

    const uniqueCategories = ['category', ...new Set(jsonData?.map((item) => item.category))];

    const options = uniqueCategories.map((category) => (
        <CAT_SELECT_OPTION key={category} value={category} catProduct={category} />
    ));

    return (
        <section className='right-content'>
            
            <CSSTransition
                in={!showProductDetails}
                classNames="table-transition"
                timeout={300}
                unmountOnExit
                nodeRef={transitionRef} // Utiliser la référence pour le composant Transition
            >
                <React.Fragment>
                <div className="containerOfTitle">
                    <H1_TITLE theTitle="Products management" />
                </div>
                {/* Appliquer la transition à TABLE */}
                <div className="container_table" ref={transitionRef}> {/* Ajouter la référence */}
                    <table>
                        <thead>
                            <tr>
                                <th className="thead_items">Product Name</th>
                                <th className="thead_items">
                                    <CAT_SELECT content={options} setSelectedCategory={setSelectedCategory} />
                                </th>
                                <th className="thead_items">Price</th>
                                    <th className="thead_items">Price <span>(including VAT)</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterDataByCategory().map((item) => (
                                <tr
                                    key={item.id}
                                    onClick={() => handleRowClick(item)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            handleRowClick(item);
                                        }
                                    }}
                                    tabIndex={0}
                                >
                                    <TABLE_PRODUCT_NAME  nameProduct={item.title} />
                                    <td>
                                        <CAT_FLAGS catProducts={item.category} />
                                    </td>
                                    <TABLE_PRODUCT_PRICE priceProduct={item.price} />
                                    <TABLE_PRODUCT_VAT_PRICE price={item.price} taxRateInPercent={20} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </React.Fragment>
            </CSSTransition>
            <CSSTransition
                in={showProductDetails}
                classNames="table-transition"
                timeout={300}
                unmountOnExit
                nodeRef={transitionRef} // Utiliser la référence pour le composant Transition
            >
                {/* Appliquer la transition à PRODUCT_DETAILS */}
                <div ref={transitionRef}> {/* Ajouter la référence */}
                    <PRODUCT_DETAILS
                        productName={selectedProduct?.title}
                        description={selectedProduct?.description}
                        price={selectedProduct?.price}
                        taxRate={20}
                        productImage={selectedProduct?.image}
                        category={selectedProduct?.category}
                        onBackToTable={handleBackToTable} // Passer la fonction de retour à PRODUCT_DETAILS
                    />
                </div>
            </CSSTransition>
        </section>
    );
};

export default TABLE;

