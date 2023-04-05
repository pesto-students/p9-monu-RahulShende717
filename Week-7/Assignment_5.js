function Difference(arr1, value){
   
    for(let i=0; i<arr1.length;i++)
    {
        for(let j=i;j<arr1.length;j++)
        {
             if(arr1[i]-arr1[j]==value || arr1[i]-arr1[j]== -value )
             {
                return 1;
             }           
        }
    }
    return 0;
}
let A =[-10, 20];
let B=30;
console.log(Difference(A,B));