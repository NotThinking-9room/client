import { type } from 'os';
import { useState } from 'react';
import Typing from 'react-kr-typing-anim';
import { styled } from 'styled-components';

import PageContainer from '../../components/PageContainer';
import StaggerWrapper from '../../components/StaggerWrapper';
import TypingString from '../../components/TypingString';
import { path } from '../../constants/path';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import useStep from '../../hooks/useStep';
import Dots from './Dots';
import QuestionInputItem from './InputItem';
import QuestionItem from './Question';

interface ChoiceQuestionType {
  titles: string[];
  type: 'choice';
  items: {
    id: number;
    title: string;
  }[];
}

interface ShortQuestionType {
  titles: string[];
  type: 'short';
  subTitle?: string;
}

type QuestionType = ChoiceQuestionType | ShortQuestionType;

const QUESTIONS: QuestionType[] = [
  {
    titles: ['나만의 맛집 사장님은', '어떤 사람이셨으면 좋겠어?'],
    type: 'choice',
    items: [
      {
        id: 1,
        title: '인심 가득한',
      },
      {
        id: 2,
        title: '손맛이 좋은',
      },
      {
        id: 3,
        title: '따로 있어!',
      },
    ],
  },
  {
    titles: ['나만의 식탁 주인공은', '누가 되었으면 좋겠어?'],
    type: 'choice',
    items: [
      {
        id: 1,
        title: '고품질의 고기',
      },
      {
        id: 2,
        title: '다양한 채소류',
      },
      {
        id: 3,
        title: '싱싱한 수산물',
      },
      {
        id: 4,
        title: '따뜻한 공깃밥',
      },
    ],
  },
  {
    titles: ['오늘 하루는 너에게', '어떻게 기억 될 것 같아?'],
    type: 'choice',
    items: [
      {
        id: 1,
        title: '더운 하루를 식혀준 바다',
      },
      {
        id: 2,
        title: '편안한 카페와 여유 한 잔',
      },
      {
        id: 3,
        title: '제주 바람과의 드라이브',
      },
      {
        id: 4,
        title: '여기에는 없는 특별한 하루',
      },
    ],
  },

  {
    titles: ['그럼 너의 하루는 어땠어?'],
    type: 'short',
    subTitle: 'ex. 서핑, 산책, 등산, 카페에서 힐링',
  },
];

function Question() {
  const { currentStep, next } = useStep({
    initial: 1,
    max: QUESTIONS.length,
  });

  const [selects, setSelects] = useState<string[]>([]);
  console.log('selects: ', selects);

  const currentItem = QUESTIONS[currentStep - 1];

  return (
    <PageContainer>
      <Container>
        <Dots step={currentStep} len={QUESTIONS.length} />
        <QuestionItem currentItem={currentItem} setSelects={setSelects} next={next} />
      </Container>
    </PageContainer>
  );
}

export default Question;

const Container = styled.div`
  padding: 62px 36px;
`;
