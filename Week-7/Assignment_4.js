function CheckProfit(arr){
    let profit=0;
    let check=0;
    for(let i=0; i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
             check=arr[j]-arr[i];
            if(profit<check)
            {
                profit=check;
            }
        }
        check=0;
    }
    return profit;
}
let prices =[7,6,4,3,1];
console.log(CheckProfit(prices));