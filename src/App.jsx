import { useState } from 'react';
import MainHeader from './components/MainHeader';
import Posts from './components/Posts';

export default function App() {
  const [isVisible, setVisibility] = useState(false);

  function showModalHandler() {
    setVisibility(true);
  }
  function hideModalHandler() {
    setVisibility(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}></MainHeader>
      <main>
        <Posts
          isVisible={isVisible}
          visibilityHandler={hideModalHandler}
        ></Posts>
      </main>
    </>
  );
}
