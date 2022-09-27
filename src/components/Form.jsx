import React, {useState, useEffect} from 'react';
var Form = function() {
  const [state, setState] = useState({
    'firstName': '',
    'lastName': '',
    'email': '',
    'testWord': '',
  })

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }



  return(
    <form>
      <label for="firstName"> EnterFirstName:</label>
      <input type="text" id="firstName" name="firstName" placeHolder="Mike" onChange={handleChange} required></input>
      <br/>
      <label for="lastName"> Enter lastName:</label>
      <input type="text" id="lastName" name="lastName" placeHolder="Tyson" onChange={handleChange} required></input>
      <br/>
      <label for="email"> Enter email:</label>
      <input type="email" id="email" name="email" placeHolder="email" onChange={handleChange} required></input>
      <br/>
      <label for="testWord"> Enter a Random Word:</label>
      <input type="text" id="testWord" name="testWord" placeHolder="Random Word" onChange={handleChange}required></input>
    </form>
  );
}



export default Form