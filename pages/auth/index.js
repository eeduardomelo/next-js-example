import React from 'react'
import Link from 'next/link'
import User from '../../components/User'

const authIndexPage = (props)=>(
    <div>
        <h1> Auth Index Page ({props.appName})</h1>
        <User name="Eduardo" age="27" />        
    </div>
)

authIndexPage.getInitialProps = context =>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({ appName: "Super App (Auth)"})
        }, 1000)
    });
    return promise;
}

export default authIndexPage;