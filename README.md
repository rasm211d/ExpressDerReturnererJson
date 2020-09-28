# Returner backend json til frontend tabel.

## Dette er min løsning


### Min html fil
Denne sker der intet spændende med, helt normal html fil der håndtere en tabel.
![alt text](https://github.com/rasm211d/ExpressDerReturnererJson/blob/master/pictures/Udklip.PNG)


### Min express server
Min express server, der tager wwwroot som statisk folder til html filer.

Den lytter på port 5000

![alt text](https://github.com/rasm211d/ExpressDerReturnererJson/blob/master/pictures/index.png)

### Mit script der skal håndtere JSON data og vise det i tabellen. 

Mit fine script der har til opgave at læse data ved brug af xmlhttprequest. 

xmlhttp.onreadystatechange lytter på når html filen ændres i select elementet.

Her aktiveres funktionen der så læser hvilket element der er valgt og returnere en masse html tekst der skal bygge tabellen udfra hvad der er valgt.


![alt text](https://github.com/rasm211d/ExpressDerReturnererJson/blob/master/pictures/tablescript.PNG)
