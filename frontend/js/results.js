async function loadResults(){

const res = await fetch("https://online-voting-system-api.onrender.com/api/candidates/results");

const data = await res.json();

const candidates = data.results || data;

const div = document.getElementById("results");

div.innerHTML="";

candidates.forEach(c => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${c.name}</h3>
<p>${c.party}</p>
<p><b>Votes:</b> ${c.votes}</p>
`;

div.appendChild(card);

});

}

loadResults();