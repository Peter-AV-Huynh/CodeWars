let somethingElse = [15, 16, 17, 18]

function fizzBuzz(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] % 15 == 0){
            console.log('FizzBuzz')
        }else if(arr[i] % 5 == 0){
            console.log('Buzz')
        }else if(arr[i] % 3 == 0){
            console.log('Fizz')
        }else{
            console.log(arr[i])
        }
    }
}

fizzBuzz(somethingElse);