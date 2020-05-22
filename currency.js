
function responseMethod()
{
    if (xhttp.readyState == 4)
    { //ready
        if (xhttp.status == 200)
        {  //HTTP OK
        }
    
        var response = JSON.parse(xhttp.responseText);
        
        //convert base currency from Euro to GBP, declare variables for each size
        var EURPriceA4 = (85/response.rates.GBP);
        var EURPriceA3 = (95/response.rates.GBP);
        var EURPriceA2 = (105/response.rates.GBP);
        
        //declare variable for post & packing
        var EURPost = (8.5/response.rates.GBP);
        
        // A4 prices
        var currency1 = document.getElementById("GBPpriceA4");
        currency1.innerHTML = '£ ' + (response.rates.GBP * EURPriceA4).toFixed(2);
         
        var currency2 = document.getElementById("USDpriceA4");
        currency2.innerHTML = '$ ' + (response.rates.USD * EURPriceA4).toFixed(2);
        
        var currency3 = document.getElementById("EURpriceA4");
        currency3.innerHTML = '&#8364 '+ (response.rates.EUR * EURPriceA4).toFixed(2);
        
        var currency4 = document.getElementById("JPYpriceA4");
        currency4.innerHTML = '&#165 ' + (response.rates.JPY * EURPriceA4).toFixed(2);
        
        var currency5 = document.getElementById("CADpriceA4");
        currency5.innerHTML = '$ ' + (response.rates.CAD * EURPriceA4).toFixed(2);
        
        var currency6 = document.getElementById("AUDpriceA4");
        currency6.innerHTML = '$ ' + (response.rates.AUD * EURPriceA4).toFixed(2);
        
        //A3 prices
        
        var currency7 = document.getElementById("GBPpriceA3");
        currency7.innerHTML = '£ ' + (response.rates.GBP * EURPriceA3).toFixed(2);
         
        var currency8 = document.getElementById("USDpriceA3");
        currency8.innerHTML = '$ ' + (response.rates.USD * EURPriceA3).toFixed(2);
        
        var currency9 = document.getElementById("EURpriceA3");
        currency9.innerHTML = '&#8364 ' + (response.rates.EUR * EURPriceA3).toFixed(2);
        
        var currency10 = document.getElementById("JPYpriceA3");
        currency10.innerHTML = '&#165 ' + (response.rates.JPY * EURPriceA3).toFixed(2);
        
        var currency11 = document.getElementById("CADpriceA3");
        currency11.innerHTML = '$ ' + (response.rates.CAD * EURPriceA3).toFixed(2);
        
        var currency12 = document.getElementById("AUDpriceA3");
        currency12.innerHTML = '$ ' + (response.rates.AUD * EURPriceA3).toFixed(2);
        
                
        //convert post & packing price from GBP to 5 major currencies
        
        var currency7 = document.getElementById("posttxt7");
        currency7.innerHTML = '£ ' + (response.rates.GBP * EURPost).toFixed(2);
        
        var currency8 = document.getElementById("posttxt8");        
        currency8.innerHTML = '$ ' + (response.rates.USD * EURPost).toFixed(2);
        
        var currency9 = document.getElementById("posttxt9");
        currency9.innerHTML = '&#8364 '+ (response.rates.EUR * EURPost).toFixed(2);
        
        var currency10 = document.getElementById("posttxt10");
        currency10.innerHTML = '&#165 ' + (response.rates.JPY * EURPost).toFixed(2);
        
        var currency11 = document.getElementById("posttxt11");
        currency11.innerHTML = '$ ' + (response.rates.CAD * EURPost).toFixed(2);
        
        var currency7 = document.getElementById("posttxt12");
        currency7.innerHTML = '$ ' + (response.rates.AUD * EURPost).toFixed(2);
    
        
   //     alert('adding rates');
        
  //     document.getElementById("loadtxt").innerHTML = response.rates.AUD;
        

    }
} 

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = responseMethod;
//// API can't be accessed through a secure connection without upgrading the subscription. It will work without a secure connection but not on the university server.
    xhttp.open('GET', "https://data.fixer.io/api/latest" + '?access_key=' + "0470daeed1912eacd503ea6138e58225",true);
    xhttp.send();
//alert('first run ');
