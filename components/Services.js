import React from "react";

function Services(props) {
  return (
    <>
      <div className='border-2 p-3 bg-white'>
        <div className='flex justify-center items-center'>{props.children}</div>
        <h2 className='flex justify-center items-center'>{props.title}</h2>
      </div>
    </>
  );
}

export default Services