import React, { useState } from 'react';

const projects = [
  {
    title: 'โปรเจกต์ A',
    description: 'เว็บขายของออนไลน์ด้วย React และ Node.js',
    images: [
      'https://via.placeholder.com/600x400?text=Project+A+Image+1',
      'https://via.placeholder.com/600x400?text=Project+A+Image+2',
      'https://via.placeholder.com/600x400?text=Project+A+Image+3',
    ],
    link: 'https://github.com/yourusername/projectA',
  },
  {
    title: 'โปรเจกต์ B',
    description: 'แอปมือถือสำหรับจัดการงานประจำวัน',
    images: [
      'https://via.placeholder.com/600x400?text=Project+B+Image+1',
      'https://via.placeholder.com/600x400?text=Project+B+Image+2',
    ],
    link: 'https://github.com/yourusername/projectB',
  },
];

const experiences = [
  {
    company: 'บริษัท ABC จำกัด',
    role: 'นักพัฒนาซอฟต์แวร์ฝึกงาน',
    period: 'มิ.ย. 2024 - ส.ค. 2024',
    details: 'ฝึกงานด้านพัฒนาเว็บด้วย React และ Node.js ร่วมทีม Agile ทำระบบจัดการข้อมูลลูกค้าและรายงานผล',
  }
];

const skills = ['JavaScript', 'React', 'Node.js', 'Bootstrap', '.Net', 'MySQL', 'Sql server'];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index) => {
    setCurrentProjectIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const project = projects[currentProjectIndex];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
          <a
            className="navbar-brand"
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            ธีรพงษ์ แพงศรีแก้ว
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {['home', 'about', 'experience', 'projects'].map((section) => (
                <li className="nav-item" key={section}>
                  <a
                    href={`#${section}`}
                    className="nav-link"
                    onClick={(e) => handleNavClick(e, section)}
                  >
                    {{
                      home: 'หน้าแรก',
                      about: 'เกี่ยวกับฉัน',
                      experience: 'ประสบการณ์ฝึกงาน',
                      projects: 'ผลงาน',
                    }[section]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main container */}
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        {/* หน้าแรก */}
        <section id="home" className="text-center my-5">
          <h1 className="display-4 mb-3">สวัสดีครับ! ธีรพงษ์ แพงศรีแก้ว</h1>
          <p className="lead text-muted">
            นักพัฒนาเว็บที่ชอบสร้างประสบการณ์ผู้ใช้ที่ดีและเว็บที่สวยงาม
          </p>
          <a href="#projects" className="btn btn-primary btn-lg mt-3">ดูผลงานของฉัน</a>
        </section>


        {/* About */}
        <section id="about" className="my-5">
          <h2>เกี่ยวกับฉัน</h2>
          <p>
            ผมเป็นนักพัฒนาเว็บที่มีประสบการณ์ในการใช้ React, Node.js, และ Bootstrap ในการสร้างเว็บไซต์ที่ตอบโจทย์ผู้ใช้
            รักการเรียนรู้เทคโนโลยีใหม่ ๆ และมุ่งมั่นพัฒนาอย่างต่อเนื่อง
          </p>

          <h4>ประวัติส่วนตัว</h4>
          <ul className="list-unstyled">
            <li>
              <strong>วันเกิด:</strong> 1 มกราคม 1995
            </li>
            <li>
              <strong>ที่อยู่:</strong> นครราชสีมา, ประเทศไทย
            </li>
            <li>
              <strong>อีเมล:</strong> your.email@example.com
            </li>
            <li>
              <strong>เบอร์โทร:</strong> 012-345-6789
            </li>
          </ul>

          <h4>ทักษะของผม</h4>
          <ul className="list-group list-group-horizontal flex-wrap">
            {skills.map((skill) => (
              <li key={skill} className="list-group-item m-1">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section id="experience" className="my-5">
          <h2>ประสบการณ์ฝึกงาน</h2>
          <div className="timeline">
            {experiences.map(({ company, role, period, details }) => (
              <div key={company} className="timeline-item">
                <h5>
                  {role} ที่ {company}
                </h5>
                <small>{period}</small>
                <p>{details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="my-5">
          <h2>ผลงาน / โปรเจกต์</h2>
          <div className="row">
            {projects.map(({ title, description, images, link }, index) => (
              <div key={title} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={images[0]}
                    alt={title}
                    className="card-img-top"
                    style={{ cursor: 'pointer', objectFit: 'cover', height: '200px' }}
                    onClick={() => openModal(index)}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text flex-grow-1">{description}</p>
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary mt-auto"
                    >
                      ดูบน GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal + Carousel */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{project.title}</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={idx}
                        className={idx === 0 ? 'active' : ''}
                        aria-current={idx === 0 ? 'true' : undefined}
                        aria-label={`Slide ${idx + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="carousel-inner">
                    {project.images.map((img, idx) => (
                      <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={`${project.title} slide ${idx + 1}`}
                          style={{ maxHeight: '500px', objectFit: 'contain' }}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-light text-center py-4 border-top">
        <p className="mb-0">ติดต่อ: your.email@example.com</p>
      </footer>
    </>
  );
}

export default App;
