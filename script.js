const url = 'https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4f1e71d847mshd34a1ad6ccd41d1p1087adjsnb1b12e15aaad',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
    }
};



const btn=document.getElementById('btn')
const moneyAmount=document.getElementById('moneyAmount')
const err=document.getElementById('err')
const resultH2=document.getElementById('result')

btn.addEventListener('click',()=>{
    if (moneyAmount.value<0) {
        err.style='display:block'
    } else {
        try {
            
            fetch(url, options)
            .then((res)=>res.json())
            .then((json)=> calc(json));
            
            
            
        } catch (error) {
            console.error(error);
        }
    }
})

function calc(data) {
    err.style='display:none';
    resultH2.style='display:block'
    resultH2.textContent='Natija:'+data.result.UZS*moneyAmount.value+`  so'm ✅`
}




  
