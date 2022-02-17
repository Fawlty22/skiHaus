import React, { useState } from 'react';
// import { useCreateContractContext } from '../../utils/CreateContractContext';

const UserSearchForm = ({ contractData, userData, setContractData }) => {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '' });
    // const [state, dispatch ] = useCreateContractContext();
    // const { createContractData } = state;


    const handleUserSearch = (event) => {
        event.preventDefault();
        const selectedUserData = userData.users.map((user) => {
            // if(formState.username) {
                if (user.username.toLowerCase().trim() === formState.username.toLowerCase().trim()) {
                    return user
                }
        })[0]
        setContractData({
            ...contractData,
            user: selectedUserData
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
                    <label htmlFor="username">Search by username:</label>
                    <input
                        placeholder="username"
                        name="username"
                        type="username"
                        id="username"
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