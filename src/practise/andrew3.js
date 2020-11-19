import React from "react";
import "./andrewcss.css"
function Rishi(props) {
  return (
    <div>
      <div className="container">
        <div style={{width:"100px"}}>
          <p>name:{props.item.name}</p>
          <p>class:{props.item.class}</p>
          <p>department:{props.item.dep}</p>
        </div>
      </div>
    </div>
  );
}
export default Rishi;
