import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Friend house={house}></Friend>
                <Friend house={house}></Friend>
            </section>
        </div>
    );
};

export default Cousin;