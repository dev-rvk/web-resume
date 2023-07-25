import './PDFView.css'

const pdfUrl = 'https://web-resume-raghav-korde.vercel.app/' + '/resume.pdf'
function PDFView() {
    return (
        <div>
            <div className="app-container">
                <p className={'mobileview'}> If your browser does not support PDF Rendering click on download button below. </p>
                {/*<h1>My Resume</h1>*/}
                <iframe src={pdfUrl} title="My Resume" className="pdf-frame" />
                <br/>
                <br/>
                <button  onClick={() => window.open(pdfUrl, '_blank')}>Download</button>
            </div>
    </div>
    );
}

export default PDFView;
