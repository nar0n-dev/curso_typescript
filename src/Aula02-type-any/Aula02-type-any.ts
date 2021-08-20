// Utilize any apenas em ultimo caso #FugaDoAny
function showMessagem(msg: any) {
  return msg;
}

console.log(showMessagem([1, 2, 3]));
console.log(showMessagem('Hello World'));
console.log(showMessagem(1));
