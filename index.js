// var http =require('http');

// http.createServer(function(req,res){
//     res.write("hello node js ");
//     res.end();
// }).listen(8080);

function createSquare(h,w){
    let myArr=Array(h)
    let myArrW=Array(w)
    let character ="* "
    let width="" ;
    let widthMiddle="";
     
    for (i=0;i<myArrW.length;i++){
        width += character
    }
    for (i=0;i<myArrW.length;i++){
        if (i==0) {
            widthMiddle += character
        }else if(i==myArr.length-1){
            widthMiddle += character
        }else if(i>0 && i<myArrW.length){
            widthMiddle+="  "
        }  
    } 
   for (let i = 0; i < myArr.length; i++) {

    if(i==0){
        console.log(width)
        
    }else if (i==myArr.length-1) {
        console.log(width)
        
    }else if(i>0 && i<myArr.length){
        console.log(widthMiddle)
    }
   }   
}

createSquare(10,10)