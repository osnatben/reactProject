import axios from "axios";
import dataStore from "./DataStore.jsx";
// import { Grid } from "@mui/material";
import Grid from '../Grid.jsx'
import Admin from "../admin/Admin.jsx";
import User from "../user/User.jsx";

export async function CheckLogin(name, password) {

    try {
        // debugger
        const isValid = await axios.post("http://localhost:8787/login", {
            name,
            password
        });

        if (isValid.status === 200) { 
            const resData = isValid.data;
            console.log("resdata", resData)
            resData === 1 ? <Admin></Admin> : resData === 2 ? <User></User> : <SignUp></SignUp>

            dataStore.setIsLogin(true);
        }
    }
    catch (e) {
        if (e.response) {
            alert('user name or password not correct');
        }
        else {
            alert('server failed');
        }
    }
}
export default CheckLogin;