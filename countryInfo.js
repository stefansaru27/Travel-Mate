const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const themeChanger = document.querySelector(".theme-changer");
const countryMap = document.querySelector(".map-container");

function initMap(lat, lng) {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 7,
  });

  var marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: "Your Location",
  });
}

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;
    population.innerText = country.population.toLocaleString("en-US");
    region.innerText = country.region;
    topLevelDomain.innerText = country.tld;
    capital.innerText = country.capital;
    subRegion.innerText = country.subregion;

    initMap(country.latlng[0], country.latlng[1]);

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }

    if (country.currencies) {
      currencies.innerText = Object.values(country.currencies)
        .map((currency) => currency.name)
        .join(", ");
    }

    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(", ");
    }
  });

themeChanger.addEventListener("click", toggleDarkMode);

//AIzaSyDPP_WqSY7YqntzrJX5WMDQ1kGqnMvzrlE
