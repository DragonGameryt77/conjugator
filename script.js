let conjugaisons = {};

async function chargerJSON() {
  conjugaisons = await fetch("conjugaisons.json").then(r => r.json());
}

function chercher(verbe) {
  verbe = verbe.toLowerCase();
  let resultats = [];

  for (let infinitif in conjugaisons) {
    let modes = conjugaisons[infinitif];
    for (let mode in modes) {
      for (let temps in modes[mode]) {
        let formes = modes[mode][temps];

        // Infinitif
        if (formes.includes(verbe) && mode.toLowerCase() === "infinitif") {
          resultats.push({
            type: "infinitif",
            verbe,
            mode,
            temps
          });
        }

        // Formes conjuguées
        let index = formes.indexOf(verbe);
        if (index !== -1 && mode.toLowerCase() !== "infinitif") {
          resultats.push({
            type: "conjugue",
            verbe,
            mode,
            temps,
            personne: index + 1
          });
        }
      }
    }
  }

  return resultats;
}

async function enregistrerNotFound(verbe) {
  await fetch("/notfound", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ verbe })
  });
}

function afficher(resultats, verbe) {
  const zone = document.getElementById("resultat");
  zone.innerHTML = "";

  if (resultats.length === 0) {
    zone.textContent = `verbe non trouvé : ${verbe}`;
    enregistrerNotFound(verbe);
  } else {
    resultats.forEach(r => {
      let bloc = document.createElement("div");

      if (r.type === "infinitif") {
        bloc.innerHTML = `<b>${r.verbe}</b> est à l'<b>${r.mode}</b> <b>${r.temps}</b>.`;
      } else if (r.type === "conjugue") {
        let tempsFormate = r.temps.toLowerCase() === "imparfait" ? `à l'<b>${r.temps}</b>` : `au <b>${r.temps}</b>`;
        bloc.innerHTML = `<b>${r.verbe}</b> est conjugué ${tempsFormate} de l' <b>${r.mode}</b> à la ${r.personne}ᵉ personne.`;
      }

      zone.appendChild(bloc);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await chargerJSON();
  document.getElementById("analyser").addEventListener("click", () => {
    let v = document.getElementById("inputVerbe").value.trim();
    if (v) {
      let res = chercher(v);
      afficher(res, v);
    }
  });
});
