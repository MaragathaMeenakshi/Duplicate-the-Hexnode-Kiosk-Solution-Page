import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import '../styles/homepage.css'
import hexnodeKiosk from '../asset/hexnode-kiosk.webp';
import { data, section3Data, section4Data, cardData } from '../data/homepagedata';
import Button from '../components/common/button';
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import windowsvg from '../asset/windows.svg';
import androidTv from '../asset/android-tv.svg';
import android from '../asset/android.svg';
import apple from '../asset/apple-tv.svg';
import ios from '../asset/ios.svg';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [tabs, setTabs] = useState(0);
  const [onclick, setOnClick] = useState(true);
  let click = false;
  const [showtext, setShowText] = useState(0);
  const [showCard, setShowCard] = useState(0);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Set up an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // disable the button in section 5
    if (showCard == 0) {
      document.getElementById("left").disabled = true;
      document.getElementById("mobileviewleft").disabled = true;

      document.getElementById("left").style.cursor = "not-allowed";
      document.getElementById("mobileviewleft").style.cursor = "not-allowed";

    }
    else {
      document.getElementById("left").disabled = false;
      document.getElementById("mobileviewleft").disabled = false;

      document.getElementById("left").style.cursor = "default";
      document.getElementById("mobileviewleft").style.cursor = "default";

    }


    if (showCard == cardData.length - 1) {
      document.getElementById("right").disabled = true;
      document.getElementById("mobileviewright").disabled = true;

      document.getElementById("right").style.cursor = "not-allowed";
      document.getElementById("mobileviewright").style.cursor = "not-allowed";

    }
    else {
      document.getElementById("right").disabled = false;
      document.getElementById("mobileviewright").disabled = false;

      document.getElementById("right").style.cursor = "default";
      document.getElementById("mobileviewright").style.cursor = "default";

    }

  }, [showCard])


  const handleOnClick = (index) => {
    setTabs(index);
    setOnClick(!click);
  }

  const handleTextChange = (index) => {
    setShowText(index);
  }
  const handleArrowRight = () => {
    setShowCard(showCard + 1);
  }
  const handleArrowLeft = () => {
    setShowCard(showCard - 1);
  }

  return (
    <div>
      <header className={`${scrolled ? 'scrolled' : ''}`}>
        <div className='heading'>
          <NavBar scrolled={scrolled} />
        </div>
      </header>
      <main>

        <section className='section1'>
          <div className='container1'>
            <div>
              <img src={hexnodeKiosk}></img>
            </div>
            <div className='box'>
              <div><h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1></div>
              <div className='form'>
                <input type='text' placeholder='Your Work Email'></input>
                <Button text="GET STARTED NOW!"></Button>
              </div>
            </div>
          </div>
        </section>

        <div className='section2'>
          <div className='container2'>
            {data.map((dataEach, index) => (
              <>
                <a key={index}>
                  <div>
                    <div><img src={dataEach.img} width='83' height='25'></img></div>
                    <div>
                      <p>{dataEach.text}</p>
                    </div>
                  </div>
                </a>
                <div className='line' ></div>
              </>
            ))}
          </div>
        </div>
        {/* section 3 */}
        <div className='section3'>
          <div className='container3'>
            <h2>Specific kiosk modes for unique use cases</h2>
            <div>
              <div>
                <div className="tab">
                  {section3Data.map((dataEach, index) => (
                    <div key={index}>
                      <div className={`tabBox ${tabs == index ? 'show' : 'disable'}`} onClick={() => handleOnClick(index)}>
                        <div>{dataEach.title}</div>
                        {onclick && tabs == index ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                      </div>
                      {tabs == index && onclick &&
                        <div className="opened visible">
                          <div><img src={dataEach.img} ></img></div>
                          <div>
                            <h3>{dataEach.subtitle}</h3>
                            <ul className='custom-list'>
                              {dataEach.points.map((point, index) => (
                                <li key={index}>
                                  <p>{point}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      }
                    </div>
                  ))}
                </div>

                {tabs !== null && onclick &&
                  <div className='notvisible'>
                    <div className="opened">
                      <div className='image'><img src={section3Data[tabs].img} ></img></div>
                      <div className='textContainer'>
                        <h3>{section3Data[tabs].subtitle}</h3>
                        <ul className='custom-list'>
                          {section3Data[tabs].points.map((point, index) => (
                            <li key={index}>
                              <p>{point}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        {/* section 4 */}
        <section className='section4'>
          <div className='container3'>
            <h2 >What additional possibilities does the Kiosk mode offer?</h2>
            <div className='containerbox'>
              <div>
                {section4Data.map((eachData, index) => (
                  <div className='subbox' key={index}>
                    {isMobileView && <div className={`${showtext == index ? 'visible' : 'notvisible'}`}><img src={eachData.img}></img></div>}
                    <div>
                      <h3 onClick={() => handleTextChange(index)}>{eachData.title}</h3>
                      <div>
                        <p style={{ display: showtext == index ? 'block' : 'none' }}>{eachData.paragraph}</p>
                        <a className='textbox'>
                          <div style={{ display: showtext == index ? 'block' : 'none' }} >
                            TRY FOR FREE
                          </div>
                          <div style={{ display: showtext == index ? 'block' : 'none' }}><MdKeyboardArrowRight />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
              <div className="notvisible"><img src={section4Data[showtext].img}></img></div>
            </div>
          </div>
        </section>
        {/* section 5 */}
        <section className="section5">
          <div className='container5'>
            <h2>Why should you choose Hexnode?</h2>
            {/* card */}
            <div className="cardflexbox">
              <div className='buttondiv'><button id="left" className=' notvisible' onClick={handleArrowLeft}><MdKeyboardArrowLeft /></button></div>

              {cardData.map((eachData, index) => (
                <div className='card' style={{ display: showCard == index ? 'flex' : 'none' }} key={index}>
                  <img src={eachData.img}></img>
                  <div>
                    <h4>"{eachData.quotes}"</h4>
                    <div>
                      <p>{eachData.name}</p>
                      {eachData.profession &&
                        eachData.profession.map((prof, index) => (
                          <div className="prof" key={index}>{prof}</div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
              <div className='buttondiv'>
                <button className='notvisible' id="right" onClick={handleArrowRight}><MdKeyboardArrowRight /></button>
              </div>
            </div>
            <div className='buttonBox'>
              <button id="mobileviewleft" onClick={handleArrowLeft}><MdKeyboardArrowLeft /></button>
              <button id="mobileviewright" onClick={handleArrowRight}><MdKeyboardArrowRight /></button>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section className='section6'>
          <div className='container6'>
            <h2>Platforms supported</h2>
            <div className='boxes'>
              <div><img src={windowsvg}></img></div>
              <div><img src={ios}></img></div>
              <div><img src={android}></img></div>
              <div><img src={androidTv}></img></div>
              <div><img src={apple}></img></div>
            </div>
          </div>
        </section>
        {/* section 7 */}
        <section className='section7'>
          <div className='container7'>
            <div className='singupbox'>
              <div><h1>Sign up and try Hexnode free for 14 days!</h1></div>
              <div className='form'>
                <input type='text' placeholder='Your Work Email'></input>
                <Button text="GET STARTED"></Button>
              </div>
              <div><p>No credit cards required. <a>Reguest a demo &gt;</a></p></div>
            </div>
          </div>
        </section>
      </main>
      {/* footer section */}
      <footer>
        <div className='footerbox'>
          <div className='footertext'>
            <div><a>Terms of Use</a>-</div>
            <div><a>Privacy</a>-</div>
            <div><a>Cookies</a></div>
          </div>
          <div>
            <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage