import React from 'react';

export const Input = ({ typeInput }) => {
    return (
        <div>
            <label htmlFor={`${typeInput}-input`}>
                {typeInput.charAt(0).toUpperCase()}
            </label>
            <input
                css={{ marginLeft: 10, fontSize: 20 }}
                id={`${typeInput}-input`}
                name={typeInput}
                type={typeInput === 'password' ? 'password' : 'text'}
            />
        </div>
    );
};
