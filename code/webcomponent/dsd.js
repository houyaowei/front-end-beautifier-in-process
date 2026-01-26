class MyClock extends HTMLElement {
  #internals = null; //私有方法
  constructor() {
    super();
    this.#internals = this.attachInternals();
    console.log("this.#internals:", this.#internals.shadowRoot);

    //TODO:includeShadowRoots参数貌似没生效
    console.log("Serialization:", this.getHTML({ includeShadowRoots: true }));
    const shadow = this.#internals.shadowRoot;
    //判断shadowRoot是否存储，如果存在即为声明式
    if (!shadow) {
      this.attachShadow({ mode: "open" }).innerHTML = `
        <div>
          <span id=hour></span> : <span id=min></span> : <span id=sec></span>
        </div>
        <div class="description">
          <slot></slot>
        </div>
      `;
    }
    this.hours = shadow.querySelector("#hour");
    this.minutes = shadow.querySelector("#min");
    this.seconds = shadow.querySelector("#sec");
  }

  connectedCallback() {
    console.log("connectedCallback invoke!");
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  update() {
    const pad = (v) => {
      return String(v).padStart(2, "0");
    };
    const d = new Date();
    this.hours.textContent = pad(d.getHours());
    this.minutes.textContent = pad(d.getMinutes());
    this.seconds.textContent = pad(d.getSeconds());
  }
}

customElements.define("my-clock", MyClock);
