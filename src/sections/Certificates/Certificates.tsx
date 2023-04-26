import styles from './Certificates.module.scss';
import { certificates } from '../../data/certificates';

const Certificates = (): JSX.Element => {
  const { certificateItem, certificateItemInfo } = styles;
  const auxCertificates = [...certificates];

  return (
    <div>
      <ul>
        {auxCertificates
          .sort((certifcateA, certifcateB) => {
            return (
              certifcateB.issueDate.getTime() - certifcateA.issueDate.getTime()
            );
          })
          .map((certificate, index) => {
            const { link, title, institute } = certificate;
            return (
              <li key={index} className={certificateItem}>
                <div className={certificateItemInfo}>
                  <p>{title}</p>
                  <p className='fw-200 fs-smaller'>
                    <span>{institute}</span>
                  </p>
                </div>
                <a
                  href={link}
                  target='__blank'
                  rel='noopener noreferrer'
                  className='fs-h3'>
                  <i className='fa-solid fa-arrow-up-right-from-square'></i>
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Certificates;
