import React from "react";
import "./App.css";
import {
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaTiktok,
  FaInstagram,
  FaGlobe,
  FaPlay,
  FaUsers,
  FaPrayingHands,
  FaCross,
  FaImage,
  FaMusic,
  FaVideo,
  FaChurch,
} from "react-icons/fa";

function App() {
  const socialLinks = {
    facebook: "https://web.facebook.com/profile.php?id=100066194606050",
    youtube: "https://www.youtube.com/channel/UCi6QWKiRBe-P3a3hSf1oI3w",
    telegram: "https://t.me/TsirhaAryamStRuphaelSundaySchool",
    tiktok:
      "https://www.tiktok.com/@st_rufale_sunday_school?_t=ZM-8yxYxjlaeAA&_r=1",
    instagram: "https://instagram.com",
  };

  return (
    <div className='app-container'>
      <div className='main-card'>
        {/* Header with Church Logo */}
        <div className='header-section'>
          <div className='logo-container'>
            {/* Church Logo Placeholder - Replace with actual logo */}
            <div className='church-logo-placeholder'>
              <div className='church-logo-fallback'>
                <FaChurch className='church-icon' />
              </div>
            </div>
            <h1 className='church-title'>የቅዱስ ሩፋኤል ቤተክርስቲያን</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className='content-section'>
          {/* Ethiopian Text Section */}
          <div className='ethiopian-section'>
            <div className='ethiopian-header'>
              <FaPrayingHands className='prayer-icon' />
              <h2>St. Rufael Church</h2>
            </div>
            <p className='ethiopian-text'>
              ይህ የጽርሐ አርያም ቅዱስ ሩፋኤል ሰንበት ትምህርት ቤት
              <br /> የ Social Media ማስፈንጠሪያዎች ናቸዉ
            </p>
          </div>

          {/* Social Media Channels - Single Column for Mobile */}
          <div className='social-channels'>
            {/* <h3 className='channels-title'>
              <FaGlobe className='channels-icon' />
              Connect With Us
            </h3> */}
            <p className='channels-subtitle'>
              Follow us across all platforms for spiritual content
            </p>

            <div className='channels-list'>
              {/* YouTube */}
              <a
                href={socialLinks.youtube}
                className='channel-item youtube'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='channel-item-left'>
                  <div className='channel-icon'>
                    <FaYoutube />
                  </div>
                  <div className='channel-text'>
                    <h4>YouTube</h4>
                    <p>Watch full sermons and teachings</p>
                  </div>
                </div>
                <div className='channel-action'>
                  <FaVideo />
                  <span>Watch</span>
                </div>
              </a>

              {/* TikTok */}
              <a
                href={socialLinks.tiktok}
                className='channel-item tiktok'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='channel-item-left'>
                  <div className='channel-icon'>
                    <FaTiktok />
                  </div>
                  <div className='channel-text'>
                    <h4>TikTok</h4>
                    <p>Short spiritual videos and messages</p>
                  </div>
                </div>
                <div className='channel-action'>
                  <FaMusic />
                  <span>View</span>
                </div>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                className='channel-item facebook'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='channel-item-left'>
                  <div className='channel-icon'>
                    <FaFacebook />
                  </div>
                  <div className='channel-text'>
                    <h4>Facebook</h4>
                    <p>Community updates and events</p>
                  </div>
                </div>
                <div className='channel-action'>
                  <FaUsers />
                  <span>Follow</span>
                </div>
              </a>

              {/* Telegram */}
              <a
                href={socialLinks.telegram}
                className='channel-item telegram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='channel-item-left'>
                  <div className='channel-icon'>
                    <FaTelegram />
                  </div>
                  <div className='channel-text'>
                    <h4>Telegram</h4>
                    <p>Daily prayers and messages</p>
                  </div>
                </div>
                <div className='channel-action'>
                  <FaTelegram />
                  <span>Join</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                className='channel-item instagram'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='channel-item-left'>
                  <div className='channel-icon'>
                    <FaInstagram />
                  </div>
                  <div className='channel-text'>
                    <h4>Instagram</h4>
                    <p>Photos, stories and updates</p>
                  </div>
                </div>
                <div className='channel-action'>
                  <FaImage />
                  <span>Follow</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className='contact-info'>
            <p className='contact-text'>St.Rufael Church</p>
            <p className='contact-subtext'>
              Join our spiritual community online
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className='footer'>
          <div className='footer-content'>
            <p className='copyright'>ማንኛውም አይነት QR ማሰራት ከፈለጉ በዚህ ያናግሩን</p>
            <p className='blessing'>+251 985241404</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
