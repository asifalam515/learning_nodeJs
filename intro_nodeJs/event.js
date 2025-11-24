const EventEmitter = require('events')
const event = new EventEmitter()
// register a listener for bellRing event
event.on("bellRang",()=>{
    console.log("the bell is ranging go away");
})
event.on("babyShark",()=>{
    console.log("baby shark is singing");
})
//raise an event
event.emit('bellRang')
event.emit('babyShark')