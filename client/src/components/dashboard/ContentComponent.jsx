const ContentComponent = ({ children }) => {
  return (
    <main className="bg-gray-300 h-full p-2 overflow-y-auto">
      {children}
    </main>
  );
};

export default ContentComponent;
