import React from 'react';
import { Link } from '@reach/router';

const Number = props => {
    const parsed = parseInt(props.item);
    if(isNaN(parsed)) {
        return <h1>The word is: {props.item}</h1>
    }
    return <div>
        <h1>The number is: {props.item}</h1>
    </div>
}

export default Number;