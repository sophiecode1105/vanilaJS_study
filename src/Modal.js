import RegisterCourse from "./modal/registerCourse.js";

export default class Modal extends HTMLElement {
  constructor(parent, store) {
    super();
    this.parent = parent;
    this.parent.appendChild(this);
    this.store = store;
    this.attachShadow({ mode: "open" });
    this.render();

    this.store.subscribeTo("modal", this);
  }

  template() {
    return `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <style>
            .modal_container {
                display: none;
                width: 100%;
                height: 100%;
            }
            .show_modal {
                display: block;
                opacity: 100%;
              }
            .modal_backdrop {
                position: fixed;
                z-index: 999;
                display: flex;
                justify-content: center;
                align-items: center;
                left: 0;
                top: 0;
                background: rgba(0, 0, 0, 0.5);
                width: 100%;
                height: 100%;
                margin: 0 auto;
                backdrop-filter: blur(4px);

            }
            .modal_view {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
                width: 360px;
                height: 432px;
                border-radius: 10px;
            }

            .close_button {
                font-size: 15px;
                display: flex;
                justify-content: flex-end;
                width: 100%;
            
            }
            .icon {
                margin: 10px;
                padding: 10px;
                cursor: pointer;
            }

            @media screen and (max-width: 560px) {
              
              }   
            </style>
            <div id="modal" class="modal_container ${this.store.getState("modal").open ? "show_modal" : ""}">
              <div class="modal_backdrop">
                <div id="modal-view" class="modal_view">
                  <div class="close_button">
                    <span id="close" class="icon">
                      <i class="fas fa-times"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
        `;
  }

  render() {
    this.store.getState("modal");
    this.shadowRoot.innerHTML = this.template();
    this.modalView = this.shadowRoot.getElementById("modal-view");

    // store 업데이트시 하위 컴퍼넌트 다시 추가
    new RegisterCourse(this.modalView, this.store);
    this.addEvents();
  }

  addEvents() {
    const close = this.shadowRoot.getElementById("close");
    close.addEventListener("click", () => {
      this.store.updateState("modal", { open: false });
    });
  }
}

customElements.define("register-modal", Modal);
