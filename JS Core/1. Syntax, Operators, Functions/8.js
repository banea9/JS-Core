function validChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3]; 

    
    for(let i = 0; i <= 2; i++) {
        if(i === 0) {
            isValid(x1,y1,z = 0, c = 0)
        } 
        else if (i === 1) {
            isValid(x2,y2,z = 0, c = 0)
        }
        else {
            isValid(x1,y1,x2,y2)
        }
    }
    function isValid(x,y,z,c) {
        let distance = Math.sqrt(Math.pow(Math.abs(x - z), 2) + Math.pow(Math.abs(y - c), 2));
        if(distance % 1 !== 0) {
            console.log(`{${x}, ${y}} to {${z}, ${c}} is invalid`);
        }
        else {
            console.log(`{${x}, ${y}} to {${z}, ${c}} is valid`);
        }
    }

}