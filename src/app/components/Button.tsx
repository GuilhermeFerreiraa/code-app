import breakpoints from "@/utils/breakpoints";
import styled from "styled-components";

interface ButtonProps {
  $variant: "unstyled" | "primary" | "outline",
}

export const Button = styled.button<ButtonProps>`
  transition: all .2s ease-in;
  padding: 14px 24px;
  cursor: pointer;

  line-height: normal;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  
  border-radius: 4px;
  border: ${({ $variant }) => $variant !== "unstyled" ? "2px solid var(--color-primary)" : "none"};
  
  color: ${({ $variant }) => (
    ($variant == "outline") ? "var(--color-primary)" :
      ($variant == "primary") ? "var(--color-white)" :
        "var(--color-gray-400)"
  )};
  
  background-color: ${({ $variant }) => (
    ($variant == "outline") ? "var(--color-white)" :
      ($variant == "primary") ? "var(--color-primary)" :
        "transparent"
  )};
  
  &:hover {
    color: ${({ $variant }) => (
    ($variant == "outline") ? "var(--color-white)" :
      ($variant == "primary") &&
      "var(--color-primary)"
  )};
   
    box-shadow: ${({ $variant }) => $variant !== "unstyled" && "0px 2px 5px -3px #0000006a"};
   
    background-color: ${({ $variant }) => (
    ($variant == "outline") ? "var(--color-primary)" :
      ($variant == "primary") &&
      "var(--color-white)"
  )};
  }

  &:disabled {
    opacity: 0.6; 
    color: ${({ $variant }) => $variant !== "unstyled" ? "var(--color-white)" : "var(--color-gray-300)"};
    cursor: default;
    box-shadow: none;
    border-color: ${({ $variant }) => $variant !== "unstyled" ? "var(--color-gray-200)" : "transparent"};
    background-color: ${({ $variant }) => $variant !== "unstyled" ? 'var(--color-gray-200)' : "transparent"};
  }


  @media screen and (${breakpoints.device.xs}) and (max-width: ${breakpoints.size.sm}){
    padding: 0.8rem 1rem;
  }
  
  @media only screen and (${breakpoints.device.sm}) and (max-width: ${breakpoints.size.lg}){
    padding: 1rem 0.8rem;
  }
`;