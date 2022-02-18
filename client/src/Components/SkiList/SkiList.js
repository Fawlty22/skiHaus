import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const SkiList = ({ equipmentData }) => {
    const [formState, setFormState] = useState({ type: '', brand: '', model: '', _id: ''})
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const selectedEquipment = formState
    }

    return (
        <Card>
            skis for rent
            {equipmentData.skis.map((ski) => (
                <button key="{ski._id}">brand: {ski.brand} model: {ski.model}</button>
            ))}
        </Card>
    )
}

export default SkiList