
let cdSpec = "mapcd.vl.json";
let pumaSpec = "mappuma.vl.json";
let ntaSpec = "mapnta.vl.json";

const opt = {"renderer":"svg"};
const el = document.getElementById('map');


// this code listens to the form with map chooser; must run after DOM loads
window.onload =listenRadios;

function listenRadios() {
  radios = document.querySelectorAll('input[type=radio][name="mainRadioGroup"]');
  radios.forEach(radio => radio.addEventListener('change', () => {
    if (radio.value==='CD') {cdMapCreate()}
    else if (radio.value==='nta') {ntaMapCreate()}
    else {pumaMapCreate()}  // for if chosenField is PUMA
    ;
  }));
}


//this function creates the map
function cdMapCreate() {
vegaEmbed('#map', cdSpec, opt).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    viewObj = result.view;
  }).catch(console.error);
}

function pumaMapCreate() {
  vegaEmbed('#map', pumaSpec, opt).then(function(result) {
      // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
      viewObj = result.view;
    }).catch(console.error);
  }

  function ntaMapCreate() {
    vegaEmbed('#map', ntaSpec, opt).then(function(result) {
        // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
        viewObj = result.view;
      }).catch(console.error);
    }

cdMapCreate();
