class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }
  constructor() {
    super();
    let img = document.createElement("img");
    img.src = "./R-C.jpeg";
    img.style = "width: 160px;height: 160px;";

    var name = document.createElement("p");
    name.classList.add("name");
    name.innerText = "花花";
    name.style = "font-size: 30px";

    var email = document.createElement("p");
    email.classList.add("email");
    email.id = "email";
    email.innerText = "huahua@gmail.com";

    var container = document.createElement("div");
    // container.classList.add('container')
    container.append(name, email);

    // this.append(container, img);

    //创建shadow
    var shadow = this.attachShadow({ mode: "open" });
    // var wrapper = document.createElement("span");
    // wrapper.innerText = "shadow";
    // shadow.appendChild(wrapper);
    shadow.appendChild(container);
    shadow.appendChild(img);

    //单独处理样式,太笨重
    // const sheet = new CSSStyleSheet();
    // sheet.replaceSync(".name { color: red; border: 2px dotted black;}");
    // shadow.adoptedStyleSheets = [sheet];
  }
  connectedCallback(e) {
    console.log("connectedCallback:", e);
  }
  disconnectedCallback() {
    console.log("connectedCallback:", e);
  }
  adoptedCallback() {
    console.log("adoptedCallback:", e);
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log("attributeChangedCallback");
    this.render();
  }
  render() {
    console.log(this.getAttribute("name"));
  }
}

window.customElements.define("user-card", UserCard);

function update() {
  mt = document.querySelector("user-card");
  mt.setAttribute("name", "dddd");

  let shadow = mt.shadowRoot;
  console.log("元素shadow root:", shadow);
}
