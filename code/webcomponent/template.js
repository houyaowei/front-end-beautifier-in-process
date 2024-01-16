class UserCard extends HTMLElement {
	constructor() {
		super()
		var temp = document.getElementById('userCardTemplate')

		var content = temp.content.cloneNode(true);
		
		content.querySelector('.container>.name').innerText = this.getAttribute('name');
		this.appendChild(content);		
	}
}

window.customElements.define('user-card', UserCard)

