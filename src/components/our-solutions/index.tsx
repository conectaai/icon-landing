import './style.scss';
import starIcon from '../../images/star-icon.svg';

export default function OurSolutions() {

  const softwareCards = [
    {id: 1, icon: starIcon, title: 'Operadoras', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
    {id: 2, icon: starIcon, title: 'Auto Gestão', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
    {id: 3, icon: starIcon, title: 'Seguradoras', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
    {id: 4, icon: starIcon, title: 'Clínicas', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
    {id: 5, icon: starIcon, title: 'Consultórios', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
    {id: 6, icon: starIcon, title: 'Médicos', text: 'Lorem ipsum dolor sit amet consectetur. Eu.'},
  ];

  const ourSoftwareCard = (icon: string, title: string, text: string) => (
    <div className="col-lg-3 d-flex">
      <div className="our-solutions-card d-flex align-items-center flex-column flex-grow-1 mx-auto">
        <div className="icon">
          {/* <img src={icon} alt="" className="card-icon" /> */}
        </div>
        <h4 className="text-18-medium">{title}</h4>
        <p className="text-15-regular">{text}</p>
      </div>
    </div>
  );

  return (
    <section className="our-solutions">
      <div className="container">
        <h2 className='title-28-medium'>Veja algumas das nossas soluções para o vertical de saúde</h2>
        <div className="our-solutions-cards-container d-flex align-items-center">
          <div className="row d-flex justify-content-center">
            {softwareCards.map((item) => (
              ourSoftwareCard(item.icon, item.title, item.text)
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}