import pdfSrc from '../../assets/Gileski_Christian_Resume.pdf';

import './resume.scss';

export const Resume = () => {
  return (
    <div className='resume-container'>
      <div className='download-text'>
        Click{' '}
        <a href={pdfSrc} download>
          <b>here</b>
        </a>{' '}
        to download the resume.
      </div>

      <object
        type='application/pdf'
        data={`${pdfSrc}#toolbar=0`}
        width='auto'
        height='100%'
      >
        Your browser doesn't support PDFs. Please use the link above to download
        the file.
      </object>
    </div>
  );
};
