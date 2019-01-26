function insertat(arr,val,idx)
{
    if (idx>(arr.length-1)){
        return false;
    }
    arr.push(arr[arr.length-1]);
    for(var i= (arr.length-2);i>=idx;i--){
        arr[i+1]=arr[i];
        
    }
    arr[idx]=val;
    return true;
}

arr=[1,2,3,4];
console.log(insertat(arr,0,2));
console.log(arr);


