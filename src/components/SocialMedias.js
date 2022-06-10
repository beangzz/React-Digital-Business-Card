import React from "react";
import"./SocialMedias.css"

import TwitterIcon from "../images/twitter-icon.png"
import FacebookIcon from "../images/facebook-icon.png"
import InstagramIcon from "../images/instagram-icon.png"
import GithubIcon from "../images/github-icon.png"

function Social () {
  return (
    <section className="social-medias-section">
      <div className="social-medias-div">
        <a href="https://twitter.com/Beangzz_" target="_blank" rel="noreferrer"><img src={TwitterIcon} alt="twitter" /></a>
        <a href="https://www.facebook.com/beatriz.dosanjosnascimento/s" target="_blank" rel="noreferrer"><img src={FacebookIcon} alt="facebook" /></a>
        <a href="https://www.instagram.com/beangzz/" target="_blank" rel="noreferrer"><img src={InstagramIcon} alt="instagram" /></a>
        <a href="https://github.com/beangzz" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="github" /></a>
      </div>
    </section>
  )
}

export default Social;