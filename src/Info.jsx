import { TypeAnimation } from 'react-type-animation';
import './Info.css'
import { SocialIcon } from 'react-social-icons';

export default function Info (){
    let fSize = '38px'
    let iconDim = 30
    let mobile = false
    if(window.innerWidth < 850){
       fSize = '24px'
        iconDim = 20
        mobile = true
    }

    return(
            <>
                <div className={'container'}>
                <h1> {'<'} hello, world! {'>'} </h1>
                    <p className={'moving'}>
          <span style={{ fontSize: fSize }}>
              I am {mobile ? <br /> : ' '}
          </span>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Raghav Korde 👋',
                        2000,
                        'a Full Stack Developer 👨‍💻',
                        1000,
                        'Student 🎓',
                        1000,
                        'a Tech Enthusiast !',
                        1000,
                    ]}
                    wrapper={'b'}
                    speed={75}
                    repeat={Infinity}
                    style={{
                        fontSize: fSize,
                        color: '#72b626',
                    }}
                />
                    </p>
                <div className={'bottom'}>
                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/raghav-korde">
                                <SocialIcon network="linkedin" style={{ height: iconDim, width: iconDim }} /> /raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/raghavkorde">
                                <SocialIcon network="github" bgColor='#ffffff' style={{ height: iconDim, width: iconDim }} /> /raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/raghav_korde/">
                                <SocialIcon network="instagram" style={{ height: iconDim, width: iconDim }} /> @raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="mailto:raghavkorde4@gmail.com">
                                <SocialIcon network="email" bgColor='#c0c0c0' style={{ height: iconDim, width: iconDim }} /> Contact
                            </a>
                        </li>

                    </ul>

                </div>
                </div>
            </>

    )}