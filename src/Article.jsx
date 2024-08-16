import React from 'react';
import TitleBox from './TitleBox';
import { TextArea, Form } from 'semantic-ui-react';
import Tags from './Tags';
import './css/Article.css';

const Article = () => {
  return (
    <div className='ArticleSection'>
      {/* TitleBox component for entering a descriptive title */}
      <TitleBox text="Enter a descriptive title" />
      
      {/* Form for entering article details */}
      <Form>
        {/* Form field for abstract */}
        <Form.Field>
          <label>Abstract</label>
          <TextArea 
            placeholder="Enter a 1 paragraph abstract" 
            style={{ minHeight: 50, width: '100%' }} 
          />
        </Form.Field>

        {/* Form field for the full article text */}
        <Form.Field>
          <label>Article Text</label>
          <TextArea 
            placeholder="Enter the full article text" 
            style={{ minHeight: 400, width: '100%' }} 
          />
        </Form.Field>
      </Form>
      
      {/* Tags component for article tags */}
      <Tags text="article" />
    </div>
  );
};

export default Article;
