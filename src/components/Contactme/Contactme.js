import './Contactme.css'
import EmailButton from '../../email_button.png';
import LinkedInLogo from '../../linkedinlogo.png'

export default function Contactme() {
    return (
        <div className='contactme'>
            <a href='mailto:adit19shah2002@gmail.com' target="_blank" rel="noreferrer"><img src={EmailButton} alt="Email" /></a>
            <a href='https://in.linkedin.com/in/adit19shah' target="_blank" rel="noreferrer"><img src={LinkedInLogo} alt="LinkedIn" /></a>
        </div>
    );
}