let btn = document.getElementById("submit");
let tax = document.getElementById("tax");
let tax1 = document.getElementById("tax1");
let tax2 = document.getElementById("tax2");
let tax3 = document.getElementById("tax3");
let tax4 = document.getElementById("tax4");
let tax5 = document.getElementById("tax5");
let totalTax = document.getElementById("totalTax");

btn.addEventListener("click", () => {

	let income = parseInt(document.getElementById("income").value);
	let a, b, c, d, e, f, g;
	if ((income >= 0) && (income <= 300000)) {
		a = 0;
		b = "-";
		c = "-";
		d = "-";
		e = "-";
		f = "-";
		g = a;
	} else if ((income > 300000) && (income <= 600000)) {
		a = 0;
		b = income * 0.05;
		c = "-";
		d = "-";
		e = "-";
		f = "-";
		g = a + b;
	} else if ((income > 600000) && (income <= 900000)) {
		a = 0;
		b = 300000 * 0.05;
		c =  (income - 300000) * 0.10;
		d = "-";
		e = "-";
		f = "-";
		g = a + b + c;
	} else if ((income > 900000) && (income <= 1200000)) {
		a = 0;
		b = 300000 * 0.05;
		c = 300000 * 0.10;
		d = (income - 600000) * 0.15;
		e = "-";
		f = "-";
		g = a + b + c + d;
	} else if ((income > 1200000) && (income <= 1500000)) {
		a = 0;
		b = 300000 * 0.05;
		c = 300000 * 0.10;
		d = 300000 * 0.15;
		e = (income - 900000) * 0.20;
		f = "-";
		g = a + b + c + d + e;
	} else if (income > 1500000) {
		a = 0;
		b = 300000 * 0.05;
		c = 300000 * 0.10;
		d = 300000 * 0.15;
		e = 300000 * 0.20
		f = (income - 1200000) * 0.30;
		g = a + b + c + d + e + f;
	}

	// console.log(income);
	// console.log(tax);

	tax.innerHTML = a;
	tax1.innerHTML = b;
	tax2.innerHTML = c;
	tax3.innerHTML = d;
	tax4.innerHTML = e;
	tax5.innerHTML = f;
	totalTax.innerHTML = g;

});