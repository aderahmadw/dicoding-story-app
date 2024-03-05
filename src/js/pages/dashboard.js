import { updatePageTitle } from "../helpers/pageTitleHelper";

const Dashboard = {
  async init() {
    updatePageTitle("Dashboard | Storyy"), console.log(document.title);
  },
};

export default Dashboard;
