import  { useState } from 'react';


export function Accordion(){
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index? null : index));
  };

  return (
    <div >
  {data.map((item, index) => (
    <AccordionItem
      key={index}
      question={item.question}
      answer={item.answer}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
    />
  ))}
</div>
  );
};

function AccordionItem ({ question, answer, isOpen, onClick }){
    return (
      <div className="wrapper">
        <button className={`${isOpen? 'active' : ''}`} onClick={onClick}>
          <p>{question}</p>
          <RiArrowDropDownLine className={`arrow ${isOpen? 'active' : ''}`} />
        </button>
        <div
          
          style={isOpen? { height: 'auto' } : { height: '0px' }}
        >
          <p >{answer}</p>
        </div>
      </div>
    );
  };



