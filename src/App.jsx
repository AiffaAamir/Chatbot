import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question, setQuestion] = useState("");

async function generateAnswer(){
    console.log("loading....")
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC3i-v8jo6U4QIMY52ZSoiaTrzXUui_qXI",
      method:"post",
      data: {"contents":[{"parts": [ {"text": question }]}]}
    })
    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
}

  return (
    <>
      <h1>Chat AI</h1>
      <textarea 
      value={question}
      onChange={(e)=>setQuestion(e.target.value)}
      ></textarea>
      <button onClick={generateAnswer}>generate</button>
    </>
  )
}

export default App
