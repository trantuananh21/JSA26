var users = [
    {name01:  "Phước", job: "Student",},
    {name02: "Tuấn Anh", job: "Software Engineer",},
    {name03: "Linh", job: "Doctor",},
    {name04: "Phong", job: "Actor",},
    {name05: "Hùng Anh", job: "Journalist",},
]
localStorage.setItem("users", JSON.stringify(users));
var usersInLS = JSON.parse(localStorage.getItem("users"));
console.log(usersInLS);

localStorage.setItem('name01', 'Hà');
localStorage.removeItem(users[0]);
localStorage.clear(users);


// setTimeout
// hành động
// var action = setTimeout(function(){
//     // something
// }, 3000);
 
// // hủy hành động
// clearTimeout(action);

var lyrics = setTimeout(function(){
    document.write("Là bởi vì có em,");
}, 0);

var lyrics = setTimeout(function(){
    document.write("mây thay màu <br>");
}, 2000);

var lyrics = setTimeout(function() {
    document.write("Đẹp tựa bao giấc mơ chôn sâu anh từng giấu <br>");
}, 5000);

var lyrics = setTimeout(function() {
    document.write("Bởi vì là chính em mang u sầu <br>");
}, 10000);

var lyrics = setTimeout(function() {
    document.write("Gửi vào làn gió bay xa để khung trời anh giữ sẽ có thêm màu xanh <br>");
}, 14000);


// setInterval
// var interval_obj = setInterval(function(){
//     document.write("Vì anh đâu có biết");
//     // clearInterval(interval_obj);
// }, 3000);