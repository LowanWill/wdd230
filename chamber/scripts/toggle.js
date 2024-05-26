const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    const header = document.querySelector("header");

    if (modeButton.textContent.includes("🌜")) {
        header.classList.toggle("dark");
        document.body.classList.toggle("dark");
        main.classList.toggle("dark");

        modeButton.textContent = "🌞";
    } else {
        header.classList.remove("dark");
        document.body.classList.remove("dark");
        main.classList.remove("dark");
        modeButton.textContent = "🌜";
    }
});