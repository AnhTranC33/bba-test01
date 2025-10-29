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

### Git & GitHub
- Git: phần mềm vs GitHub: Dịch vụ web
- Git: cài trên máy vs GitHub: Host trên website
- Git: command line tool vs GitHub: Công cụ có giao diện
- Git: công cụ quản lý phiên bản, đưa file -> Git repository vs GitHub: nơi để upload Git repository
- Git: có các tính năng của VCS vs GitHub: Có các tính năng khác của VCS & một số tính năng: GitHub Actions, GitHub Co-Pilot...

### Git - three states
Working Directory - Staging Area - Repository
- Working Directory: file mới/file có thay đổi
- Staging Area: Các file đưa vào vùng chuẩn bị commit
- Repository: Các commit (phiên bản)
* Command init: *git init*
* Commands add:
*git add <filename>*
*git add .*
* Command commit:
*commit -m "message"

### Git - Cấu hình
1. Trường hợp 1 repo
*git config --global user.name*
*git config --global user.email*
2. Trường hợp mỗi repo tên khác
Set username, email riêng từng repo (đứng tại terminal của repo đó)

### Git - Một số câu lệnh
- Xem trạng thái file
*git status*
* File xanh: staging
* File đỏ: working directory
- Kiểm tra danh sách commit:
*git log*

### Git - commit convention
- Convention: <type>: <short_description>
3 types when commit:
chore/feat/fix

### Git - simple workflow
1. Không dùng Global config:
init->config->add->commit->push
2. Dùng global config:
init->add->commit->push

## JavaScript basic
- JavaScript: ngôn ngữ lập trình
- Giúp browser hoạt động
- Chạy được do browers engine support
Notes: chạy trên máy tính, không có browser engine -> NodesJS

### JavaScript - Hello World!
- Syntax:
*console.log("content");*
*console.log('content');*

#### JavaSCript - Comment
//ExampleComment
/*ExampleComment2*/
- Biến: var/let/const

### JavaScript - Data Type
- Primitive types
- Reference types
* Number: só
* String: chuỗi
* Boolean: logic
- Kiểm tra kiểu dữ liệu: *typeof<variable>*

### JavaScript - Toán tử so sánh
- So sánh bằng
== & ===
- So sánh không bằng
!
- So sánh lớn hơn, nhỏ hơn
">, <, <=, >="

### JavaScript - Toán tử logic
*&&*
*||*

### JavaScript - Toán tử một ngôi
x++;
++x;
x--;
--x;
Prefix: toán tử nằm trước: tăng trước, trả về sau
Postfix: toán tử nằm sau: trả về trước, tăng sau

### JavaScript - Toán tử toán học
+, -, *, /

### JavaScript - Câu điều kiện
- Các loại câu điều kiện:
*if*
*if...else*
*if...else if...else*
*switch...case*

### JavaScript - Vòng lặp
- Các loại vòng lặp:
*for (i)*
*for (of)*
*for (each)*
*for (in)*
*while*
*do...while*
- Syntax:
1. for (i):
for (<điều kiện khởi tạo;<điều kiện lặp>;<cập nhật>){
    //code
}

### VS Code
- Format code: Alt + Shift + F