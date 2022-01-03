/**
 * Currency Converter --
 */
const form = document.querySelector('#form');
const select = document.querySelector('#select');
const amount = document.querySelector('#amount');
const pt = document.querySelector('#pt');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');


amount.addEventListener('keyup', ()=>{
    let userAmt = amount.value;
    let pattern = /^[0-9]*$/;
  
    
if(userAmt == ''){
    p1.innerHTML = `<p class="text-danger">*pls type amount*</p>`
    
}else if(pattern.test(userAmt) == false){
    p1.innerHTML = `<p class="text-danger">*sorry amount only*</p>`;
 }else if(pattern.test(userAmt) == true){
     p1.innerHTML = '';
 }else{
     p1.innerHTML = '';
 }
})


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(amount.value == ''){
     p1.innerHTML = `<p class="text-danger">fields can't be empty</p>`
    }else if(select.value == select.children[0].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-danger mt-2">plz select from drop down</p>`
    }else if(select.value == select.children[1].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} USD = ${(amount.value * select.children[1].value).toFixed(2)} = taka</p>`
    }else if(select.value == select.children[2].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} CAD = ${(amount.value * select.children[2].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[3].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} EURO = ${(amount.value * select.children[3].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[4].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} POUND = ${(amount.value * select.children[4].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[5].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} DINNER = ${(amount.value * select.children[5].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[6].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} RIYEL = ${(amount.value * select.children[6].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[7].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} RINGGIT = ${(amount.value * select.children[7].value).toFixed(2)} = taka </p>`
    }else if(select.value == select.children[8].value){
        pt.innerHTML = `<p style="font-weight:bold; text-align:center;" class="alert alert-success mt-2">${amount.value} INR = ${(amount.value * select.children[8].value).toFixed(2)} = taka </p>`
    }else{
        
    }
}
)

// =================end of data===========================