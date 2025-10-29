# Nội dung buổi học 4
1. Javascript
* Phạm vi của biến
* Advanced conditions: if... else, if... else if, switch case
* Advanced loops
* Array helper functions
* String helper functions
2. Giới thiệu Test 01

## Phạm vi của biến
Có 3 loại phạm vi:
* Toàn cục (global)
var globalVar = "Bien toan cuc";
let globalLet = "Cung la bien toan cuc";

function testFunction() {
console.log(globalVar);//Truy cập được
console.log(globalLet);//Truy cập được
}

* Function scope (hàm)
function myFunction(){
var functionScoped = "Chỉ có thể truy cập trong hàm này";
let alsoFunctionScoped = "Tương tự";
console.log(functionScoped);//OK
}

console.log(functionScoped); // Error: functionScoped is not defined

* Block scope (khối)
if (true) {
  var varVariable = "var không có block scope";
  let letVariable = "let có block scope";
  const constVariable = "const cũng có block scope";
}
console.log(varVariable); // OK - var không bị giới hạn bởi block
console.log(letVariable); // Error: letVariable is not defined
console.log(constVariable); // Error: constVariable is not defined

* Hosting: Javscripts di chuyển khai báo biến lên đầu phạm vi trước khi thực thi code
console.log(x); // undefined (không phải error)
var x = 5;
// Tương đương với:
var x;
console.log(x); // undefined
x = 5;
// Với let và const:
console.log(y); // Error: Cannot access 'y' before initialization
let y = 5;


## Câu điều kiện nâng cao
*break: thoát hoàn toàn khỏi vòng lặp ngay lập tức
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Thoát vòng lặp khi i = 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Ví dụ thực tế: Tìm phần tử đầu tiên
const numbers = [1, 3, 8, 7, 9, 11];
let firstEven = null;
for (let num of numbers) {
  if (num % 2 === 0) {
    firstEven = num;
    break; // Dừng ngay khi tìm thấy
  }
}

* continue: bỏ qua phần còn lại của vòng lặp, chuyển sang lần lặp tiếp theo
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Bỏ qua số chẵn
  }
  console.log(i);
}
// Output: 1, 3, 5, 7, 9

**Câu điều kiện if...else:** Thực thi code khác nhau cho trường hợp true/false
**Câu điều kiện if...else if:** Kiểm tra nhiều điều kiện theo thứ tự
**Ternary operator:** Cách viết ngắn gọn cho if...else đơn giản
let age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"
// Có thể lồng nhau (nên cẩn thận với độ phức tạp)
let score = 75;
let grade = score >= 90 ? "A" :
      score >= 80 ? "B" :
      score >= 70 ? "C" :
      score >= 60 ? "D" : "F";


## Vòng lặp nâng cao
**for...in Loop**
Duyệt qua các thuộc tính đếm được của object, gồm thuộc tính kế thừa
// Với Object
const person = {
  name: "John",
  age: 30,
  city: "Hanoi"
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: 

**forEach method**
Thực thi một function cho mỗi phần tử. Không thể dùng break/continue

## Utils function
### String utils
* trim(): cắt khoảng trắng 2 đầu
- trimLeft(): cắt bên trái
- trimRight(): cắt bên phải
* toLowerCase(): chuyển chuỗi thành chữ thường
* toUpperCase(): chuyển chuỗi thành chữ hoa
* includes(<subtrings>): kiểm tra chuỗi bao gồm chuỗi con <subtring> không
* replace(<chuỗi cần thay>,<chuỗi mới>)
* split(<tách bởi gì>)
* substring(<điểm bắt đầu>,<điểm kết thúc>)
* indexOf(<chuỗi kí tự>): tìm vị trí của chuỗi con

### Array utils
* map(): Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử 
của mảng gốc. Trả về mảng mới có cùng độ dài
* filter(): Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện 
trong hàm callback. Trả về mảng đã được lọc
* find(): Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều 
kiện. Trả về undefined nếu không tìm thấy
*reduce(): Duyệt qua mảng và tích lũy các phần tử thành một giá trị 
duy nhất (số, chuỗi, object...) dựa trên hàm callback
* some(): Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn 
điều kiện hay không. Trả về true/false.
* every(): Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều 
kiện hay không. Trả về true/false.
* sort(): Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là 
alphabet/tăng dần). Thay đổi mảng gốc.
* push(): Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng 
gốc và trả về độ dài mới.
* pop(): Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc 
và làm giảm độ dài.
* shift(): Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc 
và làm giảm độ dài.
* unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi 
mảng gốc và trả về độ dài mới của mảng.