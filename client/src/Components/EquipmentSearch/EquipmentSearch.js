import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import { useQuery } from '@apollo/client';
import { ALLEQUIPMENT_QUERY } from '../../graphql/queries';
import { EquipmentSearchBar, SkiList } from '../'

const EquipmentSearch = ({ contractData, setContractData, }) => {
    const { data } = useQuery(ALLEQUIPMENT_QUERY)
    const equipmentData = data;
    const [categoryState, setCategoryState] = useState({category: ''})

    switch (categoryState.category) {
        case 'Skis':
            return (
                <div>
                    <EquipmentSearchBar
                        setCategoryState={setCategoryState}
                        categoryState={categoryState}
                    />
                    <SkiList equipmentData={equipmentData}/>
                </div>
            )
            
        default:
            return(
                <EquipmentSearchBar
                    setCategoryState={setCategoryState}
                    categoryState={categoryState}
                />
            )
    }
}



export default EquipmentSearch
