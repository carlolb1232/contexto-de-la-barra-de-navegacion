import React, { useState } from 'react';
import NameContext from './NameContext';
import '../styles/wrapperStyles.css'

const Wrapper = (props) => {
  const [name, setName] = useState("(tu nombre aquí)");
  return (
    <NameContext.Provider className="wrapper" value={{name, setName}}>
      {props.children}
    </NameContext.Provider>
  );
}

export default Wrapper;
