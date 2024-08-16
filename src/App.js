import React, { useState } from 'react';
import './css/App.css';
import Header from './Header';
import Article from './Article';
import Question from './Question';
import Buttons from './Button';
import PostTypeForm from './PostTypeForm';

function App() {
  // State to track the selected post type, default is 'question'
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      {/* Header displaying the title for creating a new post */}
      <Header text="New Post" />
      
      {/* Form for selecting the post type (question or article) */}
      <PostTypeForm postType={postType} onChange={setPostType} />
      
      {/* Header prompting user to ask or share */}
      <Header text="What do you want to ask or share?" />
      
      {/* Conditionally render Article or Question component based on postType */}
      {postType === 'article' ? <Article /> : <Question />}
      
      {/* Buttons component, presumably for submission or other actions */}
      <Buttons />
    </div>
  );
}

export default App;
