class FizzBuzz {
  counter(){
    const arr = []
    for(let i = 1; i < 100; i++){
      arr.push(this.query(i))
    }
    return arr
  }

  query(number) {
    if (this.isDivisibleByFiveAndThree(number)){
      return "FizzBuzz"
    } else if (this.isDivisibleByThree(number)){ 
      return "Fizz"
    } else if (this.isDivisibleByFive(number)){
      return "Buzz"
    } else {
      return number;
    }
  }

  isDivisibleByThree(number) {
    return number % 3 == 0;
  }
  isDivisibleByFive(number) {
    return number % 5 == 0;
  }
  isDivisibleByFiveAndThree(number){
    return this.isDivisibleByThree(number) && this.isDivisibleByFive(number);
  }
}

