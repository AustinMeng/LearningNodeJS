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
});

// p.then((value) => {
//   console.log("------------Then run------------");
//   console.log(`value=${value}`);
// });

function fn1(str) {
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

tmp = fn1("你好，anni");
tmp
  .then((data) => {
    //data = '你好，anni'
    console.log("---------------------------");
    console.log(data); //data = "你好，tony"
    return fn1("你好，tony");
  })
  .then((data) => {
    console.log(data); //data = '你好，linda'
    return fn1("你好，linda");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function test() {
  try {
    let s1 = await fn1("你好，anni");
    let s2 = await fn1("你好，tony");
    let s3 = await fn1("你好，linda");
    console.log("----------------------------");
    console.log(s1, s2, s3);
  } catch (error) {
    console.log(error);
  }
}

console.log("---------start-----------");
test(); //到这里tmp和test异步请求都已经被发出

/**
 * Output:
---------start-----------
Promise run
------------Then run------------
value=1
---------------------------
你好，anni
你好，tony
你好，linda
----------------------------
你好，anni 你好，tony 你好，linda
 */
