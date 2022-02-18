import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const ContractDateSelection = ({ contractData, setContractData, setContractStep, contractStep }) => {

    const handleDateChange = (event) => {
        event.preventDefault();
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

    const handleNextPage = (event) => {
        event.preventDefault();
        setContractStep({
            ...contractStep,
            step: '3'
        })

    }

    return (
        <div>
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
            <button onClick={handleNextPage}>Submit Dates</button>
        </div>
    )
}

export default ContractDateSelection