let P =+prompt('Nhap vao so tien ban muon gui');  
let r = 4.3 / 100; 
let month =+prompt('Nhap vao so thang ban muon gui');  
let t=month/12;
console.log('So tien gui : '+P);
console.log('So thang gui : '+month);

let A = P * (1 + r * t);
console.log('So tien gui va them tien lai : '+A);
