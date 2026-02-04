const MyButton = ({ title }) => {
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-amber-400 duration-75">
      {title}
    </button>
  );
};

export default MyButton;
