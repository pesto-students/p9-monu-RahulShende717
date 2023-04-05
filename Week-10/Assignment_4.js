var validPath= function(n, edge, source, destination)
{
    const adjList= {}
    for(let i=0;i<n;i++)
    {
       const vertexA= edge[i][0];
       const vertexB= edge[i][1];

       if(!adjList[vertexA])
       {
        adjList[vertexA]=[];
       }
       if(!adjList[vertexB])
       {
        adjList[vertexB]=[];
       }
       adjList[vertexA].push(vertexB);
       adjList[vertexB].push(vertexA);

    }

    const stack=[source];
    visited[source]=true;
    while(stack.length){
        const current =stack.pop();
        if(current===destination)
        return true;
    for(let neighour of adjList[current]){
        if(!visited(neighour)){
            stack.push(neighour);
            visited[neighour]=true;
        }
    }

    }
   return false;
};


let n = 6;
const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
let source = 0 ;
let destination = 5;


const value = validPath(n,edges,source,destination);
