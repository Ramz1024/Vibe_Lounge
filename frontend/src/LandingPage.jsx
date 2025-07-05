import "./LandingPage.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./SideBar";
import NavBar from "./NavBar"; // <-- NEW

const moods = [
  { name: "Happy Room", emoji: "😊", desc: "Spread joy and celebrate life’s beautiful moments together.", tag: "Upbeat • Energetic • Positive", link: "/happy", color: "#ffc947" },
  { name: "Angry Room", emoji: "😠", desc: "Let it out in a healthy way with people who get it.", tag: "Raw • Honest • Unfiltered", link: "/angry", color: "#ff4e4e" },
  { name: "Sleeping Room", emoji: "💤", desc: "Unwind, relax, and drift off with soothing vibes.", tag: "Tranquil • Soft • Dreamy", link: "/sleeping", color: "#7ddaff" },
  { name: "Chill Room", emoji: "😎", desc: "Relax, unwind, and vibe with laid-back sounds.", tag: "Lo-fi • Calm • Peaceful", link: "/chill", color: "#3edbf0" },
  { name: "Sad Room", emoji: "🥺", desc: "A safe space to feel, heal, and find comfort in shared experiences.", tag: "Melancholy • Supportive • Understanding", link: "/sad", color: "#7068f4" },
  { name: "Study Room", emoji: "📚", desc: "Focus, learn, and grow with motivated minds.", tag: "Focus • Productive • Motivated", link: "/studying", color: "#f362f2" },
  { name: "Party Room", emoji: "🎉", desc: "Let’s have some fun and dance it out together!", tag: "Energetic • Loud • Free", link: "/party", color: "#c86ef3" },
  { name: "Melancholy Room", emoji: "🎭", desc: "A reflective space for your softer moments.", tag: "Thoughtful • Deep • Still", link: "/melancholy", color: "#5451d6" }
];

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="vibe-root">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <NavBar onMenuClick={() => setSidebarOpen(true)} /> {/* <-- Replaces header */}

      <section className="vibe-hero">
        <h1>Welcome to <span className="highlight">VibeLounge</span></h1>
        <p>Your digital safe space where emotions meet community.<br />
          Enter mood-themed rooms, connect with others, and find your perfect vibe.
        </p>
        <div className="vibe-buttons">
          <Link to="/happy"><button>Enter Your Vibe</button></Link>
          <Link to="#"><button className="ghost">Learn More</button></Link>
        </div>
      </section>

      <section className="vibe-moods-section">
        <h2>Choose Your Mood</h2>
        <p>
          Each room is designed to match your current emotional state. Find your tribe,
          discover new music, or simply exist in a space that gets you.
        </p>
        <div className="vibe-moods">
          {moods.map(({ name, emoji, desc, tag, link, color }) => (
            <motion.div key={name} className="mood-card" whileHover={{ scale: 1.05 }} style={{ backgroundColor: color }}>
              <div className="mood-title">{emoji} {name}</div>
              <p className="mood-desc">{desc}</p>
              <p className="mood-tag">{tag}</p>
              <Link to={link}><button>Join Room</button></Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="vibe-why">
        <h2>Why VibeLounge?</h2>
        <div className="why-features">
          <div className="feature-box">
            <div className="feature-icon">🎯</div>
            <h3>Emotion-First Design</h3>
            <p>Every room is crafted to match and support your current emotional state.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🔐</div>
            <h3>Safe & Anonymous</h3>
            <p>Express yourself freely in a judgment-free, anonymous environment.</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🎵</div>
            <h3>Curated Soundscapes</h3>
            <p>Discover music that perfectly matches your mood and emotional journey.</p>
          </div>
        </div>
      </section>

      <footer className="vibe-footer">
        <p>Ready to Find Your Vibe?</p>
        <h3>Join thousands of others who've found their emotional home at VibeLounge.</h3>
        <Link to="/signup"><button>Start Your Journey</button></Link>

        <div className="footer-bottom">
          <div className="footer-logo">VibeLounge</div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
          <p className="copyright">
            © 2024 VibeLounge. Your emotions, your space, your community.
          </p>
        </div>
      </footer>
    </div>
  );
}
