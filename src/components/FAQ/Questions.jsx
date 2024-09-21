import React from 'react'
import './question.css'
import Faq from './Faq';

const Questions = () => {

  const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'How does useState work?',
      answer: 'useState is a hook that lets you add React state to functional components.',
    },
    {
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like.',
    },
    {
      question: 'How does useEffect work?',
      answer: 'useEffect is used to perform side effects on renders',
    },
    
  ];

  return (
    <div className='questionWrapper'>
      <h1>Frequently Asked Questions </h1>
       <Faq  questions={faqData} />
    </div>
  )
}

export default Questions


