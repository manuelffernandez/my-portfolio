import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Projects.module.scss';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../../services/fetchProjects';
import { type Project } from '../../interfaces/Project';

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

  const [loading, setLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async (): Promise<void> => {
      const projects = await fetchProjects();
      setLoading(false);
      setProjects(projects);
    };

    setLoading(true);
    void getProjects();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className={swiper}>
          {projects
            .filter(project => project.show)
            .map((project, index) => (
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
                    <p className={slideInfoSectionDesc}>
                      {project.description}
                    </p>
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
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        {...(project.deployLink
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
      )}
    </>
  );
};

export default Projects;
