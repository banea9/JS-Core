function solve() {
    let text = JSON.parse(document.getElementById('arr').value);
    
    let usernameChecker = (string) => {
        let pattern = /^[A-Z][a-z]* [A-Z][a-z]* /
        let match = string.match(pattern);
        return match
    }
    let phoneNumberChecker = (string) => {
        let pattern = /(\+359 \d{1} \d{3} \d{3})|(\+359-\d{1}-\d{3}-\d{3})/
        let match = string.match(pattern);
        return match
    }
    let mailChecker = (string) => {
        let pattern = / [a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        let match = string.match(pattern);
        return match
    }
    for(let string of text) {
        if(usernameChecker(string) && phoneNumberChecker(string) && mailChecker(string)) {
            let pName = document.createElement('p')
            pName.textContent = `Name: ${usernameChecker(string)}`;
            let pPhone = document.createElement('p')
            pPhone.textContent = `Phone Number: ${phoneNumberChecker(string)}`;
            let pMail = document.createElement('p')
            pMail.textContent = `Email: ${mailChecker(string)}`;
            let spliter = document.createElement('p');
            spliter.textContent = "- - -"
            document.getElementById('result').appendChild(pName);
            document.getElementById('result').appendChild(pPhone);
            document.getElementById('result').appendChild(pMail);
            document.getElementById('result').appendChild(spliter)
        }
        else {
            let p = document.createElement('p')
            p.textContent = "Invalid data";
            let spliter = document.createElement('p');
            spliter.textContent = "- - -"
            document.getElementById('result').appendChild(p);
            document.getElementById('result').appendChild(spliter)
            
        }
    }
    
    
    
}