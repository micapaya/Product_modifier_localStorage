const handleUpdatePrice = () => {
    const updatedData = jsonData.map((item) => {
        if (item.title === productName) {
            // Création de l'objet représentant les données mises à jour
            const updatedItem = {
                ...item,
                price: updatedPrice,
            };

            // Envoi de la requête PATCH pour mettre à jour le prix du produit
            fetch(`https://fakestoreapi.com/products/${item.id}`, {
                method: "PATCH",
                body: JSON.stringify(updatedItem),
            })
                .then(res => res.json())
                .then(updatedProduct => {
                    // Mise à jour des données locales avec le produit mis à jour
                    const updatedData = jsonData.map((item) => {
                        if (item.id === updatedProduct.id) {
                            return updatedProduct;
                        }
                        return item;
                    });
                    updateJsonData(updatedData);
                })
                .catch(error => {
                    console.error("Erreur lors de la mise à jour du prix :", error);
                });
        }
        return item;
    });
    updateJsonData(updatedData);
};
