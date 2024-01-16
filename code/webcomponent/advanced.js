let buttons = document.querySelector('share-buttons')

console.log(buttons)

//所有没有定义的 social-button
let undefinedButtons = buttons.querySelectorAll(':not(:defined)');

let promises = [...undefinedButtons].map(socialButton => {
  console.log(socialButton.localName)
  return customElements.whenDefined(socialButton.localName);
});

// 等所有social-buttons更新
Promise.all(promises).then(() => {
  console.log("所有btn都已经可用")
});