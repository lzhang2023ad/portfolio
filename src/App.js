import React from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import myAvatar from './assets/images/avatar.jpg';
import ResumeFile from './assets/files/Lin_Zhang_Resume.pdf'
import './App.scss'


function App() {
    const staticLabels = {
        hello: "Hello, I'm",
        name: "Lin Zhang",
        role: "Senior Frontend Software Engineer"
    };
    const size = useWindowSize();
    let interval;
    const ButtonGroup = () => {
        return (
            <div className='btn-group'>
                <a
                    className='linkedin-btn'
                    href='https://www.linkedin.com/in/lin-zhang-320b471ba/'
                    target='_blank'
                    rel='noreferrer'
                >
                </a>
                <a
                    className='resume-btn'
                    href={ResumeFile}
                    target='_blank'
                    rel='noreferrer'
                >
                </a>
                <a
                    className='github-btn'
                    href='https://github.com/lzhang2023ad'
                    target='_blank'
                    rel='noreferrer'
                >
                </a>
            </div>
        );
    };
    const CodeRain = ({ width, height }) => {
        return (<canvas id='rain' width={width} height={height} ></canvas>);
    };
    const Avatar = () => {
        return (<img src={myAvatar} className="avatar" alt="avatar" />);
    }
    const TextContainer = ({ labels }) => {
        return (
            <div>
                <p>{labels.hello}</p>
                <h1>{labels.name}</h1>
                <p>{labels.role}</p>
            </div>
        );
    };
    const ContentContainer = ({ labels }) => {
        return (
            <div className="content-container">
                <TextContainer labels={labels} />
                <Avatar />
                <ButtonGroup />
            </div>
        );
    };
    const MainContainer = ({ labels }) => {
        React.useEffect(() => {
            let c = document.getElementById("rain");
            let pen = c.getContext('2d');
            pen.clearRect(0, 0, c.width, c.height);
            clearInterval(interval);
            let ys = Array(parseInt(c.width / 10)).fill(0);
            let random_char = () => String.fromCharCode(parseInt(65 + Math.random() * (90 - 65)));
            interval = setInterval(() => {
                pen.fillStyle = 'rgba(0, 0, 0, 0.09)';
                pen.fillRect(0, 0, c.width, c.height);
                pen.fillStyle = '#0f0';
                ys.forEach((y, i) => {
                    pen.fillText(random_char(), i * 10, y);
                    ys[i] = Math.random() < 0.02 ? 0 : y + 10;
                })
            }, 1000 / 25);
        }, []);
        return (
            <div className="main-container">
                <CodeRain width={size.width} height={size.height} />
                <ContentContainer labels={labels} />
            </div>
        );
    };
    return <MainContainer labels={staticLabels} />;
}

export default App;
