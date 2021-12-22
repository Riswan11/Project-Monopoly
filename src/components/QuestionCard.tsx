import React from 'react';
//types
import { AnswerObject } from '../Pages/QuizPage'
//Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject; //undefined
    questionNum: number;
    //score: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (
    { question,
        answers,
        callback,
        userAnswer,
        questionNum,
        //score,
        totalQuestions }) => (
        <Wrapper>
            <p className="number">
                Question: {questionNum} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => (
                    <ButtonWrapper
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.correctAnswer === answer}
                    >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span className='QCardAns' dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );

export default QuestionCard;

