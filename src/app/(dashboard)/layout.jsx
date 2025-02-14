import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">user nav</div>
      <div className="col-span-8">{children}</div>
    </div>
  );
};

export default DashboardLayout;
