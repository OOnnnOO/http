var express=require('express');
var path=require('path')
var config=require('config-lite');

var app = express();

app.get('/',function(req,res){
  res.send('get a get request');
});

app.post('/',function(req,res){
  res.send('get a POST request');
});

app.put('/',function(req,res){
  res.send('get a put request');
});
app.delete('/',function(req,res){
  res.send('get a delete request');
});
// 返回204 No Content
app.get('/204',function(req,res){
  res.status(204).end();
});

// catch 404 and forword to error handler
app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err,req,res,next){
  console.error(err.stack);
  res.status(500).end();
});

app.listen(config.port,config.hostname,function(){
console.log('server is listening on port '+ config.port)
})
