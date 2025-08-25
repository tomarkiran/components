import './App.css'
import Cards from './Components/Cards'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Button from './Components/Button'

function App() {
  

  return (
    
      <div>
        <Cards name="Kiran" />

        <Message text = "Hello There!" />
        <Message text = "This is reusable" />

        <Counter/>

        <Button label="Login" onClick={() => alert("Loggin in...")}/>
          <Button label="Logout" style={{backgroundColor:"red", color: "white"}} onClick={() => alert("Logged out")}/>
            <Button label="Signup" onClick={()=> alert("Signing up...")}/>

      </div>
      
  )
}

export default App
