const ContentComponent = ({ children }) => {
  return (
    <div className="bg-gray-300 h-full p-2 overflow-y-auto">
      {children}
    </div>
  );
};

export default ContentComponent;
