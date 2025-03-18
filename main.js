

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    const dividor = height / 100;
    const bmi = weight / (dividor * dividor) ;

    let status = '';
    if( bmi > 0 && bmi < 18.5 ) { status = 'Underweight'; } 
    else if( bmi >= 18.5 && bmi < 24.9 ) { status = 'Normal weight'; } 
    else if( bmi >= 25 && bmi < 29.9 ) { status = 'Overweight'; } 
    else if( bmi >= 30 ) { status = 'Obesity'; } 
    else { status = 'Invalid'; }

    document.getElementById('status').innerHTML = status;

    document.getElementById('bmi').innerHTML = `${bmi.toFixed(2)}`;
}