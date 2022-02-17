import React from 'react';
import { Card } from 'react-bootstrap';

const EquipmentSearchBar = ({ categoryState, setCategoryState }) => {
    const handleCategory = (event) => {
        const category = event.target.innerText;
        setCategoryState({
            ...categoryState,
            category: category
        })
    }

    return (
        <Card>
            <h2>
                Select an Equipment Category
            </h2>
            <button onClick={handleCategory}>Skis</button>
            <button onClick={handleCategory}>Snowboards</button>
            <button onClick={handleCategory}>Boots</button>
        </Card>
    )
}

export default EquipmentSearchBar