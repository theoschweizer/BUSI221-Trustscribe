import './App.css';

function App() {
  
    const handleClickScroll = () => {
      const element = document.getElementById('info-box');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div>
      <div className="page-one">
        <div className="text-background">
          <div className="title-container">
            <h1 className="title">
              TRUSTSCRIBE
            </h1>
            <h2 className="subtitle">
              Efficient. Trustworthy. Secure.
            </h2>
          </div>
        
          <p className="description">
            Securely transcribe and store sensitive audio recordings. All data is locally stored and only accessible by you.
          </p>
          <button className="about-button" onClick={handleClickScroll}>LEARN MORE</button>
        </div>
        <div  className="landing-background">
        </div>
        <div>
        </div>
      </div>
      <div className="page-two" >
        <div className="border-box" id="info-box">
          <div className="about-title-container">
            <p className="about-title-one">
            Don't trust us?
            </p>
            <p className="about-title-two">
              No problem.
            </p>
          </div>
          <p className="about-text">
          With our light-weight transcription technology, you can securely transcribe audio recordings of any length. No more ambigious privacy policies. No more data harvesting. No third-party involvement.
          </p>
          <p className="about-text">
          Since all of our software is stored locally, you can complete hours of tedious transcription work in minutes - with your data never leaving the safety of your own computer. 
          </p>
          <p className="about-bold">
            OUR SECURITY GUARANTEE
          </p>
          <div className="img-container">
            <div className="lock-img"/>
          </div>
          <p className="about-text">
          Under no circumstances can we access your data. Ever. All transcriptions are locally stored and locally encrypted. 
          </p>
        </div>
        <iframe title="email-form" src="https://www.cognitoforms.com/f/cMjyRSzaR0iaxbRZLfMWtQ/2" className="cog-iframe-embed" style={{fontFamily: "Roboto"}} overflow="hidden" height="460px" width="400px"></iframe>
        {/* <div className="blocker"/> */}
      </div>
      <div className="footer">
          <div>
          © Trustscribe 2023. All rights reserved.
          </div>
          <div>
          Contact us.
          </div>
      </div>
    </div>
  );
}

export default App;
