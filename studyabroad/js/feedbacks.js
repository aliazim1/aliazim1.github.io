st_feedbacks = [
    {
        experience: "First, I want to thank Seita Scholars Program for creating this opportunity for all Seita Scholars to experience studying abroad, \
        such an amazing program! For me, it was a wonderful experience, I learned a lot about the history of the Dominican Republic, visited a lot of historical \
        buildings and structures from 1500s. I also witnessed the situations in which people are living in the DR, the big gap between each social classes. I also learned about \
        the Dominican government and the significant role that religion plays in soceity and in the government. We visited different places, met different people, and formed good \
        friendships with WMU alumni and others.",
        advice: "Whether you're considering applying for this Study Abroad program or not, I strongly encourage you to do so while you're at WMU. I understand that the idea of \
        \"Studying Abroad\" can be scary for some people, but believe me, it's not as intimidating as it seems. Financial worries should not hold you back either, as everything you \
        need is covered, you're in good hands. Missing this opportunity means missing out on an almost once-in-a-lifetime experience with \
        exceptional professor, coaches, and fellow students. You'll gain valuable insights, a fresh perspective on life and the world, and most importantly, you'll develop \
        essential leadership skills from our professor and coaches. Don't let this chance pass you by!",
    },
    {
        experience: "Dominican Republic is a beautiful place to go because the people are very welcoming and friendly. \
        I didn't know much Spanish but everytime I walked into a store, greeted them with «Hola como estas», I received \
        a nice and friendly smile from them. I hadn't seen that so long since coming to America. I didn't have any challenges in this \
        experience except getting my passport the day before I travel. Academically, I would say that somehow I don't know why but after \
        visiting multiple schools in the DR, it opened my eyes on globe disparities such education system and healthcare access. Also I improved \
        my communication skills with people with different backgrounds.",
        advice: "If you have not traveled to this country, please take this opportunity to gain some knowledge and experience. You will \
        enjoy everything in the DR. I do not think Seita Program would let me go again otherwise I will do again and again (every year).",
    },
    {
        experience: "It was my first experience of studying abroad at WMU. This Trip was amazing and outstanding for my personal and academic \
        experiences. My favorite part of this study abroad was Children's International. This program helps youths who are \
        experiencing difficulties, homelessness, and poverty. In this place I learned professional development and my personal growth. The youths were \
        learning English and the class room was full of enjoy. I learned this that being vulnerable around other people and being open minded with yourself. \
        Professionally, in the DR, I learned how to be better Social Worker with different cultures. It was very impressive how the teacher was able to led the \
        classroom by rewarding, encouraging students, and coaching them.",
        advice: "Seita program will help you to make it happen. Keep asking questions from students who have been in the DR, and be \
        open to learn new things from lifetime lasting memories and skills. Just bring yourself to be engaged with others. If you have any questions \
        please feel free ask us. Let's go to the DR!",
    },
];

pr_feedback = [
    {
        experience: "As the professor of the course, my favorite part is having the opportunity to connect with the Seita Scholars themselves. \
        I make it a point to try to spend individual time with each student either during the class or while we are abroad. I enjoy learning \
        from the students as much as from The experience abroad itself. Also, it's an honor having the chance to see the country through their \
        eyes provides new insights for me each time.",
        advice: "Please at least consider it. A lot of students think they can't go because they won't be able to afford it but please talk to\
         your coach before counting it out. Also, please get your passport as soon as possible.",
    }
];

const st_feed = document.querySelector('.feedbacks');
for (let i = 0; i < st_feedbacks.length; i++) {
    const feedback = document.createElement('div');
    feedback.classList.add('each-experience');
    feedback.innerHTML = `
        <div class="bothAE">
            <div>
                <h3 class="exp-txt">Experience</h3>
                <div class="exper">
                    <p><i class='bx bxs-quote-left'></i> ${st_feedbacks[i].experience} <i class='bx bxs-quote-right' ></i></p>
                </div>
            </div>
            <div>
                <h3>Advice</h3>
                <div class="exper">
                    <p><i class='bx bxs-quote-left' ></i> ${st_feedbacks[i].advice} <i class='bx bxs-quote-right' ></i></p>
                </div>
            </div>
        </div>
        `;
    st_feed.appendChild(feedback);
};


const pr_feed = document.querySelector('.professor');
for (let i = 0; i < pr_feedback.length; i++) {
    const feedbk = document.createElement('div');
    feedbk.classList.add('each-experience');
    feedbk.innerHTML = `
        <div class="bothAE">
            <div>
                <h3 class="exp-txt">Experience</h3>
                <div class="exper">
                    <p><i class='bx bxs-quote-left'></i> ${pr_feedback[i].experience} <i class='bx bxs-quote-right' ></i></p>
                </div>
            </div>
            <div>
                <h3>Advice</h3>
                <div class="exper">
                    <p><i class='bx bxs-quote-left' ></i> ${pr_feedback[i].advice} <i class='bx bxs-quote-right' ></i></p>
                </div>
            </div>
        </div>
        `;
    pr_feed.appendChild(feedbk);
}