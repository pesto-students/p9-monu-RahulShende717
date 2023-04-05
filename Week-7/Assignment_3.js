function Sort(arr,N){  

    for(let i=0;i<N;i++)
    {
        for(let j=0;j<N-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
              var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
}
let arr= [0,2,1,2,0];
Sort(arr , arr.length);
console.log(arr);