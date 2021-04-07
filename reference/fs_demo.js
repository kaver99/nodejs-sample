const fs = require('fs');
const path = require('path');


// Create folder 폴더 생성
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//   if(err) throw err;
//   console.log('Folder Created.');
// });

// Create nad write to file 파일 생성 및 쓰기 (연속 사용시 내용 덮어쓰기됨 file overwrite)
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
//   if(err) throw err;
//   console.log('File written to.');
// });

// 연속 사용시 내용 덮어쓰기됨 file overwrite
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), ' Node.js Good.', (err) => {
//   if(err) throw err;
//   console.log('File written to.');
// });

// File write and append 파일 생성 및 내용 추가
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', (err) => {
//   if(err) throw err;
//   console.log('File written to.');

//   // File append 파일 내용 추가
//   fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' Node.js Good.', (err) => {
//     if(err) throw err;
//     console.log('File written to.');
//   });
// });

// Read File
// fs.readFile(path.join( __dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data);
// });

// Rename File
fs.rename(path.join( __dirname, '/test', 'hello.txt'), path.join( __dirname, '/test', 'helloworld.txt'), (err) => {
  if(err) throw err;
  console.log('File Renamed.');
});