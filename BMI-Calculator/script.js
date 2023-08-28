const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = `Please enter the valid height. ${height}` 
    }


    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please enter the valid weight.${weight}`
    }


    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let msg = '';

        if(bmi < 18.6){
            msg = "You are Under weight."
        }
        else if(bmi>=18.6 && bmi<=24.9){
            msg = "You are in Normal Range"
        }
        else{
            msg = "You are Overweight"
        }


        result.innerHTML = `<span>${bmi}</span> -- ${msg}`;
    }

    
})