import axios from "axios"
import React, {useState} from "react";
import './App.css';

function App() {
  var [sent, setSent] = useState(false)
  var [text, setText] = useState("")
  var [subject, setSubject] = useState("")

  const handleSend = async() => {
    
    try{
      await axios.post('http://localhost:3001/send_mail', {
        text,
        subject
      })
      setSent(true)
    } catch (error) {
      console.log(error)
    }
  }

return (
  <div className="App">
    {!sent ? (
      <form onSubmit={handleSend}>

        
        <input type="text" placeholder="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />

        <input type="text" placeholder="text" value={text} onChange={(event) => setText(event.target.value)} />

        <button type="submit">Send Email</button>
      </form>
    ) : (
      <h1>Email Sent</h1>
    )}
  </div>
)
}
export default App;
