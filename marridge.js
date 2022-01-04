/**
 * marrige age checker
 * 
 * 
 */

const form1 = document.querySelector('#form1');
const name2 = document.querySelector('#name');
const year1 = document.querySelector('#age');
const sele = document.querySelector('#sele');
const plain = document.querySelector('#plain');
const btn = document.querySelector('#btn');
const amin1 = document.querySelector('#amin1');
const amin2 = document.querySelector('#amin2');
const h4 = document.querySelector('#h4');
const pn = document.querySelector('#pn');



name2.addEventListener('keyup' , () => {
    let name1 = name2.value;
    let npattern = /^[a-zA-Z\s]*$/

    if(npattern.test(name1) == false){
        amin1.innerHTML = `<p class="text-danger">*plz input valid name*</p>`
        name2.style.border = "red 1px solid";
    }else if(npattern.test(name1) == true){
        amin1.innerHTML = ` `;
        name2.style.border = "#008640 1px solid";
    }else{
       
    }
})
year1.addEventListener('keyup' , () => {

    let agechk = year1.value;
    let apattern = /^[0-9]{4}$/;

    if(apattern.test(agechk) == false){
        amin2.innerHTML = `<p class="text-danger">*plz input valid year*</p>`
        year1.style.border = "red 1px solid";
    }else if(apattern.test(agechk) == true){
        amin2.innerHTML = ` `;
        year1.style.border = "#008640 1px solid";
    }else {

    }

})


sele.addEventListener('change' , () => {
    if(sele.value == sele.children[1].value || sele.value == sele.children[2].value){
        sele.style.border = "#008640 1px solid";
       
    }else{
        sele.style.border = "red 1px solid";
        plain.innerHTML = '<p class="text-danger">*required</p>*'
    }
})

form1.addEventListener('submit' , (e) =>{
e.preventDefault();
if(name2.value == '' || year1.value == '' || sele.value == sele.children[0].value){
    plain.innerHTML = `<p class="alert alert-warning text-primary text-center">query must be fulfill</p>`
    name2.style.border = "red 1px solid";
    year1.style.border = "red 1px solid";
    sele.style.border = "red 1px solid";
    h4.innerHTML = `<p class="alert alert-success text-center text-dark">Try Again</p>`
}else{
    plain.innerHTML = marrideAgeChecker(name2.value, year1.value, sele.value);
    name2.style.border = "#008640 1px solid";
    year1.style.border = "#008640 1px solid";
    sele.style.border = "#008640 1px solid";
    h4.innerHTML = `<p class="alert alert-success text-center text-dark">Nice Try</p>`
    name2.value = '';
    year1.value = '';
}
});


// =================end of data===========================