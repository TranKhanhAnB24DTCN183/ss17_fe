let date=+prompt('Nhap vao ngay ban muon:');
let month=+prompt('Nhap vao thang ban muon:');
let year=+prompt('Nhap vao nam ban muon:');

const myDate= new Date(year,month-1,date);
myDate.setDate(myDate.getDate() + 2);
console.log(myDate.toLocaleDateString("vi-VN"));
