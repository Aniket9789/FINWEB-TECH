const testimonials = [
    {
        id: 1,
        name: "AMAN PANDEY",
        text: "  At RedWolf Web-Tech, the App Development service surpassed my expectations. Their team exhibited unparalleled expertise, delivering a seamless and user-friendly application that perfectly aligned with my vision.From concept to launch, they were attentive to detail and ensured a smooth development process.I highly recommend their services to anyone seeking innovative and high- quality app solutions.",

    
    },
{
    id: 2,
        name: "ROHAN KUMAR",
            text: "RedWolf Web-Tech's Web Development service is exceptional. They transformed my vague ideas into  a stunning website that not only looks impressive but also functions flawlessly. Their team'sprofessionalism and commitment to excellence are evident in every aspect of their work. Thanks to their expertise, my online presence has been greatly enhanced, driving more traffic and boosting my business. I'm incredibly satisfied with the results and wouldn't hesitate to work  with them again",
            
},
{
    id: 3,
        name: "KRISHNA SINGH",
            text: "I can't speak highly enough of RedWolf Web-Tech's Digital Marketing service. Their strategic approach and creative campaigns have significantly elevated my brand's online presence. From social media management to SEO optimization, they've helped me reach and engage with my target audience effectively. Their team is responsive, knowledgeable, and dedicated to delivering measurable results. If you're looking to enhance your digital marketing efforts, look no further than RedWolf Web-Tech",
                        
},
{
    id: 4,
        name: "ANSHIKA SHARMA",
            text:   "RedWolf Web-Tech's Graphic Design service is top-notch. Their talented designers took my ideas and turned them into visually stunning creations that perfectly captured the essence of my brand. Whether it's logos, branding materials, or promotional assets, they consistently deliver high-quality work that stands out. Their attention to detail and willingness to go above and beyond to meet their clients' needs are truly commendable. I'm thrilled with the results and would recommend their services to anyone in need of professional graphic design solutions.   ",             img: "https://randomuser.me/api/portraits/women/50.jpg"
},
// {
//     id: 5,
//         name: "Jessica Greenland",
//             text: "Atque consequuntur doloribus unde officia id? Consectetur odit amet dolores reprehenderit veritatis eos facilis ratione quia voluptatem harum accusantium alias nemo consequatur, facere autem blanditiis natus voluptate cumque sequi architecto?",
//                 img: "https://randomuser.me/api/portraits/women/7.jpg"

  ];

testimonial = document.getElementById('testimonial-content');
left = document.getElementById('scroll-left');
right = document.getElementById('scroll-right');

// Index for setting testimonial
let testimonialIndex = 0;

// Load first testimonial (array element "0" of testimonials data)
setTestimonial();


function setTestimonial() {
    // Set innerHTML of testimonial content to new template string
    // with content dynamically injected from testimonials data
    testimonial.innerHTML = `
    <span class="name">${testimonials[testimonialIndex].name}</span>
    <div class="testimonial-text">${testimonials[testimonialIndex].text}</div>
    `
}

left.addEventListener('click', () => {
    // 1. Subtract 1 from global index variable
    testimonialIndex--;
    // 2. Check if index is -1 (out of bounds). If so, set to
    // length of testimonals data -1 (final testimonial)
    if (testimonialIndex == -1) { testimonialIndex = testimonials.length - 1 }
    // 3. Set testimonial with updated index variable
    setTestimonial();
})

right.addEventListener('click', () => {
    // 1. Add 1 to global index variable
    testimonialIndex++;
    // 2. Check if index is the length of testimonials data (out of bounds). 
    // If so, set to 0 (first testimonial)
    if (testimonialIndex == testimonials.length) { testimonialIndex = 0 }
    // 3. Set testimonial with updated index variable
    setTestimonial();
})