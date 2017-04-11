var event = {
	fire: function (name) {
		var arr = Array.prototype.slice.call(arguments,0);
		arr.shift();
		var events = this.events[name] || [];
		events.forEach(function (callback,index,array){
			callback.apply(null,arr)
		})
	},
	on: function(name,callback) {
		this.events[name] = this.events[name]  || [];
		this.events[name].push(callback);
	},
	events: {
		// test: [callback1, callback2]
		// test1: [callback]
	}  
}



event.on('test', function (obj, num) {
  console.log(obj, num);
});
event.on('test', function (obj, num) {
  console.log(obj, num);
});

event.fire('test', {a: 1}, 2)
