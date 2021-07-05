import styled, { css } from "styled-components";

// styled components Imports
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";

// styled components
const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;
// rendered by > App > > Modal
const StyledWrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || " 0"};
  margin: ${(props) => props.margin || "0"};
`;

// rendered by > Modal > Input
const StyledP = styled.p`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  text-align: ${(props) => props.textAlign};
`;
// rendered by > Modal
const Header = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background-color: ${(props) => props.backgroundColor || "grey"};
  width: ${(props) => props.width || "100%"};
  height: 2rem;
  border-radius: 0.5rem 0.5rem 0 0;
  border: ${(props) => props.border};
  min-width: 275px;
`;

function Modal({
  onClickClose,
  onClickSubmit,
  username,
  onChangeUserName,
  password,
  onChangePassword
}) {
  return (
    <StyledWrapper isFlex flexDirection="column" alignItems="center">
      <Header isFlex alignItems="center" backgroundColor="#8f44fd" width="80%">
        <StyledP padding=".5rem" color="papayawhip">
          Modal
        </StyledP>
      </Header>
      <Card
        isFlex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="0"
        margin="0"
        borderRadius="0 0 .75rem .75rem"
        background="linear-gradient(to right, #b266ff, #d763cd)"
        width="80%"
      >
        {/* Input props: onChange function, type, placeholder, value, color, width, background */}
        <Input
          onChange={onChangeUserName}
          value={username}
          placeholder="Username"
        />

        <Input
          onChange={onChangePassword}
          value={password}
          type="password"
          placeholder="Password"
        />

        <StyledWrapper isFlex justifyContent="center">
          <Button onClick={onClickSubmit} primary color="#8f44fd">
            Submit
          </Button>
          <Button onClick={onClickClose} color="#8f44fd">
            Cancel
          </Button>
        </StyledWrapper>
      </Card>
    </StyledWrapper>
  );
}

export default Modal;
