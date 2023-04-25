import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 5rem;
  height: 80px;
  padding: 0 16px;
  background-color: black;
  border: solid 2px #2eff00;
  border-radius: 15px 15px 0 0;
`;

export const HeaderTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #2eff00;
  text-decoration: none;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 20rem;
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: black;

  animation: fade-in 0.2s ease-in-out forwards;
  transition: transform 0.2s ease-in-out;

  &.show {
    display: block;
    transform: translateY(0.25rem);
  }

  &:before {
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-top: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid #333;
    border-left: 0.5rem solid transparent;
  }
`;

export const DropdownItem = styled.li`
  display: block;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #2eff00;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2eff00;
    color: black;
  }
`;

export const DropdownButton = styled.button`
  position: relative;
  width: 20rem;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #2eff00;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover ${DropdownMenu} {
    display: block;
  }
`;
