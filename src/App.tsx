import { Button } from 'antd'
// import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import './App.less';

function App() {
  // console.log(`toggleTheme`, toggleTheme)
  // const toggleTheme = (scopeName = "theme-default") => {
  //   document.documentElement.className = scopeName;
  // };

  return (
    <div className="App">
      <Button type='primary'>这是一个按钮</Button>
      {/* <div onClick={() => toggleTheme('theme-light')}>xxxxx切换</div> */}
    </div>
  );
}

export default App;
