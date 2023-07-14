import { useState } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


const App= ()=>{

  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const inputText = document.getElementById('textArea').value;
    setDisplayText(inputText);
  };

  return (
    <div>
      <Header title="My Simple React Assignment" />
      <Content text={displayText} onButtonClick={handleButtonClick} />
      <Footer />
    </div>
  );
};

export default App;
