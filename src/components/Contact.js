import React from "react"
export default function Contact(){
    return (

        <h1>Contact Us</h1>
    )
}


1
2
3
4
5
6
7
8
9
10
11
12
13
14//deciding how to create the form
15
class Form extends React.Component {
	render() {
  	return (
    	<form>
      <span className="formtext">&#x3C;Form /&#x3E;</span>
    	  <input 
          type="text" 
          placeholder="Enter Company Name" 
          required 
        />
        <button>Go!</button>
    	</form>
    );
  }