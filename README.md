
Page View:
![5ebf37cb-f112-4578-af7c-1c520a3806f2](https://github.com/user-attachments/assets/8270ac41-6a5d-4066-8807-165b6b50d23f)

See The Code:
// Author: Md Humayan Kabir
// Works: Create Components

import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Player></Player>
        <Person name="Shakib Al Hasan" playRole="Allrounder" age="38" val="100K"></Person>
        <Person name="Mahmudullah Riad" playRole="Allrounder" age="38" val="100K"></Person>
        <Person name="Mehidy Hasan Miraz" playRole="Allrounder" age="26" val="100K"></Person>
        <Person name="Mushfiqur Rahim" playRole="Wicket-Keeper " age="37" val="100K"></Person>
        <Person name="Mustafizur Rahman" playRole="Bowler" age="29" val="100K"></Person>
        <Person name="Taskin Ahmed" playRole="Bowler" age="29" val="100K"></Person>
        
      </header>
    </div>
  );
}
function Person(props){
  const personStyle={
    border: '3px solid red',
    margin: '1%',
    padding: '1%',
    width: '27%',
    height:'170px',
    float: 'left',
    textAlign:'center',
  };

  const btn={
    backgroundColor: 'pink',
    border:'none',
    padding:'5px 10px',
    cursor:'pointer',
    borderRadius: '3px',
    width:'70px'
  }

  return <div style={personStyle}>
    <h2>{props.name}</h2>
    <p>{props.playRole}</p>
    <p>Age: {props.age}</p>
    <button style={btn}>{props.val}</button>
  </div>
}

const player={
  textAlign:'center',
  backgroundColor: 'pink',
  width:'400px',
  alignItems:'center',
  margin:'0 auto',
  marginTop:'25px',
  marginBottom:'25px',
  padding:'5px 15px',
}
function Player(){
  return <h1 style={player}>Player List of Bangladesh</h1>
}
export default App;


