<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        //to check number is even or odd
           function myfun(){
             let n=window.prompt("enter number:");
             alert("number entered is:"+n);
             if(n%2==0){
                 document.write("EVEN NUMBER");
             }
             else{
                 document.write("ODD NUMBER");
             }
         }
         myfun();
        //accept 2 number add them and show result is even or odd 
        // function myfun(){
        //     let n1=window.prompt("enter first number:");
        //     let n2=window.prompt("enter second number:");
        //     let sum= n1+n2;
        
        //     document.write("sum is:"+sum+"<br><br>");
        //     if(sum%2==0){
        //         document.write("EVEN NUMBER");
        //     }else{
        //        document.write("ODD NUMBER");
        //    }

        // }
        // myfun();
        //to display 1-100 numbers
        // function myfun(){
        //     let n=100;
        //     let i=1;
        //     for(i=1;i<=100;i++){
        //         document.write(i+"<br>");
        //     }
        // }
        // myfun();
        //to print alternate numbers 1,3,5,....
        // function myfun(){
        //     let n=100;
        //     let i=0;
        //     for(i=0;i<=100;i++){
        //         if(i%2==0){
        //             continue;
        //         }
        //         document.write(i+"<br>");
        //     }
        // }
        // myfun();
        //to print alternate number 0,2,4,6....
        // function myfun(){
        //     let n=100;
        //     let i=0;
        //     for(i=0;i<=100;i++){
        //         if(i%2!=0){
        //             continue;
        //         }
        //         document.write(i+"<br>");
        //     }
        // }
        // myfun();
        //to print numbers backwards
        // function myfun(){
        //     let n=100;
        //     let i=100;
        //     for(i=100;i>=0;i--){
                
        //         document.write(i+"<br>");
        //     }
        // }
        // myfun();
       
        //print numbers in reverse order skip 1 number
        // function myfun(){
        //     let n=100;
        //     let i=100;
        //     for(i=100;i>=0;i--){
        //         if(i%2!=0){
        //             continue;
        //         }
        //         document.write(i+"<br>");
        //     }
        // }
        // myfun();
        //star pyramid
        // function myfun(){
        //     let n=10;
        //     let string="";
        //     for(let i=1;i<=n;i++){
        //         for(let j=0;j<n-i;j++){
        //             string+=" ";
        //         }
        //         for(let k=0;k<i;k++){
        //             string+="*";
        //         }
        //         string+="\n";
        //     }
        //     console.log(string);
        //     // document.write(string+"<br>");
        // }
        // myfun();
        //number pyramid
        // function myfun(){
        //     var n=10;
        //     for(var i=1;i<=n;i++){
        //         for(var j=1;j<=i;j++){
        //             document.write(j);
        //         }
        //         document.write("<br>");
        //     }
        // }
        //  myfun();
    </script>
    </head>
    <body>
        
    </body>
    </html>