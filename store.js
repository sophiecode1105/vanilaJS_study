import Store from "../store/store.js";
import NavBar from "./navbar/navbar.js";
import Search from "./search/search.js";
import CourseList from "./courseList/courseList.js";
import Modal from "./register/modal.js";
import "../css/styles.css";

class App {
  constructor() {
    this.store = new Store();
    this.root = document.getElementById("root");

    // 초기 셋업, store에 initial state 추가.
    this.store.registerSubstate("courses", {
      page: 1,
      list: [],
      loaded: false,
      fetching: false,
      locked: false,
      retries: 0,
    });

    this.store.registerSubstate("search", {
      keyword: "",
      focused: false,
      fetching: false,
    });

    this.store.registerSubstate("modal", {
      open: false,
    });

    new NavBar(this.root);
    new Search(this.root, this.store);
    new CourseList(this.root, this.store);
    new Modal(this.root, this.store);
  }
}

new App();
