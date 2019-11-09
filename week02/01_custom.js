b = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.customFilter = function(cb) {
	const newArr = [];
	for(let i=0 ; i<this.length ; i++) {
		if(cb(this[i])) {
			newArr.push(this[i])
		}
	}

	return newArr;
}

console.log(b.customFilter(e => e > 5));

Array.prototype.customEvery = function(cb) {
	if (this.length < 1) return true;
	for(let i=0 ; i<this.length ; i++) {
		if(!cb(this[i])) {
			return false
		}
	}

	return true ;
}

console.log(b.customEvery(e => e > 5));

Array.prototype.customSome = function(cb) {
	if (this.length < 1) return true;
	for(let i=0 ; i<this.length ; i++) {
		if(cb(this[i])) {
			return true
		}
	}

	return false;
}

console.log(b.customSome(e => e > 0));

Array.prototype.customFlat = function(depth) {
	const newArr = [];
	const flat = function(e, dep) {
		if (!Array.isArray(e) || dep === 0) {
			return newArr.push(e);
		}
		for(let i=0; i<e.length; i++) {
			flat(e[i], dep-1);
		}
	}
	for(let i=0,j=0 ; i<this.length ; i++) {
		flat(this[i], depth);
	}

	return newArr
}

c = [1, [2,3] ,[4,[5,6,[7,[8,9]]]], [6,7,8,9]];
console.log(c.customFlat(1));

Array.prototype.customForEach = function customForEach(cb){
  for(var i=0; i < this.length; i++){
    cb(this[i]);
  }
}

Array.prototype.customFlat = function(depth) {
	const newArr = [];
	const flat = function(e, dep) {
		if (!Array.isArray(e) || dep === 0) {
			return newArr.push(e);
		}
		e.forEach(ee => flat(ee, dep-1))
	}
	this.forEach(e => flat(e, depth));

	return newArr
}

c = [1, [2,3] ,[4,[5,6,[7,[8,9]]]], [6,7,8,9]];
console.log(c.customFlat(1));

Array.prototype.customReduce = function customReduce(cb){
	let acc;
  for(var i=0; i < this.length; i++){
    acc = cb(acc, this[i]);
	}
	
	return acc;
}

console.log(b.reduce((acc, cur) => acc + cur));