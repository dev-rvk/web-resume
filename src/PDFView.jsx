import './PDFView.css'

// const pdfUrl = 'https://web-resume-raghav-korde.vercel.app/' + '/resume.pdf'
const pdfUrl = 'https://drive.google.com/file/d/1uBNKPKKL6LUY8frjs5Njk-Ss7sswlBp9/preview'
const downloadUrl = 'https://drive.google.com/uc?export=download&id=1uBNKPKKL6LUY8frjs5Njk-Ss7sswlBp9'
function PDFView() {
    return (
        <div>
            <div className="app-container">
                {/*<h1>My Resume</h1>*/}
                <iframe
                    id="pdf-iframe"
                    src={pdfUrl}
                    width="65%"
                    height="100%"
                    allowFullScreen={false}
                    title="Raghav_Korde_Resume.pdf"
                />
                <br/>
                <br/>
                <button  onClick={() => window.location.replace(downloadUrl)}>Download</button>
            </div>
    </div>
    );
}

export default PDFView;
