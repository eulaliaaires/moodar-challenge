import { MdSearch } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 14px;
  padding: 8px;
  border-radius: 22px;
  border: 2px solid #dedede;
  outline: none;
  position: absolute;
  margin: 0 25px;
  right: 85px;
  font-family: "Raleway", sans-serif;
`;
export const Input = styled.input`
  border: none;
  webkit-apperance: none;
  width: 90%;
  outline: none;
`;
export const SearchIcon = styled(MdSearch).attrs({
  color: "#DEDEDE",
  size: "1.3rem",
})``;
