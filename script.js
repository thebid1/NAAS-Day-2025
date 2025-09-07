document.addEventListener('DOMContentLoaded', () => {
  // Executive Council Data
  const excos = [
    {
      name: 'Abdulazeez Mubaraq Kilani',
      role: 'President',
      image: 'assets/Kiilani.jpg'
    },
    {
      name: 'Mustapha Fatimah Niyass',
      role: 'Vice President',
      image: 'assets/vp.jpg'
    },
    {
      name: 'Usman Lawal',
      role: 'Secretary General',
      image: 'assets/gensec.jpg'
    }
  ];

  // Faculty Spotlight Data
  const faculty = [
    {
      name: 'Prof Aminu Abubaker',
      role: 'Dean',
      image: 'assets/dean.jpg'
    },

    {
      name: 'Prof. A.N Abdullahi',
      role: 'Staff Adviser',
      image: 'assets/Staff.jpg'
    }
  ];

  // Project Highlight Data
  const projects = [
    {
      title: 'Exam Orientation Program',
      description: 'LEADING PATH WAYS TO ACADEMIC SUCCESS',
      image: 'assets/exam-orientation.jpg'
    },
    {
      title: 'Podium',
      description: 'Repairs of all classroom podium',
      image: 'assets/podium.jpg'
    },
    {
      title: 'White Vest',
      description: 'New White Vest that represent all agricultural students',
      image: 'assets/vest-white.jpg'
    },
    {
      title: 'Blue Vest',
      description: 'New Blue Vest that represent all agricultural students',
      image: 'assets/vest-blue.jpg'
    },
    {
      title: 'Faculty Jersey',
      description: 'New jersey for the faculty team',
      image: 'assets/hagrex.jpg'
    }, 
    {
      title: 'Orientation',
      description: 'Orientation program for UG1 and UG2 Students',
      image: 'assets/orientation.jpg'
    },
    {
      title: 'Tutorials',
      description: 'Tutorials for UG1-UG3',
      image: 'assets/tutorial.jpg'
    }
  ];

  // Agricultural Excellence Data
  const agriculture = [
    {
      title: 'Improved Species',
      description: 'Introduction of newly improved species which serves as centre of innovation and learning',
      image: 'assets/agric.jpg'
    }
  ];

  // Student Highlights Data
  const students = [
    {
      name: 'Ngozi Eze',
      project: 'Vertical farming prototype'
    },
    {
      name: 'Tunde Balogun',
      project: 'AgriTech mobile app'
    }
  ];

  // Render EXCO Cards
  const excoContainer = document.getElementById('exco-cards');
  if (excoContainer) {
    excos.forEach(exco => {
      const card = document.createElement('div');
      card.className = 'exco-card';
      card.innerHTML = `
        <img src="${exco.image}" alt="${exco.name}" />
        <h3>${exco.name}</h3>
        <p>${exco.role}</p>
      `;
      excoContainer.appendChild(card);
    });
  }

  // Render Faculty List
const facultyList = document.getElementById('faculty-list');
if (facultyList) {
  faculty.forEach(person => {
    const card = document.createElement('div');
    card.className = 'faculty-card';
    card.innerHTML = `
      <img src="${person.image}" alt="${person.name}" />
      <h3>${person.name}</h3>
      <p>${person.role}</p>
    `;
    facultyList.appendChild(card);
  });
}

  // Render Student Highlights
  const studentContainer = document.getElementById('student-cards');
  if (studentContainer) {
    students.forEach(student => {
      const card = document.createElement('div');
      card.innerHTML = `
        <h3>${student.name}</h3>
        <p>${student.project}</p>
      `;
      studentContainer.appendChild(card);
    });
  }

  // Render Project Highlights
  const projectContainer = document.getElementById('project-cards');
  if (projectContainer) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectContainer.appendChild(card);
    });
  }

  // Render Agricultural Excellence
  const agricultureContainer = document.getElementById('agriculture-cards');
  if (agricultureContainer) {
    agriculture.forEach(item => {
      const card = document.createElement('div');
      card.className = 'agriculture-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      agricultureContainer.appendChild(card);
    });
  }
});