import React from 'react';

export const Button = ({ nameButton }) => {
    return (
        <button
            type="submit"
            css={{
                fontSize: 18,
                alignSelf: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.15)',
                padding: 8,
                borderRadius: 2,
                ':focus': {
                    backgroundColor: 'rgba(0,0,0,0.3)'
                }
            }}
        >
            {nameButton}
        </button>
    );
};
