let x,y,z,t;
let result1,result2,result3,result4;
// Sử dụng hàm Math.abs():Trị tuyệt đối
// truyền giá trị -5,5 
// truyền giá trị 10 
x=prompt('Nhap vao gia tri:');
result1=Math.abs(x);
console.log(result1);
// Sử dụng hàm Math.ceil():Làm tròn lên
// truyền giá trị 4.4 
// truyền giá trị 5.8
y=prompt('Nhap vao gia tri:');
result2=Math.ceil(y);
console.log(result2);
// Sử dụng hàm Math.floor():Làm tròn xuống
// truyền giá trị 5.7 
// truyền giá trị 6.1 
z=prompt('Nhap vao gia tri:');
result3=Math.floor(z);
console.log(result3);
// Sử dụng hàm Math.round():Làm tròn lên nếu lớn hơn 0,5 và Làm tròn xuống nếu nhỏ hơn 0,5
// truyền giá trị 10.1 
// truyền giá trị 20.6 
t=prompt('Nhap vao gia tri:');
result4=Math.ceil(t);
console.log(result4);