const http=require('http');
const fs=require('fs')


http.createServer((req,res)=>{
    if(req.url='/'){
        fs.readFile('index.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end
        });
    }
    else if(req.url='/about'){
        fs.readFile('about.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end
        });
    }
    else if(req.url='/contact.html'){
        fs.readFile('contact.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end
        });
    }
    else{
        fs.readFile('error_404.html',(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            return res.end
        });
    }
}).listen(8080,()=>{
    console.log('Port 8080')
});