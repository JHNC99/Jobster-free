import { useState } from "react";

const useAuth = (initialState) => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setValues({ ...values, [name]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(values)
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
        toggleMember
    }
}
export default useAuth;