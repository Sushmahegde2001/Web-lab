encrypt = (string, shift) => { 
    let result = ""; 
    for (let i = 0; i < string.length; i++) { 
    let text = (string[i].charCodeAt()) + shift; 
    if (text > 122) { 
    text = 96 + (text - 122); 
    } 
    result = result + String.fromCharCode(text); 
    } 
    console.log(result); 
   } 
   let string = prompt("Enter the text to be converted to cipher text"); 
   let shift = parseInt(prompt("enter the shift pattern")); 
   encrypt(string, shift); 