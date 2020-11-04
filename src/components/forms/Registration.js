import React from 'react';

const RegistrationForm = () => (
    <form method="post" action="#">
        <label>
            Name
            <input type="text" name="name" id="name" />
        </label>
        <br />
        <label>
            Email
            <input type="email" name="email" id="email" />
        </label>
        <br />
        <label>
            Subject
            <input type="text" name="subject" id="subject" />
        </label>
        <br />
        <label>
            Message
            <textarea name="message" id="message" rows="5" />
        </label>
        <br />
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
    </form>
);

export default RegistrationForm;
