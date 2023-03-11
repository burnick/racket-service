import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UicomponentsProps {}

const StyledUicomponents = styled.div`
  color: pink;
`;

export function Uicomponents(props: UicomponentsProps) {
  return (
    <StyledUicomponents>
      <h1>Welcome to Uicomponents!</h1>
    </StyledUicomponents>
  );
}

export default Uicomponents;
