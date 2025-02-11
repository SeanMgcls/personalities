import { useState } from 'react';
import { sculptureList } from './data.tsx';
import "./style.css";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleBackClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <><div className='container-button'>
      <button onClick={handleBackClick}>
          Back
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
      </div>
      <h2>
        {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <div className='container'>
        <img 
          src={sculpture.url} 
          alt={sculpture.alt}
        />
      </div>
    </>
  );
}
