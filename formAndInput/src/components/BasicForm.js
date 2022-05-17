import useInput2 from '../hooks/useReducer-input';

const isNotEmpty = (value) => value.trim() !== '';
const isEmailValid = value => value.includes('@');


const BasicForm = () => {
  const {
    value : firstNameValue,
    isValid : firstNameValid,
    hasError : firstNameErr,
    valueBlurHandler : firstNameBlurHandler,
    valueChangeHandler : firstNameChangeHandler,
    reset : resetFirstName
  } = useInput2(isNotEmpty); 
  const {
    value : lastNameValue,
    isValid : lastNameValid,
    hasError : lastNameErr,
    valueBlurHandler : lastNameBlurHandler,
    valueChangeHandler : lastNameChangeHandler,
    reset : resetLastName
  } = useInput2(isNotEmpty); 
  const {
    value : emailValue,
    isValid : emailValid,
    hasError : emailErr,
    valueBlurHandler : emailBlurHandler,
    valueChangeHandler : emailChangeHandler,
    reset : resetEmail
  } = useInput2(isEmailValid); 
let formIsValid = false;

if(firstNameValid && lastNameValid && emailValid){
  console.log(emailValid);
  formIsValid =true;
}

const FirstNameClasses = firstNameErr ?
  'form-control invalid'
  : 'form-control';

  const LastNameClasses = lastNameErr ?
  'form-control invalid'
  : 'form-control';

  const EmailClasses = emailErr ?
  'form-control invalid'
  : 'form-control';
  const sendingFormHandler = event => {
    event.preventDefault();

    if(formIsValid ===false){
      return;
    }
  console.log("send Submit")
  console.log(`${firstNameValue}, ${lastNameValue}, ${emailValue}`)

    resetFirstName();
    resetLastName();
    resetEmail();
    
  }
  return (
    <form onSubmit={sendingFormHandler}>
      <div className='control-group'>
        <div className={FirstNameClasses}>
          <label htmlFor='Firstname'>First Name</label>
          <input type='text' id='Firstname' value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
          {firstNameErr && <p className='error-text'>FirstName is empty.</p>}
        </div>
        <div className={LastNameClasses}>
          <label htmlFor='Lastname'>Last Name</label>
          <input type='text' id='Lastname' value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
          {lastNameErr && <p className='error-text'>LastName is empty.</p>}
        </div>
      </div>
      <div className={EmailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
        {emailErr && <p className='error-text'>Email not Validate.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
