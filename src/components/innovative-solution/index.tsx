import './style.scss';
import solutionImage from '../../images/solution-image.png';
import DefaultBtn from '../default-btn';

export default function InnovativeSolution() {

  return (
    <section className="innovative-solution">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={solutionImage} alt="" className='img-fluid'/>
          </div>
          <div className="col-lg-6">
            <h2 className='title-32-medium mb-sm mt-xxlg'>Soluções inovadoras para cuidados de saúde eficazes</h2>
            <p className='mb-xlg'>
              A Icon é uma empresa de tecnologia médica que oferece soluções inovadoras para melhorar a qualidade dos cuidados de saúde. 
              <br></br>
              <br></br>
              Nossos softwares personalizados permitem o monitoramento em tempo real de pacientes e oferecem análises precisas para apoiar decisões clínicas mais informadas. Com a integração com dispositivos inteligentes e uma abordagem centrada no paciente, estamos ajudando a transformar a forma como as pessoas cuidam da sua saúde.
            </p>
            <DefaultBtn
              title='Button'
              link='https://www.google.com'
              transparent
            />
          </div>
        </div>
      </div>
    </section>
  );
};