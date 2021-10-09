import React from 'react';
import { Link } from 'react-router-dom';
import style from './Error.module.css';

const Error = () => {
    return (
        <>
            <div className={style.errorWrapper}>
                <Link className={style.subBtn} to="/"> Go to Home</Link> 
            </div>
        </>
    )
}

export default Error;
