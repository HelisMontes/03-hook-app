import React, { useState } from 'react';
import { MultiplesCustomHook } from '../03-examples/MultiplesCustomHook';

import '../02-useEffect/counter.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultiplesCustomHook /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
