//Linear Search ::::
function search(arr, n, x)
{
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}
    let arr = [ 2, 3, 4, 10, 40 ];
    let x = 10;
    let n = arr.length;
  
    let result = search(arr, n, x);
    (result == -1)
        ? document.write("Element is not present in array")
        : document.write("Element is present at index " + result);

//------------------------------------------------------------------------------------------

 //Binary Search  :::::
let iterativeFunction = function (arr, x) { 
    let start=0, end=arr.length-1;
    while (start<=end){
        let mid=Math.floor((start + end)/2);
        if (arr[mid]===x) return true;
 
        else if (arr[mid] < x)
             start = mid + 1;
        else
             end = mid - 1;
    }
  
    return false;
}
  
let arr1 = [1, 3, 5, 7, 8, 9];
let x1 = 5;
  
if (iterativeFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
//------------------------------------------------------------------------------------------

//selection sort ::::::

function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
function selectionSort(arr,  n)
{
    var i, j, min_idx;
  
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
  
        swap(arr,min_idx, i);
    }
}
  
function printArray( arr,  size)
{
    var i;
    for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
    document.write(" <br>");
}
  
var arr2 = [64, 25, 12, 22, 11];
    var n1 = 5;
    selectionSort(arr, n);
    document.write("Sorted array: <br>");
    printArray(arr, n);


    //---------------------------------------------------------------------

    //BubbleSort:::::::
    function bblSort(arr){
        for(var i = 0; i < arr.length; i++){  
          for(var j = 0; j < ( arr.length - i -1 ); j++){   
            if(arr[j] > arr[j+1]){    
              var temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
          }
        }
        console.log(arr);
       }
    
       var arr3 = [234, 43, 55, 63,  5, 6, 235, 547];
       bblSort(arr);




