class UserCard extends HTMLElement {
	
	static get observedAttributes() {
    return ['name'];
  }

	constructor() {
		super()
		// console.log('constructor')
		//隔离dom结构，内部任何代码都无法影响外部
		var shadow = this.attachShadow( { mode: 'open' } );

		var temp = document.getElementById('userCardTemplate')

		var content = temp.content.cloneNode(true);
		
		content.querySelector('.container>.name').innerText = this.getAttribute('name');

		shadow.appendChild(content);		


	}
	// get attrAbled(){
	// 	console.log('atribute attrAbled:',this.getAttribute("attrAbled"))
	// }
	// set attrAbled(val) {
	// 	if (val == 'a') {
 //      this.setAttribute('attrAbled', 'b');
 //    } else {
 //      this.setAttribute('attrAbled','cc');
 //    }
	// 	console.log('atribute attrAbled:',this.getAttribute("attrAbled"))
	// }
	connectedCallback(e){
		this.setAttribute('name', 'aaa') // 应该触发attributeChangedCallback啊？？
		console.log('connectedCallback:',e)
	}
	
	attributeChangedCallback(attrName, oldVal, newVal){
		console.log('attributeChangedCallback')
		this.render()
	}

	render() {
		console.log('render function ')
	}
}

window.customElements.define('user-card', UserCard)

function update(){
	let mt = document.querySelector('user-card')
	mt.setAttribute('name','cc');
}