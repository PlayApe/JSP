function val() {
    var num1;
    var num2;
    var result;
    var aggregatedRes = "";
    num1 = document.getElementById("n1").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("n2").value;
    num2 = parseInt(num2);
    
    if (num1 > num2) alert("First number should be smaller than the last");
    
    for(num1; num1 <= num2; num1++) {
        if (num1 % 2 == 0) {
            result = num1 + " " + "even" + "<br>";
        }
        else result = num1+ " " + "odd" + "<br>";
        aggregatedRes = aggregatedRes + result;

    }
    document.getElementById("out").innerHTML = aggregatedRes;
}