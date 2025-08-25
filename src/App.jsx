import './App.css'
import Cards from './Components/Cards'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Button from './Components/Button'
import Reusable from './Components/Reusable'

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

              <Reusable title = "First Card" description="This is my First Card"/>
              <Reusable title =" Second Card" description ="This is my Second Card Containing a Footer" footer ="A new Property is added"/>

      </div>
      
  )
}

export default App
