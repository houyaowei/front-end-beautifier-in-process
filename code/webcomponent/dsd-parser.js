function handleFocus() {
  alert("关注成功~~");
}
class MyClock extends HTMLElement {
  constructor() {
    super();
    const html = `
      <div>
        <template shadowrootmode="open">
          <link rel="stylesheet" href="./styles.css" />
          <div class='test'>全局style测试</div>
          <div>
            <input name='name' id='name'/>
            <button onclick='handleFocus()'>关注</button>
          </div>
        </template>
       </div>
    `;
    const constainer = document.createElement("div");
    // constainer.innerHTML = html; // 注意 不要使用这种，shadow root不会生效
    constainer.setHTMLUnsafe(html); // 使用这种
    this.append(constainer);
  }
}
customElements.define("my-clock", MyClock);
