let btn = document.querySelector("#submit");

btn.addEventListener("click", () => {
    let availableMilk = parseInt(document.querySelector("#available_milk").value);
    let butterMilk = parseInt(document.querySelector("#butter_milk").value);
    let curd = parseInt(document.querySelector("#curd").value);
    let paneer = parseInt(document.querySelector("#paneer").value);
    let cheese = parseInt(document.querySelector("#cheese").value);


    // if ((availableMilk !== " ") && (butterMilk!== " ") && (curd!== " ") && (paneer!== " ") && (cheese!== " ")) {

    //     btn.style.pointerEvents = "auto";

        let butterMilkLr = butterMilk * 2;
        let curdLr = curd * 3;
        let paneerLr = paneer * 6;
        let cheeseLr = cheese * 10;

        document.querySelector(".butter_milk_lr").innerHTML = butterMilkLr;
        document.querySelector(".curd_lr").innerHTML = curdLr;
        document.querySelector(".paneer_lr").innerHTML = paneerLr;
        document.querySelector(".cheese_lr").innerHTML = cheeseLr;
        let ans1 = document.querySelector(".ans1");
        let ans2 = document.querySelector(".ans2");
        let ans3 = document.querySelector(".ans3");
        let ans4 = document.querySelector(".ans4 ");
        let totalAvailableMilk = document.querySelector(".total_available_milk ");


        let TotalMilk = availableMilk;

        if (TotalMilk > butterMilkLr) {
            TotalMilk -= butterMilkLr;
            ans1.innerHTML = 'Ready';
        } else {
            ans1.innerHTML = 'Not Ready';
        }

        if (TotalMilk > curdLr) {
            TotalMilk -= curdLr;
            ans2.innerHTML = 'Ready';
        } else {
            ans2.innerHTML = 'Not Ready';
        }

        if (TotalMilk > paneerLr) {
            TotalMilk -= paneerLr;
            ans3.innerHTML = 'Ready';
        } else {
            ans3.innerHTML = 'Not Ready';
        }

        if (TotalMilk > cheeseLr) {
            TotalMilk -= cheeseLr;
            ans4.innerHTML = 'Ready';
        } else {
            ans4.innerHTML = 'Not Ready';
        }

        totalAvailableMilk.innerHTML = "Available Milk Is = " + TotalMilk;

        document.querySelector(".answer_box").style.display = "block";

    // }

});