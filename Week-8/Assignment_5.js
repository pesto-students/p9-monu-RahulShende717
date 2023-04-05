class Queue{
    constructor(){
        this.s1=[];
        this.s2=[];

    }

    enQueue(element){
        this.s1.push(element);
    }

    deQueue(){
        if(this.s1.length==0&&this.s2.length==0)
        {
            console.log("queue is empty");
            return 0;
        }

        if(this.s2.length==0)
        {
            while(this.s1.length!=0)
            {
                this.s2.push(this.s1[0]);
                this.s1.shift();
            }
        }

        let no = this.s2[0];
        this.s2.shift();
        return no;
    }
}

let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
  
console.log(q.deQueue());
