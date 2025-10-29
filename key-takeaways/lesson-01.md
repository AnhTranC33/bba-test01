# Nội dung buổi học 1
1. Giới thiệu general
2. Công cụ hỗ trợ
3. Cài đạt VS Code, kết nối Github
4. Tìm hiểu: Playwright, so sánh công cụ khác
5. Cài đặt, chạy test Playwright

## Giới thiệu general
....

## Công cụ hỗ trợ
### Công cụ giao tiếp
- Google classroom
- Zoom
- Messenger

### Công cụ coding
- git
- github
- VS Code

### Playwright
- Là 1 framework
- Tiền thân: Puppeteer
- [Playwright home page:] (https://playwright.dev/) 
- Ra đời: 31/01/2020
- Version mới nhất: v1.56

Ưu điểm:
- Cross browser
 * Hỗ trợ: Chrome, Edge, Firefox, Safari
 * Hỗ trợ: 143 phiên bản trình duyệt
- Cross platform
 * Code một lần, chạy trên: Windows, Linux, MacOS
- Tính năng nổi trội: auto waiting, auto-retry, giảm flaky test
- Report đầy đủ thông tin
 * Pass/fail theo từng loại trình duyệt
 * Chi tiết ở từng thời điểm: "gọi API nào", "response trả về gì", "ứng với dòng code nào"
- Code gen
 * Thao tác để sinh code

### Giải thích các công cũ đã cài
- NVM = Node Version Manager = quản lý các phiên bản NodeJs
- NodeJs = Công cụ chạy code
2 options:
* Cài trực tiếp NodeJs vào máy
* Cài thông qua NVM
Chọn thông qua NVM: Dễ chuyển đổi nhiều phiên bản NodeJs

### Git & Github
**Git:** quản lý source code
**Github:** chia sẻ code, làm việc nhóm

### Cấu hình Git
* Config username:
 - git config --global user.name "<ten_ban>"
* Config email:
 - git config --global user.email "<email cua ban>"
* Config branch default:
 - git config --global init.defaultBranch main

### Cài đặt tools
#### Cài đặt VS Code
* VS Code = IDE = integrated developoment environment
 - Là công cụ viết code
[* Cài đặt VS Code](https://code.visualstudio.com/)
Đổi terminal mặc định
* Windows Powershell: terminal mặc định trên Windows
* Powerhsell hay bị chặn/lỗi vặt
* => dùng Git Bash tránh lỗi này
- Ctrl + Shift + P: Hiển thị hộp thoại
- Tìm kiếm: Terminal default
- Chọn: Terminal: Select Default Profile
- Chọn: Git Bash
- Kiểm tra lại

### Kết nối với Github
1.Tạo SSH Key
* Cặp khóa (2 cái)
 - id_rsa & id_rsa.pub
 - id_rsa: giữ bí mật
 - id_rsa.pub: có thể gửi người khác
* Lưu ở: ~/.ssh
* "~" đại diện thư mục Home
* Home ở Windows: C:\Users\{username}
* Home ở Linux: /Users/{username}
Lệnh tạo SSH keys:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
2.Thêm SSH Key vào Github
* Lấy nội dung ssh key: cat !/.ssh/id_rsa.pub
* Truy cập: [Link](https://github.com/settings/ssh/new) để thêm ssh key

#### Cài đặt Playwright
Chạy test đầu
##### Trước khi khởi tạo
Tạo thư mục chứa code
* Tạo thư mục: demo-1
* Mở thư mục bằng VS Code
* Mở terminal
* Chạy lệnh: 
 - npm init playwright@latest
 - Liên tục gõ enter đến khi hiển thị: Happy Hacking!

### Hiểu Playwright code
* Code dễ hiểu
* Tương tự lời thoại

### Đưa code lên Gihub
git push origin main
#### Tạo repo
- Khởi tạo repo local: git init
- Tạo repo github và liên kết với repo local: git remote add origin <url>
- Thêm file vào staging: git add .
- Commit file: git commit - m "<message>"
- Push code: git push origin main
* Tạo repo
 - Truy cập: [Link](https://github.com/new)
 - Điển tên repository
 - Chọn "Public"
* Khởi tạo
#### Github: Invite collaborators
* Invite mentor chấm bài
* Truy cập repo setings: https://github.com/<username>/<repo_name>/settings/access
* Add collaborator

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