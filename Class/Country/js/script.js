function handleCountry() {
    let x = document.getElementById("selectCountry").value;

    if (x === "in") {
        document.getElementById("bgColor").style.backgroundColor = "red";
        document.getElementById("msg").innerHTML = "India";
    } else if (x === "ca") {
        document.getElementById("bgColor").style.backgroundColor = "yellow";
        document.getElementById("msg").innerHTML = "Canada";
    } else if (x === "uk") {
        document.getElementById("bgColor").style.backgroundColor = "green";
        document.getElementById("msg").innerHTML = "UK";
    } else if (x === "0") {
        document.getElementById("bgColor").style.backgroundColor = "white";
        document.getElementById("msg").innerHTML = " ";
    }
}