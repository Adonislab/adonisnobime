import React from 'react'

const HeaderSocials = () => {
  return (
    <div className="home__socials">
        <a href="https://www.linkedin.com/in/tanguy-adonis-nobime-078166200" className="home__social-link" target='_blank'>
            <span class="icon-social-linkedin" title='Find me on linked'></span>
        </a>

        <a href="https://github.com/Adonislab/" className="home__social-link" target='_blank'>
            <span class="icon-social-github" title='Find me on github'></span>
        </a>

        <a href="mailto:nobimetanguy19@gmail.com" className="home__social-link" target='_blank'>
            <span class="icon-envelope-letter" title='Send-me email'></span>
        </a>

        <a href="https://wa.me//send?phone=0022960559894&text=Hello%20!%20I%20am%20interested%20in%20your%20profil." className="home__social-link" target='_blank'>
            <span class="icon-phone" title='Send-me whatssap text'></span>
        </a>

        <a href="tel:+22951518759" className="home__social-link" target='_blank'>
            <span class="icon-emotsmile" title='Call-me'></span>
        </a>

    </div>
  )
}

export default HeaderSocials