// Import any necessary dependencies
import { updatePageTitle } from "../helpers/pageTitleHelper";

const Welcome = {
  async init() {
    updatePageTitle("Welcome to Story App");
    console.log(document.title);
    await this.initData();
  },

  async initData() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      this.renderData(data.listStory);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  renderData(data) {
    const storiesWrapper = document.querySelector(".stories-wrapper");
    if (!storiesWrapper) {
      console.error("Stories wrapper not found");
      return;
    }

    const limitPopulateData = data.slice(0, 4);

    limitPopulateData.forEach((item) => {
      const storyElement = document.createElement("div");
      storyElement.classList.add("story-item", "rounded-4");

      const getExcerpt = (description, maxLength) =>
        description.split(/[.!?]/)[0].trim().slice(0, maxLength) + "...";

      const excerptDescription = getExcerpt(item.description, 50);

      storyElement.innerHTML = `
      <div class="story-bg shadow-sm d-block mx-auto mb-4 h-100 d-flex flex-column justify-content-end" style="background-image: url(${item.photoUrl}); background-size: cover;">
      <div class= "story-content">
        <h3 class="h3 fw-bold">${item.name}</h3>
        <p class="lead fs-6">${excerptDescription}</p>
      </div>
      </div>
      `;
      storiesWrapper.appendChild(storyElement);
    });
  },
};

export default Welcome;
