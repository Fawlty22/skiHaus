import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USER } from '../../graphql/queries';
import { Alert } from 'react-bootstrap'

const UserSearchForm = ({ contractData, userData, setContractData }) => {
    const [formState, setFormState] = useState({ email: '' });
    const[getUser, { data, error }] = useLazyQuery(QUERY_USER);
    const[show, setShow] = useState(true)

    useEffect(() => {
        if (data) {
            setContractData({
                ...contractData,
                user: data.users[0]
            })
        }
    }, [data])

    const handleUserSearch = (event) => {
        event.preventDefault();
        getUser({ variables: { 'email': formState.email }})
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
        <div>
            <h2>Search For Customer to Begin Contract</h2>
            <form onSubmit={handleUserSearch}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Search by email:</label>
                    <input
                        placeholder="example@example.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Search for User</button>
                </div>
            </form>
            {error &&
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    <span>User Not Found. Please try again</span>
                </Alert>
            }
        </div>
    )
}

export default UserSearchForm