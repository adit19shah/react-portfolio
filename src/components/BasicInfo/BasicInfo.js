import './BasicInfo.css'
import photo from '../../mylinkedinphoto.png';

export default function Basic_info() {
    return (
        <div className='basic-info'>
            <img src={photo} className="myphoto" alt="adit" />
            <h2>Adit Shah</h2>
            <h3>Frontend Developer</h3>
            <h4>Tekion India</h4>
        </div>
    );
}