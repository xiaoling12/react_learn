import './App.css';

// 常规变量
const name = '小灵'
const fruits = [
  { id: 1, name: '菠萝' },
  { id: 2, name: '芒果' },
  { id: 3, name: '草莓' }
]

// 原生方法调用
const getAge = ()=>{
  return 18
}

// 三元运算符 
const flag = true

// react中完成列表渲染

//条件渲染：三元表达式，对于满足条件的进行渲染

function App() {
  return (
    <div>
      <div className="App">
        { flag ? (
          <span>
            This is a hide span
          </span>): null}

          { true && <span>This is another one</span>}
      </div>
    </div>
  );
}

export default App; 
