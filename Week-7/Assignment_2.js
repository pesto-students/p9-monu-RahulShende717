function printSpiralOrder(arr,m,n){
    let rowStart=0;
    let coloumStart=0;
    let rowEnd=m-1;
    let coloumEnd=n-1;

    while(rowStart<=rowEnd && coloumStart<=coloumEnd)
    {
        for(let i=coloumStart;i<=coloumEnd;i++)
            console.log(arr[rowStart][i]);
            rowStart++;
         
        for(let i=rowStart;i<=rowEnd;i++)
           console.log(arr[i][coloumEnd]);
           coloumEnd--;

        for(let i=coloumEnd;i>=coloumStart;i--)
           console.log(arr[rowEnd][i]); 
           rowEnd--;

        for(let i=rowEnd;i>=rowStart;i--)
           console.log(arr[i][coloumStart]);       
           coloumStart++;
    }
}

let Array1= [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] ;
printSpiralOrder(Array1,3,3);