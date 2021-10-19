import { useState, useEffect } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged, signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import initializeAuthentication from "../Component/Firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);



    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const toggle = e => {
        setIsLogin(e.target.checked);
        console.log(e.target.checked);
    }


    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 chracters..')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password should be contain 2 upper case.')
            return;
        }

        isLogin ? processLogin(email, password) : createUser(email, password);
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                emailVerification();
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            });
    }


    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(user => {
                console.log(user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            });
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    }



    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch(error => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailInput,
        handlePasswordInput,
        error,
        createUser,
        toggle,
        isLogin
    }

}

export default useFirebase;