import './style.scss';
import starIcon from '../../images/star-icon.svg';

export default function OurSoftware() {

  const softwareCards = [
    {id: 1, icon: starIcon, title: 'Personalização avançada', text: 'Oferecemos recursos altamente personalizados, com opções para criar perfis únicos de pacientes e adaptar o tratamento de acordo com suas necessidades.'},
    {id: 2, icon: starIcon, title: 'Acompanhe em tempo real', text: 'Nossos softwares permitem o monitoramento em tempo real dos pacientes, com alertas instantâneos para os profissionais de saúde caso haja alguma variação significativa'},
    {id: 3, icon: starIcon, title: 'Análises preditivas', text: 'Utilizamos tecnologias de análise preditiva para ajudar os profissionais de saúde a tomar decisões informadas e assertivas.'},
    {id: 4, icon: starIcon, title: 'Integração com dispositivos', text: 'Integramos nossos softwares com dispositivos inteligentes, como relógios e monitores de saúde, para fornecer dados precisos em tempo real.'},
    {id: 5, icon: starIcon, title: 'Segurança e privacidade', text: 'Nossos softwares seguem rigorosas diretrizes de segurança e privacidade, garantindo a proteção dos dados sensíveis dos pacientes.'},
    {id: 6, icon: starIcon, title: 'Foco no paciente', text: 'Nossa abordagem é centrada no paciente, colocando-os no centro do cuidado de saúde e garantindo que as soluções que oferecemos sejam focadas em suas necessidades.'},
  ];

  const ourSoftwareCard = (icon: string, title: string, text: string) => (
    <div className="our-software-card d-flex align-items-start">
      <div className="icon">
        {/* <img src={icon} alt="" className="card-icon" /> */}
      </div>
      <div>
        <h4 className="text-18-semi-bold">{title}</h4>
        <p className="text-15-regular">{text}</p>
      </div>
    </div>
  );

  return (
    <section className="our-software">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2 className='title-32-medium'>Por que nossos clientes escolhem a gente</h2>
          </div>
          <div className="col-lg-8">
            <div className="our-software-cards-container">
              {softwareCards.map((item) => (
                ourSoftwareCard(item.icon, item.title, item.text)
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}