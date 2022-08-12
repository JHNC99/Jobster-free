import React from 'react';
import { Link } from "react-router-dom"
import img from "../assets/images/not-found.svg";
import Wrapper from '../assets/wrappers/ErrorPage';
const Error = () => {
    return (
        <Wrapper>
            <div>
                <img src={img} alt="" />
                <h3>Not found</h3>
                <p>Sorry in this moment no available</p>
                <Link to="/">Back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error