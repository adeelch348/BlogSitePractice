import { withRouter } from "react-router-dom";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <h1>Welcome to Dashboard</h1>
    </>
  );
};

export default withRouter(Dashboard);
