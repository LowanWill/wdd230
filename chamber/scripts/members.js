const baseURL = "https://lowannwil.github.io/wdd230/";
const dataURL = "https://lowannwil.github.io/wdd230/chamber/data/members.json";

async function getMembers() {

    const response = await fetch(dataURL);
    const data = await response.json();

    displayMembers(data.chamberMembers);
}



const displayMembers = (chamberMembers) => {
    chamberMembers.forEach(chamberMember => {
        let card = document.createElement('section');
        let logo = document.createElement("img");
        let brand = document.createElement("h3");
        let list = document.createElement("ul");
        let listItem1 = document.createElement("li");
        let listItem2 = document.createElement("li");
        let listItem3 = document.createElement("li");
        let listItem4 = document.createElement("li");
        let url = document.createElement("a");

        card.setAttribute("class", "member");
        logo.setAttribute("src", chamberMember.image);
        logo.setAttribute("alt", `logo of ${chamberMember.name}`);
        logo.setAttribute('class', 'member-logo')
        logo.setAttribute('loading', 'lazy')
        brand.textContent = `${chamberMember.name}`;
        brand.setAttribute("class", "brand");
        list.setAttribute("class", "info");
        listItem1.textContent = `${chamberMember.address}`;
        listItem2.textContent = `${chamberMember.phone}`;
        listItem3.textContent = `Membership level: ${chamberMember.memberlevel}`;
        listItem4.textContent = `Business category: ${chamberMember.businesscategory}`;
        url.textContent = `${chamberMember.url}`;
        url.setAttribute("href", chamberMember.url);
        url.setAttribute("target", "_blank");
        url.setAttribute("class", "website");

        card.appendChild(logo);
        card.appendChild(brand);
        card.appendChild(list);
        list.appendChild(list);
        list.appendChild(listItem1);
        list.appendChild(listItem2);
        list.appemdChild(listItem3);
        list.appendChild(listItem4);
        card.appendChild(url);

        chamberMembers.appendChild(card);




    })
}

getMembers();

document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.querySelector("#gridbutton");
    const listButton = document.querySelector("#listbutton");
    const display = documentquerySelector("#members");

    function showGrid() {
        display.classList.add("grid");
        display.classList.remove("list");

    }

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
    gridButton.addEventListener("click", showGrid);
    listButton.addEventListener("click", showList);

    showGrid();
});