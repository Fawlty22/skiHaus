import React, { useEffect, useState } from 'react';
import { UserSearchForm } from '../components/index.js';
import { Card } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../graphql/queries';
// import { UPDATE_USERS } from '../utils/actions'
// import { CreateContractStoreProvider, useCreateContractContext } from '../utils/CreateContractContext';

const CreateContract = () => {
    const [userSearchShow, setUserSearchShow] = React.useState(false);
    const [contractData, setContractData] = React.useState({
        step: 1,
        user: {},
        checkOutDate: '',
        checkInDate: '',
        equipment: {},
    })

    const nextStep = () => {
        setContractData({
            ...contractData,
            step: contractData.step++
        })
        console.log(contractData)
    }

    const { data } = useQuery(QUERY_USERS)
    return (
        <div>
            <Card id="userSearch" className="text-center">
                <Card.Body className="d-flex justify-content-between flex-column gap-3">
                    {!contractData.user.username ? (
                        <UserSearchForm 
                        show={userSearchShow}
                        // updateContractData = {updateContractData}
                        onHide={() => setUserSearchShow(false)}
                        userData={data}
                        contractData={contractData}
                        setContractData={setContractData}
                        />
                    ) : ''}
                </Card.Body>
            </Card>
             

        </div>
    )
}

export default CreateContract