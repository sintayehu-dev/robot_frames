import React from "react";


const Searchbox = ({ searchChange }) => {
  return (
    <div className="pa1">
      <input 
        className="pa3 ba b--green bg-lightest-blue searchbox"
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
       
      />
    </div>
  );
};
export default Searchbox;