var numIntroduit = window.prompt('Introdueix un número sisplau:');

if(!isNaN(numIntroduit)){
    for(var i = 0; i <= numIntroduit; i++){
        var numx = numIntroduit * i;
        console.log(numx);
    }
}else{
    window.alert('No es un numero burro!!!');
}