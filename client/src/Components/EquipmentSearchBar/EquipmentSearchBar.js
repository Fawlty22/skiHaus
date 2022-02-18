import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EquipmentSearchBar = ({ categoryState, setCategoryState }) => {
    const handleCategory = (event) => {
        const dropDownIndex = event.target.options.selectedIndex
        const category = event.target.options[dropDownIndex].innerText;
        setCategoryState({
            ...categoryState,
            category: category
        })
    }

    return (
        <Container>
            <Row>
                <Col>
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
                </Col>
            </Row>
        </Container>
    )
}

export default EquipmentSearchBar