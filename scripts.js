window.addEventListener("load", (event) => {
	var menuBar = document.getElementsByClassName("menu-bar");
	// for mobile menu 
	var menuHamburger = document.getElementsByClassName("menu-bar-hamburger");
	menuHamburger[0].onclick  = function(){
		menuHamburger[0].classList.toggle("menu-opened");
		menuBar[0].classList.toggle("menu-opened");
	};
		
	// for mobile menu closing while click on menu link
	var menuLink = document.getElementsByClassName("menu-area-link");
	menuLinkLength = menuLink.length;

	for (let step = 0; step < menuLinkLength; step++) {
		menuLink[step].onclick  = function(){
			menuHamburger[0].classList.toggle("menu-opened");
			menuBar[0].classList.toggle("menu-opened");
		};
	}

	// Top button

	let toTopButton = document.getElementById("top-button");

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			toTopButton.style.display = "block";
		} else {
			toTopButton.style.display = "none";
		}
	}

	toTopButton.onclick = function(){
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	// SALES CARDS. 
	// Get every card on page 
	var salesCards = document.getElementsByClassName("sales-card");
	salesCardsLength = salesCards.length;

	// on click - add to cookies
	for (let step = 0; step < salesCardsLength; step++) {
		salesCards[step].onclick  = function(element){
			
			console.log(salesCards[step].id);

			let myCookies = document.cookie;
			console.log(myCookies);

			if (myCookies.includes(salesCards[step].id)) {
				console.log("already in cookies...");
			} else {
				document.cookie = document.cookie + salesCards[step].id + ",";
				console.log("cookies added. " + document.cookie);
				// page reload
				location.reload();
			}
		};
	}

	// CART
	// create item in cart

	const cartId = document.getElementById("moving-cart");

	let myCookies = document.cookie;
	let myCookiesArray = myCookies.split(",");
	console.log(myCookiesArray);

	myCookiesArray.forEach((element) => {
		if (element.includes("sales-card")) {
			const para = document.createElement("p");
			const node = document.createTextNode("Product " + element + " " );
			const link = document.createElement("a");
			const removeText = document.createTextNode("Remove");
			link.setAttribute('href', '#');
			link.appendChild(removeText);
			para.appendChild(node);
			para.appendChild(link);
			para.setAttribute('id', "id-" + element);
			para.classList.add( "product" );
			cartId.appendChild(para);
		}
	});

	// PRODUCTS. 
	// Get every card on page 
	var products = document.getElementsByClassName("product");
	productsLength = products.length;

	// on click - remove from cookies
	for (let step = 0; step < productsLength; step++) {
		products[step].onclick  = function(element){
			
			console.log(products[step].id);

			let myCookies = document.cookie;
			console.log(myCookies);
			let myCookiesArray = myCookies.split(",");
			console.log(myCookiesArray);

			myCookiesArray.forEach((element, index) => {
				if (element.includes("sales-card")) {
					if (element == products[step].id.substring(3)) {
						myCookiesArray[index] = "";
						console.log("element deleted");
					}
				}
			});

			console.log(myCookiesArray);

			const result = myCookiesArray.filter(word => word.length > 0);
			// array to string
			myCookies = result.toString();
			console.log(myCookies);
			document.cookie = myCookies + ",";
			// page reload
			location.reload();
		};
	}

	

});