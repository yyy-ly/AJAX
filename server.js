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

//jQuery 服务
app.all('/jquery-server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');
	// response.send('Hello jQuery AJAX');
	//json 数据
	const data = {name: 'yyy'};
	response.send(JSON.stringify(data));
}) ;

//axios 服务
app.all('/axios-server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');
	// response.send('Hello jQuery AJAX');
	//json 数据
	const data = {name: 'yyy'};
	response.send(JSON.stringify(data));
}) ;

//fetch 服务
app.all('/fetch-server',(request,response) => {
	//设置响应头  设置允许跨域
	response.setHeader('Access-Control-Allow-Origin','*');
	//响应头
	response.setHeader('Access-Control-Allow-Headers','*');
	// response.send('Hello jQuery AJAX');
	//json 数据
	const data = {name: 'yyy'};
	response.send(JSON.stringify(data));
}) ;

//JSONP 服务
app.get('/jsonp-server',(request,response) => {
	// response.send('console.log("hello jsonp")');
	const data = {
		name: 'yyylalla'
	};
	//将数据转化为字符串
	let str = JSON.stringify(data);
	//返回结果
	response.end(`handle(${str})`);
})

//用户名检测是否存在
app.all('/check-username',(request,response) => {
	const data = {
		exist: 1,
		msg: '用户名已经存在'
	};
	//将数据转化为字符串
	let str = JSON.stringify(data);
	//返回结果
	response.end(`handle(${str})`)

})

//jquery-jsonp
app.all('/jquery-jsonp-server',(request,response) => {
	const data = {
		name: 'yyy',
		city: ['北京','西安','上海']
	};
	//将数据转化为字符串
	let str = JSON.stringify(data);
	//接收callback参数
	let cd = request.query.callback;
	//返回结果
	response.end(`${cd}(${str})`)

})


//4.监听端口启动服务
app.listen(8000,() => {
	console.log("服务器已经启动，8000端口监听中...");
})