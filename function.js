/**
 * marrigae agechecker---
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function marrideAgeChecker(name, year, gender) {

    let date = new Date();
    age = date.getFullYear(age) - year;
    return `<p class= "alert alert-success">Hi ${name} your age ${age} & you are ${amin(age, gender)}</p>`

}

function amin(age, gender) {

    if (age < 18) {
        if (gender == 'male'){
            return `<p class = "alert alert-danger">Not elidgble for marride 1 wait for more ${22 - age} ${22-age > 1 ? "years": "year"}</p>`
        } else if (gender == 'female') {
            return `<p class = "alert alert-danger">Not elidgble for marride 2# wait for more ${18 - age} ${18-age > 1 ? "years": "year"}</p>`
        }
    }else if(age >= 18 && age < 22){
        if (gender == 'male') {
            return `<p class = "alert alert-danger">Not elidgble for marride 1# wait for more  ${22-age}${22-age > 1 ? "years": "year"}</p>`
        } else if (gender == 'female') {
            return `<p class = "alert alert-success">Elidgble for marride 2#</p>`
        }
    }else if(age >= 22){
        if (gender == 'male') {
            return `<p class = "alert alert-success">Elidgble for marride 1#</p>`
        } else if (gender == 'female') {
            return `<p class = "alert alert-success">Elidgble for marride 2#</p>`
        }
    }
}

// ===========age chacker ========

/**
 * age function---
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


function age_cal(name, year) {
    let date = new Date();
    let age1 = date.getFullYear() - year;
    let agechk1 = ageMeter1(age1);
    return `<p class="alert alert-${agechk1.status}">Hi ${name} you are ${age1} years old & your Gender status: ${fgroup.value} now you are ${agechk1.name1}</p>`

}

/**
 * age convert
 * @param {*} age1 
 * @returns 
 */


function ageMeter1(age1) {
    if (age1 >= 0 && age1 < 10) {
        return {
            name1: 'You Are still Child',
            status: 'primary',
        };
    } else if (age1 >= 10 && age1 < 18) {
        return {
            name1: 'Teenager',
            status: 'info',
        };
    } else if (age1 >= 18 && age1 < 25) {
        return {
            name1: 'Young',
            status: 'success',
        };
    } else if (age1 >= 25 && age1 < 50) {
        return {
            name1: 'Going to old',
            status: 'warning',
        };
    } else {
        return {
            name1: 'Sorry Dear, out of age',
            status: 'danger',
        };
    };
}


//==========end of data=============