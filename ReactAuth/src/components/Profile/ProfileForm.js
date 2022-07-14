import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../store/auth-context';
const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const submitHanlder = event =>{
    event.preventDefault();
    
    const enteredNewPassword = newPasswordInputRef.current.value;
    let url;

    url='https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDTaOVNUIUrtiU0ZCV4cj9ujipRxzclZq0'
    fetch(url,{
      method:'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {

    })
    .catch()
  }
  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
