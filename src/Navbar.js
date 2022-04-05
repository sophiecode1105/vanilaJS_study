class NavBar extends HTMLElement {
  constructor(parent) {
    super();
    this.parent = parent;
    this.state = {
      titleButtons: ["타이틀1", "타이틀2", "타이틀3", "타이틀4", "타이틀5"],
    };
    this.parent.appendChild(this);
    this.attachShadow({ mode: "open" });
    this.render();
  }

  template() {
    return `
        <style>
        .nav {
            position: fixed;
            top: 0;
            width: 100%;
            height: 64px;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            padding: 0px 20px;
            background-color: white;
            z-index: 999;
          }
          .nav_bar {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            height: 100%;
            width: 100%;
          }
          .nav_logo {
            width: 110px;
            height: 20px;
            margin-left: 10px;
          }
          .nav_list {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
          .nav_btn {
            margin: 0px 20px;
            color: rgba(0, 0, 0, 0.7);
          }
          .nav_title {
            min-width: 20px;
            cursor: pointer;
          }
          ul {
            list-style: none;
          }
        </style>
       <nav class="nav">
          <div class="nav_bar">
            <img class="nav_logo" src="https://w7.pngwing.com/pngs/717/116/png-transparent-coca-cola-logo-coca-cola-logo-company-business-cola-company-text-photography-thumbnail.png"/>
            <ul class="nav_list">
            ${this.state.titleButtons
              .map(
                (titleButton) =>
                  `
            <li class="nav_btn">
              <a class="nav_link">
                <span class="nav_title">${titleButton}</span>
              </a>
            </li>
                `
              )
              .join(" ")}
          </ul>
          </div>
       </nav>
        `;
  }

  render() {
    this.shadowRoot.innerHTML = this.template();
  }
}

customElements.define("nav-bar", NavBar);
