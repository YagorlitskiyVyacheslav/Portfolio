import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 30px 20px;
`;

const Body = styled.main`
  padding: 30px 20px;
`;

export const Layout: FC<{ children: ReactNode; header: ReactNode }> = ({
  children,
  header,
}) => (
  <Wrapper>
    <Header>{header}</Header>
    <Body>{children}</Body>
  </Wrapper>
);
