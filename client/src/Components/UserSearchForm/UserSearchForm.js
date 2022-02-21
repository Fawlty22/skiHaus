import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USER } from '../../graphql/queries';
import { Alert, Container, Row, Col, Card } from 'react-bootstrap'

const UserSearchForm = ({ contractData, setContractData, contractStep, setContractStep }) => {
    const [formState, setFormState] = useState({ email: '' });
    const [getUser, { loading, error, data }] = useLazyQuery(QUERY_USER);
    const [show, setShow] = useState(true)
    useEffect(() => {
        if (data) {
            if (data.user) {
                setContractData({
                    ...contractData,
                    user: data.user
                })
                setContractStep({
                    ...contractStep,
                    step: '2'
                })
            }
        }
    }, [data])

    const handleUserSearch = async (event) => {
        event.preventDefault();
        await getUser({
            variables: { email: formState.email }
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    // return has a conditionally rendered alert but the query doesn't seem to 
    //respond with error if the user is not found. 
    return (
        <Container fluid>
            <Row className="dashboard-row">
                <Col lg={8} className="dashboard-col">
                    <Card bg="dark" style={{ width: "39rem" }}>
                        <Card.Body className="text-center">
                            <Card.Title style={{ color: "violet" }}>
                                <h2>Search For Customer to Begin Contract</h2>
                            </Card.Title>
                            <form onSubmit={handleUserSearch}>
                                <Card.Title style={{ color: "violet" }}>
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        placeholder="example@example.com"
                                        name="email"
                                        type="email"
                                        id="email"
                                        onChange={handleChange}
                                    />
                                </Card.Title>
                                <div>
                                    <button className="contract-navigation-button" type="submit">Search for User</button>
                                </div>
                            </form>
                            {data ?
                                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                                    <span>User Not Found. Please try again</span>
                                </Alert>
                                : ''
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserSearchForm