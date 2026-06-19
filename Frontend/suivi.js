const fauxSignalements = [

{
    code:"CS0001",
    titre:"Phishing Mobile Money",
    statut:"Nouveau"
},

{
    code:"CS0002",
    titre:"Arnaque Facebook",
    statut:"En cours"
},

{
    code:"CS0003",
    titre:"Fraude WhatsApp",
    statut:"Clôturé"
}

];

document
.getElementById(
    "btnRecherche"
)
.addEventListener(
    "click",
    ()=>{

const code =
document
.getElementById(
    "codeSuivi"
)
.value;

const resultat =
document
.getElementById(
    "resultat"
);

const dossier =
fauxSignalements.find(
s => s.code === code
);

if(!dossier){

    resultat.innerHTML =

    `
    <div style="
    color:red;
    font-weight:bold;">

    Aucun dossier trouvé

    </div>
    `;

    return;

}

let couleur = "";

if(
dossier.statut ===
"Nouveau"
){
    couleur="red";
}

if(
dossier.statut ===
"En cours"
){
    couleur="blue";
}

if(
dossier.statut ===
"Clôturé"
){
    couleur="green";
}

resultat.innerHTML =

`
<div
style="
padding:20px;
background:#f8fafc;
border-radius:10px;">

<h3>
${dossier.titre}
</h3>

<p>
Code :
${dossier.code}
</p>

<p>

Statut :

<span
style="
color:${couleur};
font-weight:bold;">

${dossier.statut}

</span>

</p>

</div>
`;

});
