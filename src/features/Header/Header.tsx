import React, { FC } from "react";
import image from "@/assets/portfolio.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const Img = styled.img`
  width: 200px;
  position: absolute;
  top: -20px;
  left: 0;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  border: 2 solid ${({ theme }) => theme.palette.border};
  box-shadow: 2px 2px 2px 2px ${({ theme }) => theme.palette.highlight};
  transition: 300ms;
  :hover {
    transform: scale(105%);
  }
`;

const Content = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.foreground};
`;

const Descr = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  strong {
    color: ${({ theme }) => theme.palette.foreground};
  }
`;

export const Header: FC = () => (
  <Wrapper>
    <ImageWrapper>
      <Img src={image.src} alt="" />
    </ImageWrapper>
    <Content>
      <Title>Viacheslav Yagorlytskiy</Title>
      <Descr>
        <p>
          <strong>Preferred position:</strong> Middle/Senior React developer.
        </p>
        <p>Full-time day, partial work, project work, free-lance.</p>
        <p>
          <strong>Another position:</strong> Team Lead Front-end
        </p>
      </Descr>
    </Content>
  </Wrapper>
);
