import './App.css'
import PDFView from "./PDFView.jsx";
import Info from "./Info.jsx";

function App() {

  return (
      <>
      <div className={'home'}>
          <div className={'pdf'} ><PDFView /></div>
          <div className={'info'}> <Info /> </div>

      </div>
      <div className={'container-mobile'}>
          <div className={'info'}> <Info /> </div>
          <div className={'pdf'} ><PDFView /></div>
      </div>
      </>
  )
}

export default App
