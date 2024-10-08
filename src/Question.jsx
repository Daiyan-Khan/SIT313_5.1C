// Article.jsx
import React from 'react';
import TitleBox from './TitleBox';
import {TextArea } from 'semantic-ui-react'
import Tags from './Tags';
import './css/Question.css'

const Question =() =>{
  return (
    <div className='QuestionSection'>
    <TitleBox text = "Start your question with how, why, what, etc." />
    <p>Describe your problem</p>
    <TextArea placeholder="Enter a 1 paragraph abstract" style={{height:500, width:700}}/>
    <Tags text="question"/>
    </div>
  );
};

export default Question;
