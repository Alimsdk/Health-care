import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut , createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();
const auth=getAuth();
const googleProvider=new GoogleAuthProvider();


const useFirebase=()=>{

    const [user,setUser]=useState(null);
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    console.log(name,email,password);
   
     const signInUsingGoogle=()=>{
         signInWithPopup(auth,googleProvider)
         .then(result=>{
             console.log(result.user);
             setUser(result.user);
         }).catch(error=>{
             console.log(error.message);
         })
     }
        

  const logOut=()=>{
    signOut(auth).then(() => {
        setUser(null);
      }).catch((error) => {
        // An error happened.
      });
  }

  const createNewUser=()=>{

        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
           
            const user = result.user;
            console.log(user);
            setUser(user);

          }).catch((error) => {
          
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });

  }

const formLogIn=()=>{
   signInWithEmailAndPassword(auth, email, password)
   .then(result => {
    // Signed in 
    const user = result.user;
    console.log(user);
    setUser(user);
 
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
   
}

     useEffect(()=>{
         onAuthStateChanged(auth,user=>{
             if(user){
                 setUser(user);
             }else{
                 setUser(null);
             }
         })
     },[])

  return{
      user,signInUsingGoogle,logOut,setUser,setName,setEmail,setPassword,createNewUser,formLogIn,email,password,auth
  }
}

export default useFirebase;