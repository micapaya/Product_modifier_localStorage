import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import H1_TITLE from '../components/H1_TITLE';
import PRODUCT_DESCRIPTION from '../components/PRODUCT_DESCRIPTION';
import PRODUCT_PRICE from '../components/PRODUCT_PRICE';
import PRODUCT_PRICE_VAT from '../components/PRODUCT_PRICE_VAT';
import PRODUCT_IMAGE from '../components/PRODUCT_IMAGE';
import BTN_UPDATE_PRICE from '../components/BTN_UPDATE_PRICE';
import BTN_BACKTO from '../components/BTN_BACKTO';

import { useDataContext } from '../components/services/CONTEXT_USER';
import CAT_FLAGS from '../components/CAT_FLAGS';
import PRODUCT_SUBTITLE from '../components/PRODUCT_SUBTITLE';

const PRODUCT_DETAILS = ({ productName, description, price, taxRate, productImage, onBackToTable, category }) => {
    const { jsonData, updateJsonData } = useDataContext();
    const [activateBTNForChange, setActivateBTNForChange] = useState('inactiveBTN');
    const [updatedPrice, setUpdatedPrice] = useState(price);
    const [isTransitionIn, setIsTransitionIn] = useState(true); // Nouvel état pour contrôler la transition

    const activateBtn = (event) => {
        const inputPrice = event.target.value;
        setActivateBTNForChange(inputPrice !== price ? 'activeBTN' : 'inactiveBTN');
        setUpdatedPrice(inputPrice);
    };

    const handleUpdatePrice = () => {
        const updatedData = jsonData.map((item) => {
            if (item.title === productName) {
                return {
                    ...item,
                    price: updatedPrice,
                };
            }
            return item;
        });
        updateJsonData(updatedData);
        // Pour retrouver la fontion qui permet de mettre à jour le JSON a été déplacée et n'est pas appelée dans le programme elle a été testée et fonctionne => ../components/services/PATCH_API_FAKE.jsx
    };

    const handleReturnBtn = () => {
        setIsTransitionIn(false); // Activer la transition de sortie
        setTimeout(onBackToTable, 300); // Appeler la fonction onBackToTable après la durée de la transition
    };

    const handleReturnBtnKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleReturnBtn();
        }
    };

    return (
        <CSSTransition in={isTransitionIn} classNames="product-details" timeout={300} unmountOnExit>
            <React.Fragment>
                <section className='section_product_page'>
                    <BTN_BACKTO
                        src=".\img\Back_button.svg"
                        alt="flèche de retour au tableau produit"
                        onClickHandle={handleReturnBtn}
                        onKeyDownHandle={handleReturnBtnKeyDown}
                        tabIndex={0}
                    />
                    <div className="containerOfTitle">
                        <H1_TITLE theTitle={productName} />
                    </div>
                        
                    <div className="zoomProduct">
                        <div className="containerOfImg">
                            <PRODUCT_IMAGE src={productImage} alt={productName} classes="product_image"/>
                        </div>
                        <div className="containerDesc">
                            <div className="containerDetails">
                                <PRODUCT_SUBTITLE text="Description"/>
                                <PRODUCT_DESCRIPTION contentOfDesc={description} />
                            </div>
                            <div className="containerCat">
                                <PRODUCT_SUBTITLE text="Category" />

                                <CAT_FLAGS catProducts={category} />
                            </div>
                            <div className="containerPrices">
                                <PRODUCT_SUBTITLE text="Price" />

                                <div className="priceUpdateComponent">
                                    <PRODUCT_PRICE price={price} handleActiveBtn={activateBtn} monetaryUnitSymbol="€" />
                                    <PRODUCT_PRICE_VAT htPrice={price} taxRateInPercent={taxRate} className="TTC_price"/>
                                    {activateBTNForChange === 'activeBTN' ? (
                                        <BTN_UPDATE_PRICE oneClass="activeBTN" textContent="Update Price" onClickHandle={handleUpdatePrice} />
                                    ) : (
                                        <BTN_UPDATE_PRICE
                                            oneClass="inactiveBTN"
                                            className="upButton"
                                            textContent="Update Price"
                                            onClickHandle={handleUpdatePrice}
                                        />
                                    )}
                                </div>
                            </div>
                            
                            

                            
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </CSSTransition>
    );
};

export default PRODUCT_DETAILS;
