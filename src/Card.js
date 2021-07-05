import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "start"};
  justify-content: ${(props) => props.justifyContent || "start"};
`;
// StyledCard rendered by > App > Modal
const StyledCard = styled.div`
  ${(props) => props.isFlex && flexStyles};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.minHeight || "400px"};
  border-radius: ${(props) => props.borderRadius};
  min-width: 275px;
`;

function Card({
  children,
  isFlex,
  flexDirection,
  alignItems,
  justifyContent,
  margin = "0 0 1rem",
  padding = "1rem",
  background = "#100F10",
  border,
  width,
  borderRadius
}) {
  return (
    <StyledCard
      isFlex={isFlex}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      background={background}
      border={border}
      width={width}
      borderRadius={borderRadius}
    >
      {children}
    </StyledCard>
  );
}

export default Card;
