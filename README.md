# Moment3 -  Enhetskonvertering
Denna responsiva webbplats är byggd med **Angular v19** med komponentbaserad struktur, routing, databindning och publicering.

---

## Innehåll

Webbplatsen innehåller följande undersidor:

- Startsida (`/start`)  
  En välkomstsida med bild, syfte och introduktion till webbplatsen.

- Konverteringssida (`/converter`)  
  En interaktiv sida där användaren kan:
  - Konvertera mellan meter och feet
  - Konvertera mellan celsius och fahrenheit

- Om-sida (`/about`)  
  En reflekterande sida som beskriver projektets genomförande, lärdomar och slutsatser.

---

## Funktionalitet

- Responsiv design med media queries
- Navigationsmeny byggd med Angulars router-modul (`routerLink`, `routerLinkActive`)
- Tvåvägsdatabindning (`[(ngModel)]`) i konverteringskomponenterna
- Användning av standalone-komponenter
- Global styling i `styles.css` och komponentbaserad CSS
- Publicering via webbhost (GitHub Pages, Netlify, Vercel eller liknande)

---

## Vad `partials/` innehåller

Partials är återanvändbara komponenter som används på sidorna:

- `mainmenu/`: Navigationsmeny mellan sidorna.
- `length-converter/`: Komponent för att konvertera mellan meter och feet.
- `temperature-converter/`: Komponent för att konvertera mellan celsius och fahrenheit.

Dessa komponenter är standalone och importeras vid behov för att bygga upp sidorna.

---

## Teknologier

- Angular 19 (standalone-komponenter)
- TypeScript
- CSS3 (responsiv design)
- FormsModule (databindning i inputfält)
- RouterModule (sidanavigation)
- Git (versionshantering och publicering)
