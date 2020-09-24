

function select(sel) {
    var xmlhttp, myObj, x, txt = "";
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        txt += "<table border=1>"
        if (sel === "users") {
            txt += "<tr><th>Navn</th><th>Email</th></tr>"
        } else if (sel === "cars") {
            txt +="<tr><th>Mærke</th><th>Pris</th></tr>"
        } else if (sel === "bookings") {
            txt +="<tr><th>Navn</th><th>Bil</th></tr>"

        }
        
        for (x in myObj) {
            if (sel === "users") {
                txt += "<tr><td>" + myObj[x].navn + "</td>";
                txt += "<td>" + myObj[x].email + "</td></tr>";
            } else if (sel === "cars"){
                txt += "<tr><td>" + myObj[x].mærke + "</td>";
                txt += "<td>" + myObj[x].pris + "</td></tr>";
            } else if (sel === "bookings") {
                txt += "<tr><td>" + myObj[x].navn + "</td>";
                txt += "<td>" + myObj[x].bil + "</td></tr>";
            } 
            
        }
    
        txt += "</table>"    
        document.getElementById("table").innerHTML = txt;
      }
    };
    xmlhttp.open("GET", "../data/"+ sel + ".json" , true);
    xmlhttp.send();
}
