import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle, user } = useFirebase();
  return (
    <div>
      <h3> Please Login</h3>
      <button onClick={signInWithGoogle}> SignIn</button>
      <form action="#">
        <input type="text" placeholder="User Name" /><br />
        <input type="password" placeholder="password" /><br />
        <button> Submit</button>
      </form>
      <h2> Name : {user.displayName} </h2>
      <h3> email : {user.email} </h3>
      <img src={user.photoURL} alt="pic" />
      
    </div>
  );
};

export default Login;
