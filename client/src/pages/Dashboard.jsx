import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_BOOKS } from '../graphql/queries';

const Dashboard = (props) => {
  // const { data, loading, error } = useQuery(QUERY_BOOKS, {
  //   context: {
  //     headers: {
  //       'Authorization': `Bearer ${props.user.token}`
  //     },
  //   },
  //   fetchPolicy: 'no-cache'
  // });

  //redirect to login if error in a query, not defined yet
//   if (error) {
//     return <Redirect to={"/login"} />
//   }

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;