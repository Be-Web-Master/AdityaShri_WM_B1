import './App.css';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useState } from 'react';
function App() {
  const [texttospeech, setTexttospeech] = useState()
  const [isCopied, setCopied] = useClipboard(texttospeech,{
    successDuration:1000
  });
  const speech=()=>{SpeechRecognition.startListening({ continuous: true ,language : "en-IN"})}
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (

    <div className="App">
      <h2>Speech to text</h2>
      <p className='pera'>A React hook that converts speech from the microphone to text and makes it available to your React
      components.</p>
      <box className='container' onClick={()=>setTexttospeech(transcript)}>{transcript}</box>
      <div className='btn'>
      <button className='bt' onClick={setCopied}>
         {isCopied ? "Copied" : "copy"}
      </button>
        <button className='bt' onClick={speech}>start</button>
        <button className='bt' onClick={SpeechRecognition.stopListening}>Stop</button> 
      </div>
    </div>
  );
}

export default App;
