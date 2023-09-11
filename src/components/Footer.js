import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  const email = "hassan.baig@ucalgary.ca";
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/mirza-hassan-baig-a33780229/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{cursor:"pointer"}}/>
        </a>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <EmailIcon style={{cursor:"pointer"}} />
        </a>
        <a href="https://github.com/MirzaHB" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{cursor:"pointer"}} />
        </a>
      </div>
      <p> &copy; 2023 Hassan Baig</p>
    </div>
  );
}

export default Footer;
