
var Person = function(firstAndLast) {
  var name = firstAndLast;


    // Complete the method below and implement the others similarly
    this.setFirstName = function(first) {
      name = first + ' ' + name.split(' ')[1];
    };

    this.setLastName = function(last) {
      name = name.split(' ')[0] + ' ' + last;
    };

    this.setFullName = function(full) {
      name = full;
    };

    this.getFirstName = function() {
      console.log(name.split(' ')[0]);
      return name.split(' ')[0];
    };

    this.getLastName = function() {
      console.log(name.split(' ')[1]);
      return name.split(' ')[1];
    };

    this.getFullName = function() {
      console.log(name);
      return name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
