const baseURL = "https://lowannwil.github.io/wdd230/";
const dataURL = "https://lowannwil.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    const response = await fetch(dataURL);
    const data = await response.json();

    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) => {

    const cards = document.querySelector("#members");

    members.forEach((member) => {
        const card = document.createElement('section');
        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const level = document.createElement("p");
        const category = document.createElement("p");
        const url = document.createElement("a");

        card.setAttribute("class", "member");
        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy')
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        level.textContent = `Membership level: ${member.memberlevel}`;
        category.textContent = `Business category: ${member.businesscategory}`;
        url.textContent = `${member.url}`;
        url.setAttribute("href", member.url);
        url.setAttribute("target", "_blank");


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appemdChild(level);
        card.appendChild(category);
        card.appendChild(url);

        cards.appendChild(card);




    })
}



const gridButton = document.querySelector("#gridbutton");
const listButton = document.querySelector("#listbutton");
const display = documentquerySelector("#members");


gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList, remove("list");

});


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});




