const baseURL = "https://lowanwill.github.io/wdd230/";
const dataURL = "https://lowanwill.github.io/wdd230/chamber/data/members.json";
const highlight = document.querySelector("#spotlight");

async function fetchHighlight() {
    const response = await getch(dataURL);
    const data = await response.json();
    //console.log(data);
    const highlightCompanies = goldSilver(data.members);
    const selectedCompanies = selectRandomCompanies(goldSilver, 3);
    displaySpotlight(selectedCompanies);
}

function goldSilver(members) {
    return members.filter(member => member.memberlevel === "Gold Member" || company.memberlevel === "Silver Member");

}

function selectRandomCompanies(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const displaySpotlight = (members) => {
    members.forEach(member => {
        let company = document.createElement("section");
        let logo = document.createElement("img");
        let brand = document.createElement('h3');
        let url = document.createElement('a');

        company.setAttribute('class', 'company');
        logo.setAttribute('src', member.image);
        logo.setAttribute('class', 'member-logo')
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        brand.textContent = `${member.name}`;
        brand.setAttribute('class', 'brand');
        url.textContent = `Website`;
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');
        url.setAttribute('class', "website");

        member.appendChild(logo);
        member.appendChild(brand);
        member.appendChild(url);

        partners.appendChild(company);
    });


}

fetchHighlight();




