import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_EMPLOYEE } from '../graphql/queries';
import { StoreProvider } from '../utils/GlobalContext';

const Dashboard = () => {

  // const { data, loading, error } = useQuery(QUERY_EMPLOYEE, {
  //   context: {
  //     headers: {
  //       'Authorization': `Bearer ${props.employee.token}`
  //     },
  //   },
  //   fetchPolicy: 'no-cache'
  // });
  
  let employee = Auth.getProfile();

  // redirect to login if error in a query, not defined yet
  if (!employee) {
    return <Redirect to={"/login"} />
  }

  return (
    <div>
      {employee ?
      <div>
        Dashboard
      </div>
      :
      <span>You must log in to access the dashboard</span>
      }
    </div>
    );
  };

export default Dashboard;