// server.js

var express = require('express');
var app = express();
var http = require('http').Server(app); //1
var io = require('socket.io')(http);    //1


app.use(express.static('public'));
app.use(express.static('files'));

app.get('/',function(req, res){  //2
  //jacascript 파일의 현재 경로에 클라이언트
  res.sendFile(__dirname + '/client.html');
});


// 유저 idf로 이름 설정하기
io.on('connection', function(socket){ //3
  console.log('user connected: ', socket.id);  //3-1
  var name = `${socket.id}`                 //3-1
  io.to(socket.id).emit('change name',name);   //3-1

  socket.on('disconnect', function(){ //3-2
    console.log('user disconnected: ', socket.id);
  });

  socket.on('send message', function(name,text){ //3-3
    var msg = name + ' : ' + text;
    console.log(msg);
    io.emit('receive message', msg);
  });
});

http.listen(8000, function(){ //4
  console.log('server on!');
});