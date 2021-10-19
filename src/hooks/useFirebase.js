import { useState, useEffect } from "react"
import {
    getAuth, signInWithPopup, GoogleAuthProvider,
    onAuthStateChanged, signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Component/Firebase/Firebase.init";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const useFirebase = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');




    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // const history = useHistory();

    // const handleGetAppointment = () => {
    //     history.push("/home");
    // }

    // Registration and Login Toggle
    const toggle = e => {
        setIsLogin(e.target.checked);
        console.log(e.target.checked);
    }

    // Name field
    const handleNameChange = e => {
        setName(e.target.value);
    }

    // Email field
    const handleEmailInput = e => {
        setEmail(e.target.value);
    }

    // Password field
    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }

    // Form Submit
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

    // User Create
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                emailVerification();
                setUserName();
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            });
    }

    // Email Verification
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(user => {
                console.log(user);
                setError('');
            }).catch((error) => {
                setError(error.message);
            });
    }
    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch((error) => {

            });
    }

    // Email and password sign in
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


    // Google Sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // LogOut
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
        handleNameChange,
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