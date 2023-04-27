import drOnlineLogo from '../../images/logo-dronline.png';
import drOnlineSoftware from '../../images/software-dronline.png';
import integradorLogo from '../../images/logo-integradoor.png';
import integradoorSoftware from '../../images/software-integradoor.png';

import './style.scss';
import DefaultBtn from '../default-btn';

export default function OurInterfaces() {

  const softwareCard = (logo: string, text: string, link: string, img: string) => (
    <div className="col-lg-6">
      <div className='software-card'>
        <div>
          <img src={logo} alt="" className='logo'/>
          <p className='text-15-regular'>{text}</p>
          <DefaultBtn
            title='Saiba mais'
            link={link}
            transparent 
          />
        </div>
        <img src={img} alt="" className='software-image'/>
      </div>   
    </div>
  );

  return (
    <section className="our-softwares">
      <div className="container">
        <div className='d-flex align-items-center justify-content-center flex-column'>
          <h2 className='title-32-medium'>Conheça nossos softwares</h2>
          <p className='text-20-regular mb-xxxxlg'>Descubra nossas soluções de saúde personalizadas</p>
        </div>
        <div className="row">
          {softwareCard(
            drOnlineLogo, 
            "Oferecemos recursos altamente personalizados, com opções para criar perfis únicos de pacientes e adaptar o tratamento de acordo com suas necessidades.",
            "https://google.com", 
            drOnlineSoftware
          )}
          {softwareCard(
            integradorLogo, 
            "Oferecemos recursos altamente personalizados, com opções para criar perfis únicos de pacientes e adaptar o tratamento de acordo com suas necessidades.",
            "https://google.com", 
            integradoorSoftware
          )}
        </div>
      </div>
    </section>
  );
}