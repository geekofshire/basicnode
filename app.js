const express=require('express');
const app=express();
const fs=require('fs/promises');

const port=8080;

app.get(('/'||'/index.html'),async (req,res)=>{
    res.send(await fs.readFile('./index.html','utf-8'));
});


app.get('/about.html', async (req,res)=>{
    res.send(await fs.readFile('./about.html','utf-8'));
});

app.get('/contact.html', async (req,res)=>{
    res.send(await fs.readFile('./contact.html','utf-8'));
});

// app.use(async (res,req)=>{
//     res.statusCode(404).send(await fs.readFile('/error_404.html','utf8'))
// });

app.listen(port,()=>{
    console.log("Listening on 8080......")
});
