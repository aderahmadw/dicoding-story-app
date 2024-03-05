// Import any necessary dependencies
import { updatePageTitle } from "../helpers/pageTitleHelper";

const Welcome = {
  async init() {
    updatePageTitle("Welcome to Story App"), console.log(document.title);
  },
};

export default Welcome;
