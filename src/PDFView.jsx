import './PDFView.css'

// const pdfUrl = 'https://web-resume-raghav-korde.vercel.app/' + '/resume.pdf'
const pdfUrl = 'https://etvjtiacin-my.sharepoint.com/personal/rvkorde_b21_et_vjti_ac_in/_layouts/15/embed.aspx?UniqueId=8c2730fa-1b7d-4a7f-8e9f-8c2e3d7a5851'
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
                    frameBorder={0}
                    scrolling="no"
                    title="Raghav_Korde_Resume.pdf"
                />
                <br/>
                <br/>
                <button  onClick={() => window.open(pdfUrl, '_blank')}>Download</button>
            </div>
    </div>
    );
}

export default PDFView;
