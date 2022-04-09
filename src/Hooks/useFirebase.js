import { useEffect, useState } from "react"
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const useFirebase = () =>{
    const [user, setUser] = useState({});
    useEffect( () =>{

    } , []);

    const signInWithGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then( result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => {
            console.error(error);
        })
        console.log('signin in soon');
    }

    // return [user, setUser];
    return {
        user, 
        signInWithGoogle,
        user 
        }
}

export default useFirebase;