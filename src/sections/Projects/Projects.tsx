import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Projects.module.scss';
import { projects } from '../../data/projects';

const Projects = (): JSX.Element => {
  const {
    swiper,
    slide,
    slideImgSection,
    slideImgSectionImage,
    slideInfoSection,
    slideInfoSectionTitle,
    slideInfoSectionDesc,
    slideInfoSectionButtons,
    btnRepo,
    btnDemo,
    btnDemoDisabled,
  } = styles;

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={swiper}>
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className={slide}>
            <div className={slideImgSection}>
              <img
                className={slideImgSectionImage}
                src={project.imgUrl}
                alt={`${project.title} project screenshot`}
              />
            </div>
            <article className={slideInfoSection}>
              <h4 className={slideInfoSectionTitle}>{project.title}</h4>
              <p className={slideInfoSectionDesc}>{project.description}</p>
              <div className={slideInfoSectionButtons}>
                <a
                  href={project.repoLink}
                  target='__blank'
                  rel='noreferrer noopener'
                  title='Github repository'
                  className={btnRepo}>
                  Repo
                </a>
                <a
                  {...(project.deployLink !== undefined
                    ? {
                        href: project.deployLink,
                        target: '__blank',
                        rel: 'noreferrer noopener',
                        title: 'Deploy link',
                        className: btnDemo,
                      }
                    : {
                        className: btnDemoDisabled,
                        title: 'Currently unavailable',
                      })}>
                  Demo
                </a>
              </div>
            </article>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Projects;
