import React from 'react';
import CommentDetails from './components/CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div class="ui container comments">
      <CommentDetails
        author="Sam" 
        time="Today at 4pm" 
        comment="Very helpful post." 
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Rock" 
        time="Today at 5pm" 
        comment="Your posts are great." 
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Bob" 
        time="Today at 6pm" 
        comment="You just nailed it bro." 
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="King" 
        time="Today at 7pm" 
        comment="I use Linux and I know what I am doing." 
        avatar={faker.image.avatar()}
      />
      <CommentDetails
        author="Will" 
        time="Today at 8pm" 
        comment="Google 'masterclass' and go to the first result." 
        avatar={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
