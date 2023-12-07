import { useEffect, useState } from 'react';
import { type Certificate } from '../../interfaces/Certificate';
import { fetchCertificates } from '../../services/fetchCertificates';
import styles from './Certificates.module.scss';

const Certificates = (): JSX.Element => {
  const { certificateItem, certificateItemInfo, certificateItemLinks } = styles;

  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getObjs = async (): Promise<void> => {
      const skills = await fetchCertificates();
      setLoading(false);
      setCertificates(skills);
    };

    setLoading(true);
    void getObjs();
  }, []);

  return (
    <div>
      <ul>
        {loading ? (
          <p>Loading...</p>
        ) : (
          certificates
            .sort((certifcateA, certifcateB) => {
              return (
                certifcateB.issueDate.seconds - certifcateA.issueDate.seconds
              );
            })
            .map((certificate, index) => {
              const { link, title, institute, image } = certificate;
              return (
                <li key={index} className={certificateItem}>
                  <div className={certificateItemInfo}>
                    <p>{title}</p>
                    <p className='fw-200 fs-smaller'>
                      <span>{institute}</span>
                    </p>
                  </div>
                  <div className={certificateItemLinks}>
                    <a
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      {...(image.length > 0
                        ? {
                            href: link,
                            target: '__blank',
                            className: 'fs-h3',
                            title: 'Certificate image',
                          }
                        : {
                            href: '#',
                            className:
                              'fs-h3 color-dark color-dark-hover cursor-default',
                            title: 'Currently unavailable',
                          })}
                      rel='noopener noreferrer'>
                      <i className='fa-solid fa-image fs-h3 color-blue color-cyan-hover cursor-pointer'></i>
                    </a>
                    <a
                      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                      {...(link.length > 0
                        ? {
                            href: link,
                            target: '__blank',
                            className: 'fs-h3',
                            title: 'Certificate link',
                          }
                        : {
                            href: '#',
                            className:
                              'fs-h3 color-dark color-dark-hover cursor-default',
                            title: 'Currently unavailable',
                          })}
                      rel='noopener noreferrer'>
                      <i className='fa-solid fa-arrow-up-right-from-square'></i>
                    </a>
                  </div>
                </li>
              );
            })
        )}
      </ul>
    </div>
  );
};

export default Certificates;
