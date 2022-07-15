import React, { useState } from 'react';
import DisplayData from '../DisplayData';
import Form from "./Form";

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsletter] = useState(false)


    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }

    function handleNewsletterChange(event) {
        setNewsletter(event.target.checked)
    }
    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                handleFirstNameChange={handleFirstNameChange}
                handleLastNameChange={handleLastNameChange}
            />
            <DisplayData firstName={firstName} lastName={lastName} />
        </div>


    )
}

export default ParentComponent;