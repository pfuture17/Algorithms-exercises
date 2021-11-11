function fibonnaci(position: number):number {
    if(position < 3) return 1
    else return fibonnaci(position - 1) + fibonnaci(position - 2)
  }
  console.log(fibonnaci(6))