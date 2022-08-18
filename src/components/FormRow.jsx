import React from 'react'

const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name}>
                {labelText || name}
            </label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                className="form-input"
                autoComplete='on'
            />
        </div>
    )
}

export default FormRow