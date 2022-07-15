import React from "react";

function Form(props) {
  return (
    <form>
      <input type="text" value={props.firstName} onChange={props.handleFirstNameChange}/>
      <input type="text" value={props.lastName} onChange={props.handleLastNameChange}/>
      {/* <label htmlFor="newsletter">Subscribe to our Newsletter?</label> */}
      {/* <input type="checkbox" is="newsletter" onChange={handleNewsletterChange} checked={newsletter} /> */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;