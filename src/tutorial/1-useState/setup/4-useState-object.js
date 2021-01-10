import React, { useState } from 'react';

const UseStateObject = () => {
  const[person, setPerson] = useState({
    name:"peter", 
    age:24, 
    message: "random message",});

const changeMessage = () =>{
  setPerson({...person, message: "hello world"});


};
const changeName = () =>{
  setPerson({...person, name: "Dipesh Tami"});


};
const changeAge = () =>{
  setPerson({...person, age: 22});


};

return( <>
  <h3>{person.name}</h3>
  <button className="btn" onClick={changeName}>change Name</button>
  <h3>{person.age}</h3>
  <button className="btn" onClick={changeAge}>change Age</button>
  <h3>{person.message}</h3>
  <button className="btn" onClick={changeMessage}>change Message</button>
  <h3>{person.message}</h3>
  <button className="btn" onClick={changeMessage}>change Message</button>

  </>)
  ;
};
//hdfkjvndfvdf
//dfdvdfvfdvd
//dfvdfvdvdf
export default UseStateObject;
