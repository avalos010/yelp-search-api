import React from 'react';

let SearchForm = (props) => (
    <form onSubmit={e => props.search(e)}>
  <div className="form-row">
    <div className="col-lg-5 col-sm-12 col-xl-5">
      <input type="text" className=" mt-2 form-control" placeholder="Search For.."/>
    </div>
    <div className="col-lg-5 col-sm-12 col-xl-5" >
      <input type="text" className= " mt-2 form-control" placeholder="Location"/>
    </div>
    <div className="col-lg-2 col-xl-2 text-center">
      <input type="submit" className=" w-75 btn btn-primary mt-2" value="Search"/>
    </div>
  </div>
</form>
);

export default SearchForm;