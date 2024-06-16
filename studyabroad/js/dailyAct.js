activities = [
    {
        image: '/assets/DRSAgallery/image_1.png',
        desc: 'On the first day, we took a tour of the Colonial Zone, \
        where all the historical buildings and structures from the 1500s \
        are located'
    },
    {
        image: '/assets/DRSAgallery/image_38.png',
        desc: 'Later that same day, we met Dr. Dunn and the WMU alumni, \
        where we formed good friendships and connections.'
    },
    {
        image: '/assets/DRSAgallery/image_29.png',
        desc: 'On the second day, we visited the Dominican Republic Congress \
        and met one of the Dominican Senators, Felix Bautista',
    },
    {
        image: '/assets/DRSAgallery/image_10.png',
        desc: 'Later on the second day, we visited a middle school and conducted \
        an activity to help the students brainstorm their future goals.'
    },
    {
        image: '/assets/DRSAgallery/image_21.png',
        desc: 'On the third day, we visited the U.S. Embassy. We learned about \
        the roles of each department and how individuals attained their positions.'
    },
    {
        image: '/assets/DRSAgallery/image_8.png',
        desc: 'In the evening, we had some fun activities. We made chocolates and \
        watched a theater show about the discovery of chocolate.'
    },
    {
        image: '/assets/DRSAgallery/image_11.png',
        desc: 'Visited the UNIBE, worked on a small project with students from \
        the DR. Each group focused on one social issue in the DR and solutions to it.'
    },
    {
        image: '/assets/DRSAgallery/image_26.png',
        desc: 'We visited UNIBE and worked on a small project with local students, \
        focusing on social issues in the DR and proposing solutions.'
    },
    {
        image: '/assets/DRSAgallery/image_43.png',
        desc: "Children's International, a program that helps youth learn English and \
        other job-related skills. The students were very talented."
    },
    {
        image: '/assets/DRSAgallery/image_30.png',
        desc: 'After a busy week, we had a retreat day. We enjoyed \
        the authentic Dominican meals and wrapped up our academic activities.'
    },
]



const dailyActivity = document.querySelector('.each-day');

for (var i=0; i<activities.length; i++) {
    const dayAct = document.createElement('div');
    dayAct.classList.add('daily-activities');
    dayAct.innerHTML = `
        <img src="${activities[i].image}" class="daily-img"  alt="Daily Activities Image">
        <p>${activities[i].desc}</p>
    `;
    dailyActivity.appendChild(dayAct);
}