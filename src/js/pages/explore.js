import { updatePageTitle } from "../helpers/pageTitleHelper";

const Explore = {
  async init() {
    updatePageTitle("Explore out collection | Storyy"),
      console.log(document.title);
  },
};

export default Explore;
