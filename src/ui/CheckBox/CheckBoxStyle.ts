import styled from 'styled-components';

type PropsContainer = { top?: string };
export const ContainerInput = styled.div<PropsContainer>`
  ${({ top }) => `{
  position: absolute;
  top: ${top};
}`}
`;
