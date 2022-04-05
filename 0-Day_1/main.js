// function to return sum of elements  
    // in an array of size n         
function sum(arr) {  
        let sum = 0; 
        // initialize sum  
    
        // Iterate through all elements  
        // and add them to sum  
        for (let i = 0; i < arr.length; i++)  
            sum += arr[i];  
        return sum;  
    }  
    let arr = [0, 3, 2, 5];
    document.write("Sum of given array is " + sum(arr));
