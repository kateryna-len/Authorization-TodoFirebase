import React from "react";
import BarCharts from "./BarChart";
import Todo from "./Todo";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <BarCharts />
      <Todo />
    </div>
  );
}

export default Dashboard;
