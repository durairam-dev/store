import { useState } from "react";
import Sidebar from "../components/dashboard/SidebarComponent";
import Header from "../components/dashboard/HeaderComponent";
import Content from "../components/dashboard/ContentComponent";

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1 w-full">
        <Header toggleSidebar={toggleSidebar} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default DashboardLayout;
