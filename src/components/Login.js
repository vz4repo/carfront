import { useState } from "react";
import Button from '@mui/material/Button';
import TextField  from "@mui/material/TextField";
import  Stack   from "@mui/material/Stack";
import { SERVER_URL } from "../constants";
import Carlist from './Carlist';

function Login(){
    // for Login, required 3 things : id, pw, isauthed
    const[user, setUser] = useState({
        username:'',
        password:''
    });
    const[isAuthed, setAuth] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name]:event.target.value});
    };

    const login = () => {
        fetch(SERVER_URL + 'login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(user)
        })
        .then(response => {
            const jwtToken = response.headers.get('Authorization');
            if(jwtToken !== null){
                sessionStorage.setItem("jwt", jwtToken);
                setAuth(true);
            }
        })
        .catch(err => console.error(err));
    }

    // isAuthed:true -> Carlist | isAuthed:false -> Login
    if(isAuthed){
        return <Carlist />;
    }
    else{
        return(
            <div>
            <Stack spacing={2} alignItems='center' mt={2}>
                <TextField name="username" label="Username" onChange={handleChange}/>
                <TextField name="password" label="Password" onChange={handleChange}/>
                <Button variant="outlined" color="primary" onClick={login}>Login</Button>
            </Stack>
        </div>
    )
}
}

export default Login;