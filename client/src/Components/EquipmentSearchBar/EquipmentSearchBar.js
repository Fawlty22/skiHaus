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
            <Row className="dashboard-row">
                <Col className="dashboard-col">
                    <Card bg="dark" style={{ width: "26rem" }}>
                        <Card.Body className="text-center">
                            <Card.Title style={{ color: "violet" }}>
                                <h2>
                                    <label htmlFor="equipmentCategory">Select What Type of Equipment to Add</label>
                                </h2>
                            </Card.Title>
                            <select onChange={handleCategory} name="equipmentCategory" id="equipmentCategory">
                                <option value=""></option>
                                <option value="Skis">Skis</option>
                                <option value="Snowboards">Snowboards</option>
                                <option value="Boots">Boots</option>
                            </select>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EquipmentSearchBar