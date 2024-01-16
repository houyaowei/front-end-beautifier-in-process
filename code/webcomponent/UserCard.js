class UserCard extends HTMLElement{
	static get observedAttributes() { // (3)
	    return ['name'];
	 }
	constructor(){
		super();
		let img = document.createElement('img')
		img.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';

		var name = document.createElement('p');
	    name.classList.add('name');
	    name.innerText = 'hyw';
	    name.style='font-size: 20px'

	    var email = document.createElement('p');
	    email.classList.add('email');
	    email.id='email';
	    email.innerText = 'houyaowei@gmail.com';

    
		var container = document.createElement('div');
		// container.classList.add('container')
		container.append(name,email)
		
		// this.append(img, container)

		//创建shadow
		var shadow = this.attachShadow({mode: 'open'});
		var wrapper = document.createElement('span');
		wrapper.innerText = 'shadow'
		shadow.appendChild(wrapper)
		shadow.appendChild(container)
		shadow.appendChild(img)
	}
	connectedCallback(e){
		console.log('connectedCallback:',e)
	}
	
	attributeChangedCallback(attrName, oldVal, newVal){
		console.log('attributeChangedCallback')
		this.render()
	}
	render() {
     console.log(this.getAttribute('name'))
  }
}

window.customElements.define('user-card', UserCard)

function update() {
	mt = document.querySelector('user-card')
	mt.setAttribute('name','dddd')

	let shadow = mt.shadowRoot 
	console.log("元素shadow root:", shadow)
}
