import { motion } from 'framer-motion';
import styled from 'styled-components';

import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import PageContainer from '../../components/PageContainer';
import { defaultFadeInVariants } from '../../constants/motions';

function RecommendPage() {
  return (
    <PageContainer>
      <Container>
        <HeadingContainer>착한 귤 이야기</HeadingContainer>

        <BottomLeftArrowButton>계속</BottomLeftArrowButton>
      </Container>
    </PageContainer>
  );
}

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

const ImgWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25) inset;

  > img {
    width: 163.958px;
    height: 154.797px;
  }
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
  margin-top: 58px;
`;

const SkipButton = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 8px 16px;
  margin-right: 17px;

  > p {
    color: #656565;
    text-decoration: underline;
    text-underline-position: under;
  }
`;

const SkipContainer = styled.div`
  top: 62px;
  right: 8px;
  position: absolute;
  width: fit-content;
  height: fit-content;
`;

export default RecommendPage;
