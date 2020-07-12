import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 35px;
  padding: 8px;
  border-radius: 22px;
  background-color: ${(props) =>
    props.background ? props.background : "#309ae1"};
  background-image: ${(props) =>
    props.gradient
      ? "linear-gradient(270deg, #309ae1 0%, #9e62ff 50%, #e3414c 100%)"
      : null};
  color: #ffffff;
  -webkit-apperance: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  :active {
    box-shadow: 0 2px #cacccf;
    transform: translateY(2px);
  }
`;
