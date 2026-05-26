let amount=document.querySelector("#amount");
let fromcurrency=document.querySelector("#fromcurrency");
let swap=document.querySelector("#swap");
let tocurrency=document.querySelector("#tocurrency");
let result=document.querySelector("#result");
let  convertbtn=document.querySelector("#convertbtn");
let rateinfo=document.querySelector(".rateinfo");



async function CurrencyConverter(){
    let  amt=Number(amount.value);
    if(amount.value=== ""){
    alert("ENTER AMOUNT");
    return
}
    let from=fromcurrency.value;
    let to=tocurrency.value;
    let response=await fetch("https://open.er-api.com/v6/latest/USD");
   let data=await response.json();
    let rate= amt/data.rates[from];
    let final=rate*data.rates[to];
     result.value=final.toFixed(2);
   rateinfo.textContent=`1 ${from}=${(data.rates[to]/data.rates[from]).toFixed(2)} ${to}`;
}
 
swap.addEventListener("click",
    ()=>{
        let temp= fromcurrency.value;;
        fromcurrency.value=tocurrency.value;
        tocurrency.value=temp;
        CurrencyConverter();
    });
    convertbtn.addEventListener("click",
        ()=>{
             
            CurrencyConverter();
        } )
CurrencyConverter();

function togglemood(){
    document.body.classList.toggle("dark");
}


