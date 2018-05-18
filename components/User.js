import React from 'react'

const User = (props) =>(
    <div>
        <h1> {props.name} </h1>
        <p> Age: {props.age} </p>        
        <style jsx>{`
            boder:1px solid black;
            box-shadow: 0 2p 3px;
            padding: 20px;
            text-align: center;
        `}
        </style>
    </div>
)

export default User;