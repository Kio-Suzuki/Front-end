function vrificaNum(){
    var i=0;
    for (i=1;i<=10;i++){
        if(i%2 == 0){
           document.write(i + " = par");
        }else{
            document.write(i + " = ímpar");
        }
    }
}