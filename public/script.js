class state { 
    constructor(startTimestamp,difference,suspended){
        this.startTimestamp=startTimestamp;
        this.difference=difference;
        this.suspended=suspended;

    }

    static ready(){
        return new state(null,0,0);
    }
}

class stopwatch {
    constructor(state){
        this.state=state;
        this.requestAnimationId=null;
        this.handleClickstart = this.handleClickstart.bind(this);
        document.getElementById("start").addEventListener("click",this.handleClickstart);
        this.handleClickstop = this.handleClickstop.bind(this);
        document.getElementById("stop").addEventListener("click",this.handleClickstop);
        this.handleClickreset = this.handleClickreset.bind(this);
        document.getElementById("reset").addEventListener("click",this.handleClickreset);
        this.tick = this.tick.bind(this);
        document
     this.render();

    }
    static ready(){
        return new stopwatch(state.ready());

    }
setstate(newstate){
    this.state= {... this.state,... newstate}; 
    this.render();

}
tick(){
    this.setstate({
        difference: new Date((new Date()) - (this.state.startTimestamp)) //idhar hi gar bar thi yeh object hai ha yahi hai
    });
    this.requestAnimationId=requestAnimationFrame(this.tick);
}
handleClickstart(){
    if (this.state.startTimestamp) {
        return;
    }

this.setstate({
    startTimestamp:new Date()- this.state.suspended,suspended:0
})
this.requestAnimationId=requestAnimationFrame(this.tick)
}
handleClickstop(){
    cancelAnimationFrame(this.requestAnimationId);
    this.setstate({
        startTimestamp:null,
        suspended:this.state.difference
    })
}
handleClickreset(){
    cancelAnimationFrame(this.requestAnimationId);
    this.setstate(state.ready());
}
render(){
    const{difference}=this.state;
    const hunderdths = (difference ? Math.floor(difference.getMilliseconds()/10):0
    )
    
    
    .toString()
    .padStart(2,"0");

const seconds =(difference ? Math.floor(difference.getSeconds()):0)
    
    .toString()
    .padStart(2,"0");


    const minutes =(difference ? Math.floor(difference.getMinutes()):0)
    
    .toString()
    .padStart(2,"0");
document.getElementById("minutes").textContent = minutes;

document.getElementById("seconds").textContent = seconds;

document.getElementById("hundredths").textContent = hunderdths;

}
 
  }
const STOPWATCH = stopwatch.ready();