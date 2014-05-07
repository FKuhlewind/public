Polymer('jquery-element', {
  ready: function() {

  	var elem = document.getElementById('elem');
		
	elem.addEventListener('click', doSomething, false);

	function doSomething() {

		elem.parentNode.replaceChild(document.createTextNode("You Clicked Me!!!"), elem);

		};

  }
});





