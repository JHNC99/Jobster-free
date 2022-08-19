import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../store/slices/user";
import toast from 'react-hot-toast';
const useAuth = (initialState) => {
    const [values, setValues] = useState(initialState);

    const dispatch = useDispatch();

    const { isLoading, user } = useSelector((store) => store.user);

    const navigate =useNavigate();

    useEffect(()=>{
        if(user){
            setTimeout(() => {
                navigate('/');
            },3000);
        }
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please Fill Out All Fields!');
            return;
        }
        if (isMember) {
            dispatch(loginUser({ email: values.email, password: values.password }))
        }
        else {
            dispatch(registerUser({ name: values.name, email: values.email, password: values.password }))
        }

    }

    const toggleMember = () => {
        setValues({
            ...values, isMember: !values.isMember
        })
    }
    return {
        values,
        handleChange,
        onSubmit,
        toggleMember,
        isLoading
    }
}
export default useAuth;