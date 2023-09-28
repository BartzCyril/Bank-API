import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userLogOut} from "../utils/slice/userSlice.ts";
import {useEffect} from "react";

export function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(userLogOut())
        navigate("/")
    }, []);

    return (<></>)
}