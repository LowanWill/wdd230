const table = document.querySelector("#prices", "tbody");
const url = "https://lowanwill.github.io/wdd230/scoots/data/rentals.json";

document.addEventListener('DOMContentLoaded', function () {
    getPricesData();
});

async function getPricesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayPrices(data.rentals);
        } else {
            throw new Error("failed to fetch prices");
        }
    } catch (error) {
        console.log("error fetching prices: ", error);
    }
}

const displayPrices = (rentals) => {
    getPricesData.forEach((rental) => {
        let row = document.creatElement("tr");
        let type = document.creatElement("td");
        let max = document.createElement("td");
        let resHalfDay = document.createElement("td");
        let resFullDay = document.createElement("td");
        let wHalfDay = document.createElement("td");
        let wFullDay = document.createElement("td");

        type.textContent = `${rental.name}`;
        max.textContent = `${rental.passengers}`;
        resHalfDay.textContent = `${rental.reshalfday}`;
        resFullDay.textContent = `${rental.resfullday}`;
        wHalfDay.textContent = `${rental.walkhalfday}`;
        wFullDay.textContent = `${rental.walkfullday}`;

        row.appendChild(type);
        row.appendChild(max);
        row.appendChild(resHalfDay);
        row.appendChild(resFullDay);
        row.appendChild(wHalfDay);
        row.appendChild(wFullDay);

        table.appendChild(row);

    }
    )
}