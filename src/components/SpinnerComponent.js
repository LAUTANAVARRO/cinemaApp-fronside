import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SpinnerComponent  (){


return(    
<button className="btn btn-dark spinnerComponent" type="button" disabled>
  <span className="spinner-border spinner-border-sm spinnerCircle" role="status" aria-hidden="true"></span>
  Loading...
</button>
)
}




