var http=require('http');
var url=require('url');
var fs=require('fs');
//创建服务器
var server=http.createServer();
//绑定监听端口
server.listen(9999);
//绑定监听事件请求
server.on("request",(req,res)=>{
    var obj=url.parse(req.url,true)
    // console.log(req.url,ture);
    // console.log(obj);
    if(obj.pathname=="/" || obj.pathname=="/index"){
        fs.readFile("./html/index.html",(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname=="/index.html"){
        fs.readFile("./html/index.html",(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname=="/news.html" ||obj.pathname=="/news" ){
        fs.readFile("./html/news.html",(err,buf)=>{
            res.end(buf);
        })
    }else if(obj.pathname.split(".")[1]=="jpg" || obj.pathname.split(".")[1]=="png"){
        fs.readFile(".//"+obj.pathname.split(".")[0]+"."+obj.pathname.split(".")[1],(err,buf)=>{
            res.end(buf)
        })
    }else if(obj.pathname.split(".")[1]=="css"){
        fs.readFile(".//"+obj.pathname.split(".")[0]+"."+obj.pathname.split(".")[1],(err,buf)=>{
            res.end(buf)
            // console.log(obj.pathname.split("."));
        })
        // fs.readFile("./news/"+obj.pathname.split(".")[0]+"."+obj.pathname.split(".")[1],(err,buf)=>{
        //     res.end(buf)
        // })
    }
})