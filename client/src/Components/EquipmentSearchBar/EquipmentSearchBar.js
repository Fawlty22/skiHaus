import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EquipmentSearchBar = ({ categoryState, setCategoryState }) => {
    const handleCategory = (event) => {
        const dropDownIndex = event.target.options.selectedIndex
        const category = event.target.options[dropDownIndex].innerText;
        console.log(event, category)
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
            <label htmlFor="equipmentCategory">Select What Type of Equipment to Add</label>
            <select onChange={handleCategory} name="equipmentCategory" id="equipmentCategory">
                <option value=""></option>
                <option value="Skis">Skis</option>
                <option value="Snowboards">Snowboards</option>
                <option value="Boots">Boots</option>
            </select>
            {/* <button onClick={handleCategory}>Skis</button>
            <button onClick={handleCategory}>Snowboards</button>
            <button onClick={handleCategory}>Boots</button> */}
        </Card>
    )
}

export default EquipmentSearchBar