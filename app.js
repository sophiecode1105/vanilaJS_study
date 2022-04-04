window.onload = async () => {
  let root = document.getElementById("root");
  root.appendChild(document.createElement("nav-bar"));
  root.appendChild(document.createElement("search-bar"));
  let coursesList = document.getElementById("courses-list");

  const fetchData = async () => {
    let courses = await fetch("http://localhost:3000/api/courses");
    courses = await courses.json();
    return courses.data;
  };

  let { courses } = await fetchData();
  console.log(courses);
  for (let i = 0; i < courses.length; i++) {
    try {
      let title = document.createElement("h1");
      title.textContent = courses[i].title;

      let name = document.createElement("h2");
      name.textContent = courses[i].instructorName;

      let price = document.createElement("h3");
      price.textContent = courses[i].price;

      let img = document.createElement("img");
      img.setAttribute("src", courses[i].coverImageUrl);
      img.classList.add("course-image");

      let container = document.createElement("div");
      container.append(title, name, price, img);

      coursesList.appendChild(container);
    } catch (e) {
      console.log(e);
    }
  }
};
