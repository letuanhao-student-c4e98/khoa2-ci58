const string = prompt("Nhap vao chuoi cua ban");
function chuoiDoiXung (string) {
    const inputLength = string.length;
    for (let i = 0; i <  inputLength/2; i++){
        if (string[i] !== string[inputLength - 1  - i]) {
            return false;
        } 
    }return true;
        
    
}

const value = chuoiDoiXung(string);
console.log(value);
