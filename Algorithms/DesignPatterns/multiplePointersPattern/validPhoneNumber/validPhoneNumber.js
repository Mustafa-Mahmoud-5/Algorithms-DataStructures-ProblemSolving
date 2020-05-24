const validPhoneNumber = (...args) => {

    let validPhoneNumbers = [];
    
    for(let i = 0; i< args.length; i++) {

        for(let j = 0; j < args[i].length; j++) {
            
            if(args[i][j] === '(') {
                validPhoneNumbers.push(args[i])
            }

            if(args[i][j] === '-'){
                if(validPhoneNumbers.indexOf(args[i]) !== -1)

                    validPhoneNumbers.push(args[i])
            }
            
        }

    }

    console.log(validPhoneNumbers);
    
}

console.log(validPhoneNumber('987-123-4567', '123 456 7890', '(123) 456-7890'));
