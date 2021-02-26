      function initElement() 
	  {
		const boton = document.getElementById("boton");
		if (boton) {
			boton.addEventListener('click', delboton);
		}
		console.log ("init");
      };

	  function delboton () {
		const user = document.getElementById("IdUser");
		const pass = document.getElementById("IdPass");
		if (user.value != "")
			console.log (user.value)
		else
			alert("falta el user");
		if (pass.value != "")
			console.log (pass.value)
		else
			alert("falta el pass");
	  }