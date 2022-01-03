


const submit = document.querySelector('#submit');
const idform = document.querySelector('#idform');
const idname = document.querySelector('#idname');
const idage = document.querySelector('#year');
const bp = document.querySelector('#bp');
const b2nd = document.querySelector('#b2nd');
const b3rd = document.querySelector('#b3rd');
const fgroup = document.querySelector('#fgroup');
const sp = document.querySelector('#sp');



idname.addEventListener('keyup' , () =>{

    let bName = idname.value;
    let bnPattern = /^[a-zA-Z][^0-9\.!@#$%&]*$/;

    if(idname.value == ''){
        b2nd.innerHTML = `<p class="text-danger">*name fields can't be empty*</p>`;
        idname.style.border = "red 1px solid";
    }
    else if(bnPattern.test(bName) == false){
        b2nd.innerHTML = `<p class="text-danger">*plz input valid name & {0-9.!@#$%&} are not allowed*</p>`
        idname.style.border = "red 1px solid";
    }else if(bnPattern.test(bName) == true){
        b2nd.innerHTML = ` `;
        idname.style.border = "#27ae60 1px solid";
    }else{

    };

});

idage.addEventListener('keyup' , () =>{
    let bAge = idage.value;
    let iaPattern = /^[0-9]{4}$/

    if(idage.value == ''){
        b3rd.innerHTML = `<p class="text-danger">*year fields can't be empty*</p>`;
        idage.style.border = "red 1px solid";
    }
    else if(iaPattern.test(bAge) == false){
        b3rd.innerHTML = `<p class="text-danger">plz input valid year & {a-zA-Z.!@#$%&} are not allowed</p>`
        idage.style.border = "red 1px solid";
    }else if(iaPattern.test(bAge) == true){
        b3rd.innerHTML = ``;
        idage.style.border = "#27ae60 1px solid";
    }else{

    };

});

fgroup.addEventListener('change' , () =>{
    if(fgroup.value == fgroup.children[1].value || fgroup.value == fgroup.children[2].value){
        sp.innerHTML = ` `;
        fgroup.style.border = "#27ae60 1px solid";
    }else{
     fgroup.style.border = "red 1px solid";
     sp.innerHTML = `<p class="text-danger">select other except this</p>`;
    }
 })


idform.addEventListener('submit' , (evn) =>{
    evn.preventDefault();
    if(idname == '' || idage == '' || fgroup.value == fgroup.children[0].value){
        bp.innerHTML = '<p class = "alert alert-danger">*plese fill up form*</p>';
        idname.style.border ="red 1px solid";
        idage.style.border ="red 1px solid";
        fgroup.style.border ="red 1px solid";
    }else if(idname == '' || idage == '' || fgroup.value == fgroup.children[1].value || fgroup.value == fgroup.children[2].value){
        bp.innerHTML = '<p class = "alert alert-danger">*plese fill up form*</p>';
    }else{
        bp.innerHTML = age_cal(idname.value, idage.value);
        idname.value= '';
        idage.value = '';
        idname.style.border ="#27ae60 1px solid";
        idage.style.border ="#27ae60 1px solid";
        fgroup.style.border ="#27ae60 1px solid";
        bp.innerHTML= '';
    }
});

