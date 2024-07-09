const baseURL = "https://lowanwill.github.io/wdd230/";
const dataURL = "https://lowanwill.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    /* const response = await fetch(dataURL);
     const  = await response.json();
 
     displayMembers(data.members);*/

    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayMembers(data.members);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

getMembers();

const displayMembers = (members) => {

    const cards = document.querySelector("#members");

    members.forEach((member) => {
        const bCard = document.createElement("section");
        const logo = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const level = document.createElement("p");
        const category = document.createElement("p");
        const url = document.createElement("a");

        bCard.setAttribute("class", "member");
        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy')
        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        level.textContent = `Membership level: ${member.memberlevel}`;
        category.textContent = `${member.businesscategory}`;
        url.textContent = `${member.url}`;
        url.setAttribute("href", member.url);
        url.setAttribute("target", "_blank");


        bCard.appendChild(logo);
        bCard.appendChild(name);
        bCard.appendChild(address);
        bCard.appendChild(phone);
        bCard.appendChild(level);
        bCard.appendChild(category);
        bCard.appendChild(url);

        cards.appendChild(bCard);




    })
}



const gridButton = document.querySelector("#gridbutton");
const listButton = document.querySelector("#listbutton");
const display = document.querySelector("article");


gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");

});


listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});




