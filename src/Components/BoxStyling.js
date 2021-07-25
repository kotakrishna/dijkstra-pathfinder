import styled from "styled-components";

export const BoxContainer = styled.p`

    width: 25px;
  height: 25px;
  outline: 1px solid rgb(11, 29, 43);
  display: inline-block;
  margin: 5px;
  border-radius: 50%;
  &:hover{
    background-color: rgb(11, 29, 43);
  }
  background-color: ${(prop)=>prop.isStart? "red" :prop.isEnd? "green":prop.isWall? "black": "white"};
`