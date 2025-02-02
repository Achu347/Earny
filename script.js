const websites = [
    { name: "iwriter", link: "https://www.iwriter.com", description: "Getting paid for writting Articles." },
    { name: "textbroker", link: "https://www.textbroker.com", description: "Content writting opportunities." },
    { name: "ReviewStream", link: "https://www.reviewstream.com", description: "Earn money on writting review on products and services." },
    { name: "Respondent", link: "https://respondent.io", description: "Getting paid for sharing your opinon is and feedbacks." },
    { name: "Usertesting", link: "https://www.usertesting.com", description: "Get paid to test websites and apps." },
    { name: "Fiverr", link: "https://www.fiverr.com", description: "Offer writing,reviewingand editing services at their own rates." },
    { name: "Survey Junkie", link: "https://www.surveyjunkie.com", description: "Getting paid for completing surveys."},
    { name: "Swagbucks", link: "https://www.swagbucks.com", description: "Earn points by completing tasks like surveys,watching videos and reviewing produts." },
    { name: "Vollna", link: "https://www.vollna.com", description: "Freelance job platform for typing ,copywriting,and document processing." },
    { name: "PaidViewPoint", link: "https://www.paidviewpoint.com", description: "Earn money by answering surveys and sharing your opinions on produts and services." },
    { name: "Yelp Elite", link: "https://blog.yelp.com", description: "Become a Yelp Elite member by writing quality reviews and enjoying exclusive perks ." },
    
];

const container = document.getElementById("websites-container");
    

websites.forEach(website => {
    const div = document.createElement("div");
    div.classList.add("website");
    div.innerHTML = `
        <h2>${website.name}</h2>
        <p>${website.description}</p>
        <a href="${website.link}" target="_blank">Visit</a>
    `;
    container.appendChild(div);
});
