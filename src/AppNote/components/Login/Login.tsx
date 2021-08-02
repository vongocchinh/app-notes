
import React, { useEffect, useState } from 'react'
import Register from './Register'
import { useAppDispatch, useAppSelector } from './../../reducer/store.hook';
import { GET_LOGIN, LoginUser_Firebase } from './../../reducer/users/user';
import { useHistory } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

interface LoginTS {

}
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
const Login: React.FC<LoginTS> = () => {
    
    const classes = useStyles();
    const dispatch = useAppDispatch();
    const userLogin = useAppSelector(GET_LOGIN);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const [inputUser, setInput] = useState({
        name: '',
        pass: ''
    })
    const onchange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setInput((pre) => {
        (pre as any)[name] = value;

        let user = { ...pre };
        return user;
    })
    useEffect(() => {
        if (userLogin.validationLogin === 0) {
            setOpen(false);
            history.push('/');
        }
        if(userLogin.validationLogin===1){
            setOpen(true);
        }

    }, [userLogin, history])
    useEffect(()=>{
        if(userLogin.idUser){
            history.push('/');
        }
    },[userLogin,history])

    
    const onsubmit = (e: any) => {
        e.preventDefault();
        var user: UserLoginTS = {
            name: inputUser.name,
            pass: inputUser.pass
        }


        dispatch(LoginUser_Firebase(user));
        e.target.reset();
    }

    return (
        <>
            <Backdrop open={open} className={classes.backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
                <div className="login">
                    <div className="form-login">
                        <h2>Login</h2>
                        <form onSubmit={onsubmit}>
                            <input name="name" type="text" onChange={onchange} />
                            <input name="pass" type="text" onChange={onchange} />
                            <input type="submit" value="Login" />
                        </form>
                    </div>

                    <Register />
                </div>
        </>
    )
}

export default Login;
