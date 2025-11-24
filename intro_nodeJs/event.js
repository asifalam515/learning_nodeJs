const EventEmitter = require('events')
const event = new EventEmitter()
// register a listener for bellRing event
event.on("bellRang",(period )=>{
    console.log(`we need to run bcz ${period} is done`);
})
event.on("babyShark",()=>{
    console.log("baby shark is singing");
})
//raise an event
event.emit('bellRang','second period')
event.emit('babyShark')