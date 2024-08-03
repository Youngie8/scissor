import React from 'react'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBuildingColumns, faDollar, faDollarSign, faScissors, faWalking, faWallet } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about-hero'>
        <div className="">
        <h1> SCISSOR.</h1>
        <p>Scissor is your go-to link management tool. We simplify the way you share links by transforming long, complex URLs into short, memorable ones. Enjoy increased click-through rates, enhanced branding, and valuable analytics to optimize your online presence</p>
        </div>
        <div className="icon">
        <FontAwesomeIcon icon={faScissors} /><span>--</span>
        </div>
      </div>
      <div className="about-sections">
        <h1>Who needs <span className="txt-bold">SCISSOR</span> <FontAwesomeIcon icon={faScissors} /> ??</h1>
      <div className="about-section">
          <div className="social-icons">
            <FontAwesomeIcon icon={faLinkedinIn}/>
            <FontAwesomeIcon icon={faXTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faFacebookF}/>
          </div>
          <p><span className='txt-lg color-1'>Scissor is a game-changer for social media marketers and influencers.</span> By condensing lengthy URLs into sleek, shareable links, Scissor boosts click-through rates and enhances brand visibility. Say goodbye to awkward, truncated links and hello to professional-looking, branded short links that seamlessly integrate into social media posts, bios, and stories.</p>
      </div>
      <div className="about-section">
        <p><span className='color-8 txt-lg'>Busy professionals and students can also benefit immensely from Scissor.</span> Quickly share research articles, online resources, or meeting links without cluttering emails or chats. Scissor simplifies information sharing and saves valuable time. Plus, custom domains can be added for a touch of professionalism.</p>
        <div className="prof-student-icons">
          <FontAwesomeIcon icon={faBook}/>
          <FontAwesomeIcon icon={faWalking}/>
        </div>
      </div>
      <div className="about-section bg-7">
        <div className="busi-icon">
          <FontAwesomeIcon icon={faDollar} />
          <FontAwesomeIcon icon={faBuildingColumns} />
        </div>
      <p><span className="color-9 txt-lg">For business and organizations, Scissor offers a versatile link management solution.</span> Track link performance to gain insights into audience behavior. Create branded short links for campaigns, promotions, or internal use. Scissor helps streamline workflows and optimize online presence.
      </p>
      </div>
      </div>
    </div>
  )
}

export default About