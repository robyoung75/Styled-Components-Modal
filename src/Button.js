import React from "react";
import styled, {css} from 'styled-components'

// Styled Button rendered by > App > Modal
const StyledButton = styled.button`
  background: ${(props) =>
    props.primary && props.color
      ? props.color
      : props.primary
      ? "grey"
      : "papayawhip"};
  color: ${(props) =>
    props.primary && props.color
      ? "papayawhip"
      : props.primary
      ? "papayawhip"
      : props.color
      ? props.color
      : "grey"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => (props.color ? props.color : "grey")};
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      props.primary && props.color
        ? "papayawhip"
        : props.primary
        ? "papayawhip"
        : props.color
        ? props.color
        : "grey"};
    color: ${(props) =>
      props.primary && props.color
        ? props.color
        : props.color
        ? "papayawhip"
        : props.primary
        ? "grey"
        : "papayawhip"};
  }
`;

function Button({ primary, color, children, onClick }) {
  return (
    <div>
      <StyledButton color={color} primary={primary} onClick={onClick}>
        {children}
      </StyledButton>
    </div>
  );
}

export default Button;
