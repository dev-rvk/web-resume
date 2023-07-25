import { TypeAnimation } from 'react-type-animation';
import './Info.css'
import { SocialIcon } from 'react-social-icons';

export default function Info (){

    return(
            <>
                <div className={'container'}>
                <h1>hello, world!</h1>
                <p className={'moving'}>
                    <span style={{fontSize: '2em'}}>I am{' '}</span>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Raghav Korde 👋',
                            2000,
                            'a Full Stack Developer 👨‍💻',
                            1000,
                            'Student 🎓',
                            1000,
                            'a Technology Enthusiast !',
                            1000,
                        ]}
                        wrapper={"b"}
                        speed={75}
                        style={{ fontSize: '2em', color: '#72b626' }}
                        repeat={Infinity}
                    />
                </p>
                <div className={'bottom'}>
                    <ul>
                        <li>
                            <a href="https://linkedin.com/in/raghav-korde">
                                <SocialIcon network="linkedin" style={{ height: 30, width: 30 }} /> /raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/raghavkorde">
                                <SocialIcon network="github" bgColor='#ffffff' style={{ height: 30, width: 30 }} /> /raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/raghav_korde/">
                                <SocialIcon network="instagram" style={{ height: 30, width: 30 }} /> @raghavkorde
                            </a>
                        </li>
                        <li>
                            <a href="mailto:raghavkorde4@gmail.com">
                                <SocialIcon network="email" bgColor='#c0c0c0' style={{ height: 30, width: 30 }} /> Contact
                            </a>
                        </li>

                    </ul>

                </div>
                </div>
            </>

    )}