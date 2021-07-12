import React from 'react';
import './Footer.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div>
      <body>
        <div class="footer-basic">
          <div className="social_icon">
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
          <footer>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a>Home</a>
              </li>
              <li class="list-inline-item">
                <a>Contact Us</a>
              </li>
              <li class="list-inline-item">
                <a>About Us</a>
              </li>
              <li class="list-inline-item">
                <a>Subscribe</a>
              </li>
            </ul>
            <p class="copyright">Can Date © 2021</p>
          </footer>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </body>
    </div>
  );
};

export default Footer;
