// all the data for staff members
staff = [
    {
        name: 'Dr. Dunn',
        position: "The 8th president of Western Michigan University (2007 - 2017) + Seita Scholars Study Abroad Program's sponsor.",
        image: "/assets/staff/drDunn.png",
        link: "https://scholarworks.wmich.edu/dunn/"
    },
    {
        name: 'Dr. Lewis',
        position: 'Master Faculty Specialist, Educational Leadership in Higher Education and Faculty Coordinator.',
        image: "/assets/staff/drLewis.png",
        link: "https://wmich.edu/leadership/directory/lewis"

    },
    {
        name: 'Ronicka Hamilton',
        position: 'The Director of Seita Scholars Program since 2017',
        image: "/assets/staff/ronicka.png",
        link: "https://wmich.edu/fosteringsuccess/directory/hamilton"

    },
    {
        name: 'Coach Peter',
        position: 'Sr. Campus Coach, First-Year Experience Instructor for the incoming Seita Scholars',
        image: "/assets/staff/peter.png",
        link: "https://wmich.edu/fosteringsuccess/directory/thompson"
    },
    {
        name: 'Coach Edward',
        position: 'Seita Scholars Campus Coach since 2017',
        image: "/assets/staff/edward.png",
        link: "https://wmich.edu/fosteringsuccess/directory/lara"
    },
    {
        name: 'Coach Tim',
        position: 'DHHS and Seita Scholars Campus Coach',
        image: "/assets/staff/tim.png",
        link: "https://wmich.edu/fosteringsuccess/directory/liggins"
    },
    {
        name: 'Coach Amal',
        position: 'Seita Scholars Campus Coach',
        image: "/assets/staff/amal.png",
        link: "https://wmich.edu/fosteringsuccess/directory/mohamed"
    },
    {
        name: 'Coach Anna',
        position: 'Seita Scholars Campus Coach',
        image: "/assets/staff/anna.png",
        link: "https://wmich.edu/fosteringsuccess/directory/glasgow"
    },
    
    {
        name: 'Kelly Jensen',
        position: 'DHHS Liason at Seita Scholars Program',
        image: "/assets/staff/kelly.png",
        link: "https://wmich.edu/fosteringsuccess/directory/jensen"
    },
    
]

// displaying all the staff members and their details
const staffContainer = document.querySelector('.staff');
for (let i = 0; i < staff.length; i++) {
    const staffItem = document.createElement('div');
    staffItem.classList.add('each-staff');
    staffItem.innerHTML = `
        <div class="staff-image">
            <img src="${staff[i].image}" title="Click to read more" alt="${staff[i].name}">
            <h3>${staff[i].name}</h3>
            <p class="position-txt">${staff[i].position}</p>
            <a href="${staff[i].link}" target="_blank">Read more</a>
        </div>`;
    staffContainer.appendChild(staffItem);
};