const calc = function (num1, num2, paramatre) {
    const hesap = {
        num1:num1,
        num2:num2,
        parametre:paramatre,
        sonuc: null
    };
    if (paramatre == "+")
    hesap.sonuc = num1+num2;

    else if (paramatre == "-")
    hesap.sonuc = num1-num2;
   
    return hesap;
}

console.log(calc(12, 14, "+"))

