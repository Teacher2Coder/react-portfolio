import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';

import { validateEmail } from '../utils/helpers'

export default function ContactPage() {
    
    const [currentPage, setCurrentPage] = useOutletContext('Contact');

    setCurrentPage('Contact');
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid')
            return
        }
        if (!name) {
            setErrorMessage('Please enter a name for the message!')
        }
        if (!message) {
            setErrorMessage('Please type a message!')
        }
    }

    return (
        <div>
            <div className="card contact-card">
                <div className="card-body">
                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={handleInputChange}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea type="text" className="form-control" name="message" value={message} onChange={handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" id="send-message">Send!</button>
                    </form>
                </div>
            </div>
            {errorMessage && (
                <div id='error-message'>
                    <p className="text-danger">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}