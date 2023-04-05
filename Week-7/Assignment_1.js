function MaxSumSubArray(arr){
    let max=0;
    let check=0;
    for(let i=0; i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
             check=check+arr[j];
            if(max<check)
            {
                max=check;
            }
        }
        check=0;
    }
    return max;
}
let a=[-9,-1,1,2,3,4,3,-2,-3];
console.log(MaxSumSubArray(a));