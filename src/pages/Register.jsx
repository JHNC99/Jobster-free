import React from 'react'
import { Logo, FormRow } from '../components';
import useAuth from '../hooks/useAuth';
import Wrapper from '../assets/wrappers/RegisterPage';
const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true
}
const Register = () => {
    const { values, handleChange, onSubmit, toggleMember, isLoading } = useAuth(initialState);
    console.log(isLoading)
    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? "Login" : "Register"}</h3>
                {
                    !values.isMember &&
                    <FormRow
                        type="text"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />
                }
                <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />

                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type='submit' className='btn btn-block' disabled={isLoading}>Submit</button>
                <p>
                    {values.isMember ? "Not member yet?" : "Already a member?"}
                    <button type='button' className='member-btn' onClick={toggleMember}>
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register