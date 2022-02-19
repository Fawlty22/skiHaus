import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../graphql/queries";
import { Container } from "react-bootstrap";
import SingleUser from "../Components/SingleUser";

const UserSearch = () => {
  // const { data, loading, error } = useQuery(QUERY_USERS)

  // if (loading) return "Loading";
  // if (error) return "error";

  return (
    <Container>
      <SingleUser />
    </Container>
    // <>
    //   <ul>
    //     {data.users.map((user) => (
    //       <li key={user.username} id={user.id}>
    //         {user.username}
    //       </li>
    //     ))}
    //   </ul>
    // </>
  );
};
export default UserSearch;
