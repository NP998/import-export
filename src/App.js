import logo from './logo.svg';
import './App.css';
import SubmitButton from './components/SubmitButton';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import InputQuery from './components/InputQuery';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div >
      {/* <Route render={(props)=><Heading/>}/>
      <SubHeading render={(props)=><SubHeading/>}/>
      <InputQuery render={(props)=><InputQuery/>}/>
      <SubmitButton render={(props)=><SubmitButton/>}/> */}
      <Heading/>
      <SubHeading/>
      <InputQuery/>
      <SubmitButton/>
    </div>
  );
}

export default App;
