import { updatePageTitle } from "../helpers/pageTitleHelper";

const About = {
  async init() {
    updatePageTitle("About Us | Storyy"), console.log(document.title);
  },
};

export default About;
