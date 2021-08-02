import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../reducer/store.hook';
import { GET_LOGIN, GET_VALIDATION_LOGOUT } from '../../reducer/users/user';
import { useAppDispatch } from './../../reducer/store.hook';
import { LogOutUser_Firebase } from './../../reducer/users/user';
import { toast } from 'react-toastify';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
interface HeaderTS {

}
const Header: React.FC<HeaderTS> = () => {
    const [login, setLogin] = useState(false);
    const [open, setOpen] = React.useState(false);
    const UserLogin = useAppSelector(GET_LOGIN);

    const validationLogout = useAppSelector(GET_VALIDATION_LOGOUT);
    const dispatch = useAppDispatch();
    useMemo(() => {
        if (UserLogin.idUser) {
            setLogin(false)
        } else {
            setLogin(true);
        }
    }, [UserLogin])
    const logout = () => {
        dispatch(LogOutUser_Firebase())
    }
    useEffect(() => {
        if (validationLogout === 0) {
            setOpen(false);
            toast.info("Login success")
        }
        if (validationLogout === 1) {
            setOpen(true);
        }
    }, [validationLogout])


    return (
        <>
            <Backdrop open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className="header">
                <Link to="/" className="link">Home</Link>
                {login ? <Link to="/login" className="link">Login</Link> : <Link onClick={logout} to="/logout" className="link">Logout</Link>}
            </div>
        </>
    )
}
export default Header;