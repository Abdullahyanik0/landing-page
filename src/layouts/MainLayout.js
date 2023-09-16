import React from "react";
import Headers from "components/Headers";
import Footer from "components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <div className="flex justify-center w-full h-full bg-slate-50 dark:bg-black/50">
        <div className="h-full w-11/12 sm:w-11/12  md:w-10/12 2xl:w-9/12">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
