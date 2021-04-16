// --------- Créer les select & option pour les heures -------------
let hourSelect = document.getElementById('hour');

// ---------------- Loop 1-12 H ---------------------------
for (let i = 8; i <= 24; i++) {
  let hourOption = document.createElement('option');
  hourOption.setAttribute('value', i);
  hourOption.value = i;
  hourOption.innerText = `à ${i} h`;
  hourSelect.appendChild(hourOption);
}

// ---------- Créer option pour les colors -----------------
let colors = ["#D0A4B0", "#4C6684", "#778587", "#CFB9D3", "#7076A2", "#ECB69F", "#F2CFD7"];

// colors.forEach(element => {
  // Afficher la codivPeur en label
  // let colorDiv = document.getElementById('color');
  // let colorLabel = document.createElement('label');
  // let colorRadio = document.createElement('input');
  
  //// Créer les input type radio
  // colorRadio.setAttribute('type', 'radio');
  // colorRadio.setAttribute('name', 'color');
  // colorRadio.setAttribute('id', element);
  // colorLabel.setAttribute('for', element);
  ////Affichage de couleur 
  // colorLabel.value = element;
  // colorLabel.innerHTML = "";
  // colorLabel.style.backgroundColor = element;
  //// appendChild
  // colorDiv.appendChild(colorRadio);
  // colorDiv.appendChild(colorLabel);

  // ------ Ajouter le border la color choisi quand click --------
  
  //APRES LA CREATION DE TOUS LES ELEMENTS
 
 const colorRadio = document.querySelectorAll('input[type="radio"]');

 colorRadio.forEach( radio => {
  radio.addEventListener('click', () => {
    // get color code
    const colorName = radio.getAttribute('id');
    // labels -> tous les labels en tableau
    const labels = document.getElementsByTagName('label');
    // ajoute le border, c'est très mal fait!!!! 
    switch (colorName) {
      case colors[0]:
        labels[0].style.border = '2px solid white';
        labels[1].style.border = '';
        labels[2].style.border = '';
        labels[3].style.border = '';
        labels[4].style.border = '';
        labels[5].style.border = '';
        labels[6].style.border = '';
        break;
      case colors[1]:
        labels[0].style.border = '';
        labels[1].style.border = '2px solid white';
        labels[2].style.border = '';
        labels[3].style.border = '';
        labels[4].style.border = '';
        labels[5].style.border = '';
        labels[6].style.border = '';
        break;
      case colors[2]:
        labels[0].style.border = '';
        labels[1].style.border = '';
        labels[2].style.border = '2px solid white';
        labels[3].style.border = '';
        labels[4].style.border = '';
        labels[5].style.border = '';
        labels[6].style.border = '';
        break;
      case colors[3]:
        labels[0].style.border = '';
        labels[1].style.border = '';
        labels[2].style.border = '';
        labels[3].style.border = '2px solid white';
        labels[4].style.border = '';
        labels[5].style.border = '';
        labels[6].style.border = '';
        break;
      case colors[4]:
        labels[0].style.border = '';
        labels[1].style.border = '';
        labels[2].style.border = '';
        labels[3].style.border = '';
        labels[4].style.border = '2px solid white';
        labels[5].style.border = '';
        labels[6].style.border = '';
        break;
      case colors[5]:
        labels[0].style.border = '';
        labels[1].style.border = '';
        labels[2].style.border = '';
        labels[3].style.border = '';
        labels[4].style.border = '';
        labels[5].style.border = '2px solid white';
        labels[6].style.border = '';
        break;
      case colors[6]:
        labels[0].style.border = '';
        labels[1].style.border = '';
        labels[2].style.border = '';
        labels[3].style.border = '';
        labels[4].style.border = '';
        labels[5].style.border = '';
        labels[6].style.border = '2px solid white';
        break;
    }
  });

 });
 
// });

//----------------- Set to my plan button -----------------
  
  // plan item sera ajouté en .push()
  const planItems = [];
  // setBtn -> 'Set to my plan
  const setBtn = document.getElementById('setBtn');
    // plan -> le main input
    const plan = document.getElementById('plan');
    // planSet -> div Today's plan
  const planSet = document.querySelector('.planSet');

  // click event avec 'set to my plan'
  setBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
  
  //  // divP p -> plan.value sera affiché dedans
  // let divP = document.createElement('div');
  // divP.classList.add('divP');
  // planSet.appendChild(divP);
  let p = document.createElement('p');
  p.classList.add('planP');
  let span = document.createElement('span')
    
  // plan.value -> ajouteé dans 'planItems = []'
    let val = document.createTextNode(plan.value);
   // Si ce n'est pas vide: 
    if(plan.value.trim().length > 0) {
    planItems.push(plan.value);
    planSet.appendChild(p);
    p.appendChild(span);
    p.appendChild(val);
    } else {
      alert("No plan input !");
    }
   
  // Récupérer l'option +8 -> parce que j'ajoute in index[0]
    span.innerHTML = `${hourSelect.selectedIndex +8}h`;

   // Double clicker sur le p généré -> ça s'efface 
   p.addEventListener('dblclick', ()=> {
     p.remove();
   });

   // color name -> récupérer le color code (=id) et l'apppquer dans BG de p
   colorRadio.forEach(radioAttr => {
    const colorName = radioAttr.getAttribute('id');
    const radioChecked = radioAttr.checked;
    if(radioChecked) {
      p.style.backgroundColor = colorName;
    } 
   });
  
   // effacer input text
    plan.value = "";
  });
