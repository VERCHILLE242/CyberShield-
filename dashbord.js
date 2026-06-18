const signalements = [

{
code:"CS001",
titre:"Arnaque WhatsApp",
quartier:"Lumumba",
type:"Phishing",
statut:"Nouveau"
},

{
code:"CS002",
titre:"Faux Mobile Money",
quartier:"Tié-Tié",
type:"Fraude",
statut:"En cours"
},

{
code:"CS003",
titre:"Usurpation Facebook",
quartier:"Mvoumvou",
type:"Usurpation",
statut:"Clôturé"
}

];

const table =
document.getElementById(
"signalementsTable"
);

let nouveaux = 0;
let encours = 0;
let clotures = 0;

signalements.forEach(signalement=>{

if(signalement.statut==="Nouveau")
nouveaux++;

if(signalement.statut==="En cours")
encours++;

if(signalement.statut==="Clôturé")
clotures++;

let couleur="";

if(signalement.statut==="Nouveau")
couleur="nouveau";

if(signalement.statut==="En cours")
couleur="encours";

if(signalement.statut==="Clôturé")
couleur="cloture";

table.innerHTML +=

`
<tr>

<td>${signalement.code}</td>

<td>${signalement.titre}</td>

<td>${signalement.quartier}</td>

<td>${signalement.type}</td>

<td>

<span class="statut ${couleur}">
${signalement.statut}
</span>

</td>

<td>

<button>
Voir
</button>

</td>

</tr>

`;

});

document.getElementById(
"totalSignalements"
).innerHTML =
signalements.length;

document.getElementById(
"nouveauxSignalements"
).innerHTML =
nouveaux;

document.getElementById(
"encoursSignalements"
).innerHTML =
encours;

document.getElementById(
"cloturesSignalements"
).innerHTML =
clotures;

document.getElementById(
"urgentList"
).innerHTML =

`
<li>
⚠ Arnaque WhatsApp - Lumumba
</li>

<li>
⚠ Faux Mobile Money - Tié-Tié
</li>
`;

document
.getElementById(
"logoutBtn"
)
.addEventListener(
"click",
()=>{

localStorage.clear();

window.location.href =
"login.html";

});