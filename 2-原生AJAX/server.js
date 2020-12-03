//1.引入express
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装

//GET请求
app.get('/server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');

	//设置响应体
	response.send("HELLO AJAX");

});

//POST请求
app.post('/server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');

	//设置响应体
	response.send("HELLO AJAX POST");

});

//.all 可以接受任意类型的请求
app.all('/server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');

	//设置响应体
	response.send("HELLO AJAX POST");

});

//JSON响应
//.all 可以接受任意类型的请求
app.all('/json-server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');
	//响应一个数据
	const data = {
		name: 'yyy'
	}
	//对象进行字符串转换
	let str = JSON.stringify(data)
	//设置响应体
	response.send(str);

});

//IE缓存
app.get('/ie',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');

	//设置响应体
	response.send("HELLO IE");

});

//延时响应
app.get('/delay',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
  setTimeout(() => {
		//设置响应体
		response.send("延时响应");
	},3000)
});


//4.监听端口启动服务
app.listen(8000,() => {
	console.log("服务器已经启动，8000端口监听中...");
})