import React from 'react';

let SearchForm = (props) => (
    <form onSubmit={e => props.search(e)}>

      <input type="text" placeholder="Search For.."/>
    <input type="text"  placeholder="Location"/>
      <input type="submit" value="Search"/>
  
</form>
);

export default SearchForm;