const checkTrust = function(n,trust){
    let arr=[];
    const adjList ={}
    for(let i=0;i<n;i++){
        const vertexA=trust[i][0];
        const vertexB=trust[i][1];

        if(!adjList[vertexA])
        {
            adjList[vertexA]=[];
        }
        if(!adjList[vertexB])
        {
            adjList[vertexB]=[];
        }
        adjList[vertexA].push(vertexB);
    }

    for(let i=0;i<adjList.length;i++)
    {
        if(adjList[i].length===0)
        {
             arr.push(adjList[i]);
         }
    }

    return arr;
}
let aa=3;
const trusts = [[1,3],[2,3]];
const value= checkTrust(aa,trusts);
console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,",value);