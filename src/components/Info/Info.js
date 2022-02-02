const Info = ({ callStatus }) => {
  return <span className={`message ${callStatus}`}>Calling...</span>;
};
export default Info;
