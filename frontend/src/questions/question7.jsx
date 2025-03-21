import React, { useState } from 'react';
const Form = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            setError('Email is required');
        }else if (!reg.test(email)) {
            setError('Invalid email format. Email should contains @ and a domain');
        }else {
            setError('');
            console.log('Form submitted:', email);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};
export default Form;
