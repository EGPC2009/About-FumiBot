document.querySelector('.collapsible-button').addEventListener('click', function() {
	const collapsible = this.parentElement;
	collapsible.classList.toggle('active');
});