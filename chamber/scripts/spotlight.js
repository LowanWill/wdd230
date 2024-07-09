const baseURL = "https://lowanwill.github.io/wdd230/";
const dataURL = "https://lowanwill.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector("#spotlight");

async function getSpotlight() {
    const response = await fetch(dataURL);
    const data = await response.json();
    //console.log(data);
    const goldAndSilverCompanies = filterGoldAndSilver(data.members);
    const selectedCompanies = selectRandomCompanies(goldAndSilverCompanies, 3);
    displaySpotlight(selectedCompanies);
}
function displaySpotlight(members) {
    let topMembers = members.filter((member) => member.membership === "Silver Member" || member.membership === "Gold Member");

    let randomMembers = topMembers.sort(() => 0.5 - Math.random()).slice(0, 4);

    randomMembers.forEach((member) => {
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
        url.textContent = `${member.url}`;;
        url.setAttribute('href', member.url);
        url.setAttribute('target', '_blank');
        url.setAttribute('class', "website");

        company.appendChild(logo);
        company.appendChild(brand);
        company.appendChild(url);

        spotlights.appendChild(company);

    })



}
getSpotlight()
//function filterGoldAndSilver(members) {
//   return members.filter(member => member.membership_level === "Gold" || member.membership_level === "Silver");
//}

//function selectRandomCompanies(members, count) {
//    const shuffled = members.sort(() => 0.5 - Math.random());
//    return shuffled.slice(0, count);
//}

//const displaySpotlight = (members) => {
//    members.forEach(member => {
//    let company = document.createElement("section");
//    let logo = document.createElement("img");
//    let brand = document.createElement('h3');
//          let url = document.createElement('a');
//
//        company.setAttribute('class', 'company');
//        logo.setAttribute('src', member.image);
//        logo.setAttribute('class', 'member-logo')
//        logo.setAttribute('alt', `logo of ${member.name}`);
//        logo.setAttribute('loading', 'lazy');
//        brand.textContent = `${member.name}`;
//        brand.setAttribute('class', 'brand');
//        url.textContent = `${member.url}`;;
//        url.setAttribute('href', member.url);
//        url.setAttribute('target', '_blank');
//        url.setAttribute('class', "website");
//
//        company.appendChild(logo);
//        company.appendChild(brand);
//        company.appendChild(url);

//       spotlights.appendChild(company);
//  });


//}

//fetchHighlight();




