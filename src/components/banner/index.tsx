import DefaultBtn from '../default-btn';
import './style.scss';

import banner from '../../images/banner.png';

export default function Banner() {
    return (
        <div className="banner d-flex align-items-center">
            <div className="label-container d-flex flex-column justify-content-center">
                <h3 className='title-40-medium mb-sm'>Garanta já nossas <br></br>soluções para sua clínica</h3>
                <p className='text-18-medium mb-xlg'>Entre em contato e adquira já!</p>
                <DefaultBtn
                    title="Fale conosco"
                    link='https://www.google.com'
                />
            </div>
            <div className='banner-image-container d-flex align-items-center'>
                <img src={banner} alt="" className='img-fluid'/>
            </div>
        </div>
    );
}