const http=require('http');
const fs=require('fs')
const url=require('url');

const page404=fs.readFileSync("error_404.html",(err,data)=>{
    if(err) throw err;
    return data;
})
http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('index.html',(err,data)=>{
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(page404);
                return res.end();
              }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url==='/about'){
        fs.readFile('about.html',(err,data)=>{
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(page404);
                return res.end();
              }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url==='/contact'){
        fs.readFile('contact.html',(err,data)=>{
            if (err) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(page404);
                return res.end();
              }
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
}).listen(8080);