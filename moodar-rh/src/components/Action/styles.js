import { MdAccessTime, MdDelete, MdPersonOutline } from "react-icons/md";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 8px 8px 15px 8px;
  border-bottom: 2px solid #dedede;
  font-family: "Raleway", sans-serif;
`;
export const Description = styled.p`
  font-size: 0.95rem;
  color: #000000;
  width: 55%;
  text-align: left;
  margin: 0;
`;
export const Title = styled.h1`
  font-size: 1.4rem;
  color: #6c15ce;
`;
export const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
`;
export const Participants = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
`;

export const ClockIcon = styled(MdAccessTime).attrs({
  color: "#000000",
  size: "1.4rem",
})``;
export const PersonIcon = styled(MdPersonOutline).attrs({
  color: "#000000",
  size: "1.4rem",
})``;
export const DeleteIcon = styled(MdDelete).attrs({
  color: "#e64149",
  size: "1.6rem",
  cursor: "pointer",
})``;
export const Text = styled.p`
  font-size: 0.9rem;
  color: "#000000";
  margin-left: 3px;
`;
export const WrapDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 8px 0;
`;
export const Image = styled.img`
  background-position: cover;
  width: 320px;
  height: 220px;
  margin-right: 35px;
`;
export const WrapDescription = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
`;
export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
