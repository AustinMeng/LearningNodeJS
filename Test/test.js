function fn(str) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise run");
      resolve(str);
    }, 3000);
  });
  return p;
}

let tmp = fn(1);

tmp.then((value) => {
  console.log("------------Then run------------");
  console.log(`value=${value}`);
  console.log("------------Then run------------");
});

function fn(str) {
  //str = '你好，anni'
  let p = new Promise(function (resolve, reject) {
    let flag = true;
    setTimeout(function () {
      //模拟异步调用
      if (flag) {
        resolve(str);
      } else {
        //resolve('你好，anni')
        reject("操作失败");
      }
    }, 3000);
  });
  return p;
}

tmp = fn("你好，anni");
tmp
  .then((data) => {
    //data = '你好，anni'
    console.log(data); //data = "你好，tony"
    return fn("你好，tony");
  })
  .then((data) => {
    console.log(data); //data = '你好，linda'
    return fn("你好，linda");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function test() {
  try {
    let s1 = await fn("你好，anni");
    let s2 = await fn("你好，tony");
    let s3 = await fn("你好，linda");
    console.log(s1, s2, s3);
  } catch (error) {
    console.log(error);
  }
}

test();
