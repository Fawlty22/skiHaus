import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

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
            <Row className="dashboard-row">
                <Col className="dashboard-col">
                    <Card bg="dark" style={{ width: "18rem" }}>
                        <label className="contract-navigation-button" htmlFor="checkOutDate">Check Out Date:</label>
                        <input 
                            type="date" 
                            id="checkOutDate" 
                            name="checkOutDate"
                            onChange={handleDateChange}
                        ></input>
                    </Card>
                </Col >
                <Col className="dashboard-col">
                    <Card bg="dark" style={{ width: "18rem" }}>
                            <label className="contract-navigation-button" htmlFor="checkInDate">Check In Date:</label>
                            <input 
                                type="date" 
                                id="checkInDate" 
                                name="checkInDate"
                                onChange={handleDateChange}
                            ></input>
                    </Card>
                </Col>
            </Row>
            <button className="contract-navigation-button" onClick={handleNextPage}>Submit Dates</button>
        </div>
    )
}

export default ContractDateSelection