
const Content = ({onButtonClick,text}) => {
 
  return (
    <div>
       <textarea id="textArea" placeholder="Enter some text..." /><br /><br />
      <button onClick={onButtonClick}>Display Text</button>
      <p>{text}</p><br /><br /><br />
    </div>
  );
};
export default Content;