import './App.css'
import PDFView from "./PDFView.jsx";
import Info from "./Info.jsx";

function App() {

  return (
    <div className={'home'}>
        <PDFView className={'pdf'}/>
        <Info className={'info'}/>
    </div>
  )
}

export default App
