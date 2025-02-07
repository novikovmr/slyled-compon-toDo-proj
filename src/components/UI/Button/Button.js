// import "./Button.css";
import styles from './Button.module.css';

// import styled from "styled-components";

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   color: white;
//   background: #00358b;
//   border-radius: 4px;
//   box-shadow: 0 0 4px rgba(50, 50, 50, 0.25);
//   cursor: pointer;

//   @media (min-width: 700px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #245fbd;
//     box-shadow: 0 0 8px rgba(50, 50, 50, 0.25);
//   }
// `;

export default Button;
