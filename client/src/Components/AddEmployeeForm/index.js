import React from 'react';
import "./style.css";

const addEmployeeForm = () => {

    
    return (
        <div className="container my-1">
      
    
      <h1>Add New Employee</h1>
          <form>
            <div className="flex-row space-between my-2">
              <label htmlFor="userName">User Name:</label>
              <input
                placeholder="User Name"
                name="username"
                type="username"
                id="username"
                defaultValue=""
                
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="password">Password:</label>
              <input
                placeholder="password"
                name="password"
                type="password"
                id="password"
                defaultValue=""
           
              />
            </div>
    
    
            <div className="flex-row flex-end">
              <button type="submit">Add New Employee</button>
            </div>
          </form>
        </div>
      );

}
export default addEmployeeForm;
