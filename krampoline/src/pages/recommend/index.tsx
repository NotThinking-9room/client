import { motion } from 'framer-motion';
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import BottomRightArrowButton from '../../components/BottomRightArrowButton';
import PageContainer from '../../components/PageContainer';
import TypingString from '../../components/TypingString';
import { defaultFadeInVariants } from '../../constants/motions';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import useStep from '../../hooks/useStep';
import orange from './orange.svg';

interface NextStage {
  id: number;
  contents: string;
}

const NextStateContents: NextStage[] = [
  {
    id: 1,
    contents:
      "흑돼지 고기를 좋아하고, 서핑 후에 든든한 고기를 먹고 싶은 너를 위해 '오솔길' 식당을 추천해",
  },
  {
    id: 2,
    contents:
      '접근성은 물론이고, 흑돼지 고기 전문점이라 넉넉한 양의 신선한 고기를 먹을 수 있을거야',
  },
  {
    id: 3,
    contents: '추가로, 사장님이 후하게 대해주셔서 기분도 좋을거야!',
  },
];

function RecommendPage() {
  const { push } = useInnerNavigator();

  const { currentStep, next } = useStep({
    initial: 0,
    max: 2,
  });

  const onNext = () => {
    next();
  };

  // const onNextPage = () => {
  //   push('/recommend');
  // };

  return (
    <PageContainer>
      <Container>
        <ContentsContainer>
          <LeftPos className="r-24">&#34;</LeftPos>
          <TextContainer className="r-24">
            <TypingString>{NextStateContents[0].contents}</TypingString>
          </TextContainer>
          <RightPos className="r-24">
            <PageCount className="r-16">{NextStateContents[0].id}/3</PageCount>
            <p>&#34;</p>
          </RightPos>
        </ContentsContainer>
        <BottomRightArrowButton>뒤로</BottomRightArrowButton>
        <BottomLeftArrowButton>계속</BottomLeftArrowButton>
        <ImgContainer>
          <img src={orange} alt="next" />
        </ImgContainer>
      </Container>
    </PageContainer>
  );
}

const NextButton = styled.button`
  outline: none;
  position: absolute;
  bottom: 158px;
  margin: auto;
  left: 0;
  right: 0;
  width: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  /* & > article { */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* } */
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  min-height: 42px;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-direction: column;
  margin-bottom: 28px;
`;

const TextContainer = styled.div`
  margin: 30px 0;
  color: #585858;
  width: 311px;
  margin: 72px 0px;
  text-align: left;
`;

const PageCount = styled.div``;

const SkipButton = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-right: 17px;

  > p {
    color: #656565;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  top: -30px;
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;

  > img {
    width: 167px;
    height: 154.69px;
    flex-shrink: 0;
  }
`;

const LeftPos = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
`;

const RightPos = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  > p {
    margin-top: 14px;
  }
`;

export default RecommendPage;
