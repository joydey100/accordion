import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {

  let [more, setmore] = useState(false)



  return <article className="question">
    <header>
      <h4> {title} </h4>
      <button className="btn" onClick={() => setmore(!more)}> {more ? <AiOutlineMinus /> : <AiOutlinePlus />}  </button>
    </header>
    {more && <p> {info} </p>} 
  </article>;
};

export default Question;
