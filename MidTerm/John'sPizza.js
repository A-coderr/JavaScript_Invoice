function generate()
	{

		let pizza = document.getElementById('pizza').value;
		let topping = document.getElementById('topping').value;
		let side = document.getElementById('side').value;		
		let serviceCharge = 0;
		let pizzaTotal;
		let toppingTotal;
		let sideTotal;
		let orderAmount;
		let errors = "";
		document.getElementById('invoice').innerHTML = "Invoice - John's Pizza" + "<br>";
		
		if(pizza != 0 )
		{
			let s = "";
			if(pizza > 1)
			{
				s = "(s)"
			}
			pizzaTotal = pizza * 10.00;
			document.getElementById('invoice').innerHTML += pizza + " Pizza" + s + " @ $10.00" + " =" + " $" + pizzaTotal + "<br>";
		}
		
		if(topping != 0)
		{
			let s = "";
			if(topping > 1)
			{
				s = "(s)"
			}
			toppingTotal = topping * 4.00;
			document.getElementById('invoice').innerHTML += topping + " Topping" + s + " =" + " $" + toppingTotal + "<br>";
		}
		
		if(side != 0)
		{
			let s = "";
			if(side > 1)
			{
				s = "(s)"
			}
			sideTotal = side * 5.00;
			document.getElementById('invoice').innerHTML += side + " Side" + s + " =" + " $" + sideTotal + "<br>";
		}
		
		if(document.getElementById('delivery').checked)
		{
			orderAmount = pizzaTotal + toppingTotal + sideTotal;
			if(orderAmount > 100)
			{
				serviceCharge = 0;
			}
			else{
				serviceCharge = orderAmount * 0.1; 				
			}						
		}
		
		let subTotal = orderAmount + serviceCharge;
		let tax = subTotal * 0.13;
		let total = subTotal + tax;
		serviceCharge = serviceCharge.toFixed(2);
		tax = tax.toFixed(2);
		total = total.toFixed(2);
		
		document.getElementById('invoice').innerHTML += "Service Charge " + "=" + " $" + serviceCharge + "<br>";
		document.getElementById('invoice').innerHTML += "Sub Total " + "=" + " $" + subTotal + "<br>";
		document.getElementById('invoice').innerHTML += "Tax @ 13% " + "=" + " $" + tax + "<br>";
		document.getElementById('invoice').innerHTML += "Total " + "=" + " $" + total;
		
			
	}