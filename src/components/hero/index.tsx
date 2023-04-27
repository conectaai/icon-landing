import './style.scss';

import hero from '../../images/hero.png';
import DefaultBtn from '../default-btn';

export default function Hero() {

  const heroCards = [
    {id: 1, label: "Personalização de acordo com suas necessidades", icon: "icon1"}, 
    {id: 2, label: "Acompanhamento em tempo real", icon: "icon1"}, 
    {id: 3, label: "Integração com diversos dispositivos", icon: "icon1"}, 
  ];
  
  const heroCard = (label: string, icon: string) => (
    <div className="col-lg-4 d-flex justify-content-center">
      <div className="hero-card d-flex align-items-center">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <p className="label">{label}</p>
      </div>
    </div>
  );

  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text-container">
              <h1 className='hero-title'>Soluções de software personalizadas para cuidados de saúde eficazes</h1>
              <p className='text-20-regular'>Transformando a forma como as pessoas cuidam da sua saúde com tecnologia de ponta</p>
              <DefaultBtn
                title='Button'
                link='https://google.com'
                blueBtn 
              />
            </div>
          </div>
          <div className="col-lg-5 offset-1">
            <img src={hero} alt="hero" className='img-fluid'/>
          </div>
        </div>
      </div>
      <div className="hero-cards d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            {heroCards.map((item) => (
              heroCard(item.label, item.icon)
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}