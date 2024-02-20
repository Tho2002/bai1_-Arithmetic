// // // //Hàm built in
// // // // confirm("ok");
// // // // alert("ok");
// // // //prompt()
// // // // console.log();
// // // // setTimeout(function test() {
// // // //   console.log("ok");
// // // // }, 5000); //chaỵ 1 lần
// // // // setInterval(function tes() {
// // // //   console.log("5 giây chạy 1 lần");
// // // // }, 5000);

// // // // typeOf//xác định kiểu dữ liệu
// // // // Làm việc với string
// // // // var fullname = "Luu duc tho";
// // // // console.log(fullname.length);//đếm ký tự
// // // // indexOf(); //Tìm vị trí đầu tiên của 1 chuỗi nằm trong 1 chuỗi
// // // // lastINdexOf(); //Tìm vị trí cuôi
// // // // var myString = "Xin chào ! Tôi tên là Lưu Đức Thọ.Tôi năm nay 23 tuôi";
// // // // // console.log(myString.slice(10, 20)); //cắt một chuỗi và trả về chuỗi mới
// // // // // console.log(myString.replace("Xin", "Helo")); //thay thế một chuỗi thành 1 chuỗi mới
// // // // // console.log(myString.replace(/Tôi/g, "Helo")); //thay thế 1 chuỗi thành tất cả chuỗi trùng với nó
// // // // console.log(myString.toUpperCase()); //viết hoa tất cả các chữ cái
// // // // console.log(myString.toLowerCase()); // viết thường tât cả các chữ cái
// // // // charAt(); //lấy ký tự thông qua index
// // // // split(); // chuyển một chuỗi thành 1 array
// // // var code = "HTML,JAVASCRIPT,CSS";
// // // console.log(code.split()); // chuển thành arr
// // // console.log(code.split("")); //từng chữ cái thành từng phần tử trong mảng
// // // // console.log(code.split(",")); // mỗi từ là 1 phần tử

// // //LÀm việc với number
// // // isNaN; //
// // // // Chuyển số thành String
// // // var a = 10;
// // // var b = a.toString();
// // // var c = (10).toString();
// // // console.log(a); //number
// // // console.log(typeof a);
// // // console.log(b); //string
// // // console.log(typeof b);
// // // console.log(c); //string
// // // console.log(typeof c);

// // //toFixed //làm tròn số thập phân

// // //Làm việc với Mảng

// // var list = ["HTML", "JAVASCRIPT", "CSS"];
// // // console.log(list.toString()); // chuyển Mnagr về String
// // // console.log(list.join(";")); //thêm dấu bất kì để ngăn cách giữ các phần tử
// // // console.log(list.pop()); //Xóa phần tử cuối mảng và trsả về phần tử cuối mảng
// // // console.log(list.push("Code")); //Trả về độ dài của mảng là 3
// // // console.log(list.shift()); //xóa phần tử đầu mảngvà trả về phần tử đầu mảng
// // // console.log(list.unshift("Đầu")); //Thêm 1 hoặc nhiều phần tử vào đầu mảng
// // // console.log(list.splice(3, 0, "tho")); // chèn phần tử và mảng và trả về mảng bị xóa
// // // console.log(list);
// // // console.log(list.splice(0, 1));//xóa phần tử
// // // console.log(list);
// // // console.log(list.splice(1, 1, "thêm"));// vừa xóa vừa thêm
// // // console.log(list);

// // //Nối 2 mảng với nhau
// // var a = [1, 2, 3, 4];
// // var b = [5, 6, 7, 8, 9];
// // console.log(a.concat(b));
// //slice()//dùng để cắt các phần tử
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a.slice(3)); //trả về mảng [4,5,6,7,8,9]
// console.log(a.slice(1, 3)); //trả về [2,3] lấy từ số 1 đến 2 ko được lấy tứ3
// console.log(a.slice(-3, -1));trả về [7,8]// lấy từ vị trí số -3
