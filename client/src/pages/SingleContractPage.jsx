import React from "react";
import { Redirect } from "react-router-dom";
import SingleContractComponent from "../components/SingleContractComponent";
import Auth from '../utils/auth'

const SingleContractPage = () => {
    let employee = Auth.getProfile();

    if (!employee) {
        return <Redirect to={"/login"} />
    } else {
        return (
            <div className="d-flex justify-content-center p-3">
                <SingleContractComponent />
            </div>
        )
    }
}

export default SingleContractPage;