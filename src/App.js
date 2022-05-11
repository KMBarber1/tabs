// import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';

function App() {

    const Tabs = [
        {name:"Tab 1", content:"This is Tab 1"},
        {name:"Tab 2", content:"This is Tab 2"},
        {name:"Tab 3", content:"This is Tab 3"}
    ];


  return (
    <div className="App">
      
      <Tab Tabs={Tabs}/>
 
    </div>
  );
}

export default App;
