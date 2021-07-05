

import styled from "styled-components";

// rendered by > Modal > Input
const StyledP = styled.p`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  text-align: ${(props) => props.textAlign};
`;

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder || "Enter text",

  size: props.size || "",
}))`
  font-size: 0.75rem;
  padding: 0.5rem;
  margin: 0.75rem 0;
  color: ${(props) => props.color || "palevioletred"};
  background: ${(props) => props.background || "papayawhip"};
  border: none;
  border-radius: 0.25rem;
  width: ${(props) => props.width || "200px"};
  ::placeholder {
    color: ${(props) => props.color || "palevioletred"};
  }
`;

const StyledLabel = styled.label``;
function Input({
  onChange,
  type,
  placeholder,
  value,
  color,
  background,
  width,
}) {
  return (
    <StyledLabel>
      <StyledP color="#8f44fd">{placeholder}</StyledP>{" "}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        color={color}
        width={width}
        background={background}
      />
    </StyledLabel>
  );
}

export default Input;
