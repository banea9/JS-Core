function solve() {
    let letters = document.getElementsByTagName('li');
    for (let i = 0; i < letters.length; i++) {
        letters[i].setAttribute('id', `${String.fromCharCode(i + 65)}`)
    }
    document.getElementsByTagName('button')[0].addEventListener('click', function () {
        let inputField = document.getElementsByTagName('input')[0];
        switch (inputField.value[0]) {
            case 'A':
                if (document.getElementById('A').textContent.length === 0) {
                    document.getElementById('A').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('A').textContent += `, ${inputField.value}`;
                }
                break;
            case 'B':
                if (document.getElementById('B').textContent.length === 0) {
                    document.getElementById('B').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('B').textContent += `, ${inputField.value}`;
                }
                break;
            case 'C':
                if (document.getElementById('C').textContent.length === 0) {
                    document.getElementById('C').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('C').textContent += `, ${inputField.value}`;
                }
                break;
            case 'D':
                if (document.getElementById('D').textContent.length === 0) {
                    document.getElementById('D').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('D').textContent += `, ${inputField.value}`;
                }
                break;
            case 'E':
                if (document.getElementById('E').textContent.length === 0) {
                    document.getElementById('E').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('E').textContent += `, ${inputField.value}`;
                }
                break;
            case 'F':
                if (document.getElementById('F').textContent.length === 0) {
                    document.getElementById('F').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('F').textContent += `, ${inputField.value}`;
                }
                break;
            case 'G':
                if (document.getElementById('G').textContent.length === 0) {
                    document.getElementById('G').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('G').textContent += `, ${inputField.value}`;
                }
                break;
            case 'H':
                if (document.getElementById('H').textContent.length === 0) {
                    document.getElementById('H').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('H').textContent += `, ${inputField.value}`;
                }
                break;
            case 'I':
                if (document.getElementById('I').textContent.length === 0) {
                    document.getElementById('I').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('I').textContent += `, ${inputField.value}`;
                }
                break;
            case 'J':
                if (document.getElementById('J').textContent.length === 0) {
                    document.getElementById('J').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('J').textContent += `, ${inputField.value}`;
                }
                break;
            case 'K':
                if (document.getElementById('K').textContent.length === 0) {
                    document.getElementById('K').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('K').textContent += `, ${inputField.value}`;
                }
                break;
            case 'L':
                if (document.getElementById('L').textContent.length === 0) {
                    document.getElementById('L').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('L').textContent += `, ${inputField.value}`;
                }
                break;
            case 'M':
                if (document.getElementById('M').textContent.length === 0) {
                    document.getElementById('M').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('M').textContent += `, ${inputField.value}`;
                }
                break;
            case 'N':
                if (document.getElementById('N').textContent.length === 0) {
                    document.getElementById('N').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('N').textContent += `, ${inputField.value}`;
                }
                break;
            case 'O':
                if (document.getElementById('O').textContent.length === 0) {
                    document.getElementById('O').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('O').textContent += `, ${inputField.value}`;
                }
                break;
            case 'P':
                if (document.getElementById('P').textContent.length === 0) {
                    document.getElementById('P').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('P').textContent += `, ${inputField.value}`;
                }
                break;
            case 'R':
                if (document.getElementById('R').textContent.length === 0) {
                    document.getElementById('R').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('R').textContent += `, ${inputField.value}`;
                }
                break;
            case 'S':
                if (document.getElementById('S').textContent.length === 0) {
                    document.getElementById('S').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('S').textContent += `, ${inputField.value}`;
                }
                break;
            case 'Q':
                if (document.getElementById('Q').textContent.length === 0) {
                    document.getElementById('Q').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('Q').textContent += `, ${inputField.value}`;
                }
                break;
            case 'T':
                if (document.getElementById('T').textContent.length === 0) {
                    document.getElementById('T').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('T').textContent += `, ${inputField.value}`;
                }
                break;
            case 'U':
                if (document.getElementById('U').textContent.length === 0) {
                    document.getElementById('U').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('U').textContent += `, ${inputField.value}`;
                }
                break;
            case 'V':
                if (document.getElementById('V').textContent.length === 0) {
                    document.getElementById('V').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('V').textContent += `, ${inputField.value}`;
                }
                break;
            case 'W':
                if (document.getElementById('W').textContent.length === 0) {
                    document.getElementById('W').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('W').textContent += `, ${inputField.value}`;
                }
                break;
            case 'X':
                if (document.getElementById('X').textContent.length === 0) {
                    document.getElementById('X').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('X').textContent += `, ${inputField.value}`;
                }
                break;
            case 'Y':
                if (document.getElementById('Y').textContent.length === 0) {
                    document.getElementById('Y').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('Y').textContent += `, ${inputField.value}`;
                }
                break;
            case 'Z':
                if (document.getElementById('Z').textContent.length === 0) {
                    document.getElementById('Z').textContent += `${inputField.value}`;
                }
                else {
                    document.getElementById('Z').textContent += `, ${inputField.value}`;
                }
                break;
        }
        inputField.value = ''
    })

}