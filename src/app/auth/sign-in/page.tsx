'use client'

import { signIn } from "next-auth/react"

export default function SignIn(){

    return (
        <div>
            <h1>Welcome to social media automation </h1>
            <button onClick={async ()=>await signIn('google',{
                callbackUrl:`${window.location.origin}`
            })}>sign in with Google</button>
            <br />
            <button onClick={async ()=>await signIn('facebook',{
                callbackUrl:`${window.location.origin}`
            })}>sign in with Facebook</button>
        </div>
    )

}