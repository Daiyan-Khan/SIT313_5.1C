
import React, { useState } from 'react';
import './css/App.css';
import Header from './Header';
import Article from './Article';
import Question from './Question';
import Buttons from './Button';
import PostTypeForm from './PostTypeForm';

function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <Header text="New Post" />
      <PostTypeForm postType={postType} onChange={setPostType} />
      <Header text="What do you want to ask or share?" />
      {postType === 'article' ? <Article /> : <Question />}
      <Buttons />
    </div>
  );
}

export default App;