const path = require('path');


console.log(__filename);

// base filename 파일명
console.log(path.basename(__filename));

// Directory name 파일경로
console.log(path.dirname(__filename));

// file extension 확장자
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));
// Create path object base filename 해당 경로의 파일 정보에서의 파일명
console.log(path.parse(__filename).base);

// Concatenate Paths 파일 경로 새로 생성(실제 물리 파일 생기지 않음)
// ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
