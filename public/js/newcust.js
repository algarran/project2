let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;

document.querySelector("#date").valueAsDate = today;