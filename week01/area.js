function foo8() {
    this.h = 10;
  
    this.plusFunction = function(x) {
      const add = function(some) {
        this.h += some;
      };
      add(x);
    };
    this.plusArrowFunction = function(x) {
      const add = some => {
        this.h += some;
      };
      add(x);
    };
  }
  
  const H = new foo8();
  H.plusFunction(10);
  console.log(H.h);
  
  H.plusArrowFunction(10);
  console.log(H.h);