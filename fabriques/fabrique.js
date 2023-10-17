let fabriques = [
    {
        titre: "Becode Anvers",
        adresse: "Anvers, 2000 Anvers, Belgique"
    },
    {
        titre: "Becode Limburg",
        adresse: "Genk, 3600 Genk, Vlaanderen, Belgique"
    },
    {
        titre: "Becode Liège",
        adresse: "Liège, 4000 Liège, Belgique"
    },
    {
        titre: "AUF@ Ouagadougo",
        adresse: "Ouagadougou, 01 BP 1773 OUAGADOUGOU 01 Ouagadougou, Burkina Faso"
    },
    {
        titre: "MTN & SIMPLON",
        adresse: "Abidjan, 01 BP 10605 ABIDJAN 01 Abidjan, Côte d'Ivoire"
    },
    {
        titre: "Simplon Côte d’Ivoire",
        adresse: "Abidjan, 01 BP 10605 ABIDJAN 01 Abidjan, Côte d'Ivoire"
    }
];

let champs=document.getElementById('champs');
let go=document.getElementById('go');

go.addEventListener('click',()=>{
    // alert('hello')
    fabriques.forEach(element=>{
        if(element.titre.toLowerCase().includes(champs.value.toLowerCase())){
            alert(element.adresse)
        }
    })
})