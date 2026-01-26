class UserCard extends HTMLElement {
  constructor() {
    super();
    var temp = document.getElementById("userCardTemplate");

    var content = temp.content.cloneNode(true);

    content.querySelector(".container>.name").innerText =
      this.getAttribute("name");
    var shadow = this.attachShadow({ mode: "open" });

    let btn = content.querySelector(".focus");

    btn.addEventListener("click", () => {
      console.log("btn clicked");
    });
    shadow.appendChild(content);
  }
}
window.customElements.define("user-card", UserCard);
