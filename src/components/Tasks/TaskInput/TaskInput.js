import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";
// import styled from "styled-components";


// const FormControl = styled.div`
  
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     ${'' /* border: 1px solid #ccc; */}
//     border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
//     background: ${(props) => (props.invalid ? 'rgb(183, 107, 107)' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #c8e1e4;
//     border-color: #00358b;
//   }

//   ${'' /* &.invalid input {
//     border-color: red;
//     background-color: rgb(183, 107, 107);
//   } */}

//   ${'' /* &.invalid label {
//     color: red;
//   } */}

// `

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isInputValid && 'invalid'}> */}
      {/* <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler}/>
      </FormControl> */}
      <div className={`${styles['form-control']} ${!isInputValid && styles.invalid}`}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler}/>
      </div>
      <Button type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
