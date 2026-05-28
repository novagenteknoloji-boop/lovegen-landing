import "./App.css";

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="bgGlow bgGlowOne"></div>
        <div className="bgGlow bgGlowTwo"></div>

        <img
          src="/branding/lovegen-horizontal.png"
          alt="loveGEN"
          className="logo"
        />

        <div className="eyebrow">music becomes atmosphere</div>

        <h1>someone feels this too</h1>

        <p className="lead">
          loveGEN turns the music you feel into cinematic atmospheres,
          emotional moments, and shareable stories.
        </p>

        <div className="ctaRow">
          <a href="#preview" className="primaryBtn">
            Enter the atmosphere
          </a>

          <a href="#story" className="secondaryBtn">
            See the idea
          </a>
        </div>

        <div className="phonePreview" id="preview">
          <video
            src="/videos/pulse-neon.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="phoneShade"></div>

          <div className="phoneContent">
            <div className="phoneMood">pulse world</div>
            <div className="phoneTitle">late night resonance</div>
            <div className="phoneText">
              this atmosphere lives on loveGEN
            </div>
          </div>
        </div>
      </section>

      <section className="story" id="story">
        <h2>Not another music player.</h2>

        <p>
          loveGEN does not replace the music. It creates the emotional layer
          around it — mood, motion, visuals, presence, and moments worth sharing.
        </p>

        <div className="cards">
          <div className="card">
            <span>01</span>
            <h3>Feel the track</h3>
            <p>Detect mood, energy, lyrics, and atmosphere.</p>
          </div>

          <div className="card">
            <span>02</span>
            <h3>Create the world</h3>
            <p>Match every song with a cinematic visual atmosphere.</p>
          </div>

          <div className="card">
            <span>03</span>
            <h3>Share the moment</h3>
            <p>Generate story-ready atmosphere videos from what you feel.</p>
          </div>
        </div>
      </section>

      <footer>
        <div>this moment started with music.</div>
        <strong>this atmosphere lives on loveGEN.</strong>
      </footer>
    </main>
  );
}