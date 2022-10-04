import React, { useContext } from 'react';
import NameContext from './NameContext';
import '../styles/formStyles.css'

const Form = () => {
  const {setName} = useContext(NameContext);

  const handleInput = (e)=>{
    const { value } = e.target;
    console.log(value);
    setName(value)
  }
  return (
    <form>
      <div className='form-group'>
        <label>Your name:</label>
        <input 
        type="text"
        placeholder='Ingresa tu nombre' 
        onChange={(e)=>handleInput(e)}
        />
      </div>
    </form>
  );
}

export default Form;
