// 写一个函数，间隔几秒执行
function repeat(func, times, wait) {
  return function(params) {
    func(params);
    let current = 1;
    const b = function() {
      setTimeout(() => {
        if (current < times) {
          func(params);
          ++current;
          b();
        }
      }, wait);
    }
    b();
  }
}

// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hello world");    //会输出4次 hello world, 每次间隔3秒

// 

function MyComponent() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, [])
  }, [])

  console.log('count', count)
}

// 上面的执行结果是什么样的？如何改一下这个问题？

// 写一个函数，遍历对象的同时，对对象的每一项执行函数

