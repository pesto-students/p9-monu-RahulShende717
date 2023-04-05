function solution(arr, x)
{
    arr.sort((a, b) => a - b);
    let closestSum = 1000000000;
    for (let i = 0; i < arr.length - 2; i++)
    {
        let ptr1 = i + 1, ptr2 = arr.length - 1;
        while (ptr1 < ptr2) {
            let sum = arr[i] + arr[ptr1] + arr[ptr2];
            if (Math.abs(1*x - sum) < Math.abs(1*x - closestSum))
            {
                closestSum = sum;
            }
            if (sum > x) {
                ptr2--;
            }
            else {
                ptr1++;
            }
        }
    }
    return closestSum;
}
    let arr = [ -1, 2, 1, -4 ];
    let x = 1;
    document.write(solution(arr, x));
 
 