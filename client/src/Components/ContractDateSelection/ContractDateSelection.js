import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const ContractDateSelection = ({ contractData, setContractData }) => {
    
    const handleDateChange = (event) => {
        if(event.target.labels[0].innerText === 'Check In Date:') {
            setContractData({
                ...contractData,
                checkInDate: event.target.value
            })
        }
        else {
            setContractData({
                ...contractData,
                checkOutDate: event.target.value
            })
        }
    }

    return (
        <Row>
            <Col>
                <label htmlFor="checkOutDate">Check Out Date:</label>
                <input 
                    type="date" 
                    id="checkOutDate" 
                    name="checkOutDate"
                    onChange={handleDateChange}
                ></input>
            </Col>
            <Col>
                <label htmlFor="checkInDate">Check In Date:</label>
                <input 
                    type="date" 
                    id="checkInDate" 
                    name="checkInDate"
                    onChange={handleDateChange}
                ></input>
            </Col>
        </Row>
    )
}

export default ContractDateSelection