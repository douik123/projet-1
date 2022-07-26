import logo from './logo.svg';
import './style.css';
import mywonderfullimage from "./myImage.png"
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px', maxWidth:'100vm'}}>
    <h1 classame="title red">your name here </h1><br/>
    <img src={mywonderfullimage} />
    <br/>
      <img src="/imageInPublic.png" />
    </div>   
    </div>
  );
}

export default App;
