import React from 'react'

export default function NumberDisplayer(props) {
    return (
        <div>
            <p>Current Value of number: {props.number}</p>
        </div>
    )
}