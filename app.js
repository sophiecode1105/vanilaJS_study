import NavBar from "../src/Navbar.js";
class App extends HTML() {
  constructor() {
    this.root = documnet.getElementbyId("root");

    new NavBar(this.root);
  }
}

new App();
