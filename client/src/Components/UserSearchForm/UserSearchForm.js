import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USER } from '../../graphql/queries';

const UserSearchForm = ({ contractData, userData, setContractData }) => {
    const [formState, setFormState] = useState({ email: '' });
    const[getUser, { data }] = useLazyQuery(QUERY_USER)
    console.log(data)


    const handleUserSearch = async (event) => {
        event.preventDefault();
        await getUser({ variables: { 'email': formState.email }})
        setContractData({
            ...contractData,
            user: data.users[0]
        })
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

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
        </div>
    )
}

export default UserSearchForm