let number = prompt("enter the number");
let target = 13;
while(number!=target){
    console.log("try again you have entered wrong number");
    if(number > target ){
        console.log("enter the smaller number ");
        break;
    }
    else{
        console.log("you have ented number is smaller so enter greater than that");
        break;
    
    }


}
console.log("you have enteed write number");