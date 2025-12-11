/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ButtonHTMLAttributes } from 'react'


interface ButtonProps {
    label: string,
    type: string,
    name: string,
    severity: string, outlined: boolean
}

const Button = ({ label, type, name, severity, outlined }: any): ButtonHTMLAttributes<any> => {
   const solid = severity === "primary" ? "btn btn-primary " : severity === "primary" ? "btn btn-secondary" : "btn";
   const outline = severity === "primary" ? "btn btn-primary outlined " : severity === "primary" ? "btn btn-secondary outlined" : "btn outlined";

    return (
        <button type={type} name={name}
            className={!outlined ? solid : outline} >
            {label}
        </button>
    )
}

export default Button