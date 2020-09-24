var xmlhttp = new XMLHttpRequest();
var url = "../data/bookings.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = "AD"
        myFunction(myArr);
    } else (
        document.getElementById("demo").innerHTML = "LORT"
    )
}

xmlhttp.open('GET', url, true); 
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++)  {
        out += '<p href="' + arr[i].navn + '">' + arr[i].bil + '</p>'         
    }
    document.getElementById("demo").innerHTML = out;
}