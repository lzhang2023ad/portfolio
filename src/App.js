import React from 'react';
import myAvatar from './assets/images/avatar.jpg';
import ResumeFile from './assets/files/Lin_Zhang_Resume.pdf'
import './App.scss'


function App() {
    const staticLabels = {};
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
    const CodeRain = () => {
        return (<canvas id='rain' width="1920" height="1080" ></canvas>);
    };
    const Avatar = () => {
        return (<img src={myAvatar} className="avatar" alt="avatar" />);
    }
    const MainContainer = ({ labels }) => {
        React.useEffect(() => {
            let c = document.getElementById("rain");
            let pen = c.getContext('2d');
            let ys = Array(parseInt(c.width / 10)).fill(0);
            let random_char = () => String.fromCharCode(parseInt(65 + Math.random() * (90 - 65)));
            setInterval(() => {
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
                <CodeRain/>
                <div className="content-container">
                    <p>Hello, I'm</p>
                    <h1>Lin Zhang</h1>
                    <p>Senior Frontend Software Engineer</p>
                    <Avatar />
                    <ButtonGroup />
                </div>
            </div>
        );
    };
    return <MainContainer labels={staticLabels} />;
}

export default App;
