const baseURL = "https://lowanwill.github.io/wdd230/";
const dataURL = "https://lowanwill.github.io/wdd230/chamber/data/members.json";
const partners = document.querySelector("#spotlight");

async function fetchPartners() {
    const response = await fetch(dataURL);
    const data = await response.json();
    console.log(data);
    const goldAndSilverCompanies = filterGoldAndSilver(data.members);
    const selectedCompanies = selectRandomCompanies(goldAndSilverCompanies, 3);
    displaySpotlight(selectedCompanies);
}

// Function to filter companies with membership levels Gold or Silver
function filterGoldAndSilver(members) {
    return members.filter(member => member.memberlevel === "Gold Member" || member.memberlevel === "Silver Member");
}

// Function to randomly select three companies
function selectRandomCompanies(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


const displaySpotlight = (members) => {

    members.forEach(member => {
        let company = document.createElement('section');
        let logo = document.createElement('img');
        let brand = document.createElement('h3');
        let url = document.createElement('a');

        company.setAttribute('class', 'company');
        logo.setAttribute('src', member.image);
        logo.setAttribute('class', 'member-logo')
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        brand.textContent = `${member.name}`;
        brand.setAttribute('class', 'brand');
        url.textContent = `${member.url}`;
        url.setAttribute('href', member.website);
        url.setAttribute('target', '_blank');
        url.setAttribute('class', "website");

        company.appendChild(logo);
        company.appendChild(brand);
        company.appendChild(url);

        partners.appendChild(company);
    });


}

fetchPartners();