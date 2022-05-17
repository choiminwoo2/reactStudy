import {useState} from 'react'

const useInput2 = (validateValue) =>{
    const [enteredValue , setEnteredValue ] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValild = validateValue(enteredValue);
    const hasError = !valueIsValild && isTouched;

    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value)
    }
    const valueBlurHandler = () =>{
        setIsTouched(true);
    }
    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }
    return{
        value : enteredValue,
        isValid : valueIsValild,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}
export default useInput2;