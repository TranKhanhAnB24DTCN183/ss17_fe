alert('Tinh phuong trinh bac hai')
let a=+prompt('Nhap gia tri cua a:');
console.log(a);
let b=+prompt('Nhap gia tri cua b:');
console.log(b);
let c=+prompt('Nhap gia tri cua c:');
console.log(b);
let denta;
let x1,x2;
if(a!=0){
   denta=(b**2)-(4*a*c);
   console.log(denta);
}else{
   console.log('Khong the tinh toan');
}
if(denta>0){
    x1=(-b+Math.sqrt(denta))/(a*2);
    x2=(-b-Math.sqrt(denta))/(a*2);
    console.log(x1,x2);
}
