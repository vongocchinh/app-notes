import { UserLoginTS } from "../reducer/users/user";
import firebase from './../config/firebase';


export const LoginFirebaseASYNC = (user: UserLoginTS): Promise<UserLoginTS> => new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(user.name, user.pass).then(res => {
        // console.log(res.user?.uid);
        var uid: any = res.user?.uid;
        resolve(uid);
        // return ;
    })
        .catch(er => {
            console.log(er);
        })
})

export const LogoutFirebaseASYNC = () => new Promise((resolve, reject) => {
    firebase.auth().signOut().then((res) => {
        var uid: string = "";
        resolve(uid);
    }).catch(re => {

    });


}).catch(er => {
    console.log(er);

})