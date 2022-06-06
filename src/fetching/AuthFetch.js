import { useState } from "react";

const Auth = (Email,Password) => {
    const [email, setEmail] = useState(Email);
    const [password, setPassword] = useState(Password);
    const [isPending, setIsPending] = useState(false);
    const history = useState();

    const handleAuth = (e) => {
        e.preventDefault();
        const auth = {email,password};
        setIsPending(true);
        fetch('http://localhost:8080/authenticate',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(auth)
        }).then(()=>{
            console.log("Welsome!!!!!!!!!!!")
            setIsPending(false)
        })
    }


    return ( "" );
}
 
export default Auth;