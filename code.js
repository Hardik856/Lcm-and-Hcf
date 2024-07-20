function calc(e){
    var num1=document.getElementById("n1").value;
    var num2=document.getElementById("n2").value;
    var result;
    if(e=="HCF"){
        for(let i=1;i<num1&&i<=num2;i++){
            if(num1%i==0&&num2%i==0){
                result=i;
            }
        }
    }else if(e=="LCM"){
        let max=num1>num2?num1:num2
        while(true){
            if(max%num1==0&&max%num2==0){
                result =max;
                break;
            }
            max++;
        }
    }
    document.getElementById("ans").innerHTML=result;
        
}