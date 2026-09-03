# Van Wijnen — QR-woningdossier

## Eenmalig instellen (± 10 minuten)

### 1. Firebase-project aanmaken (gratis opslag)
1. Ga naar https://console.firebase.google.com en maak een gratis project.
2. Klik in het project op het web-icoon (`</>`) om een "webapp" toe te voegen.
3. Kopieer het configuratieblokje dat je krijgt.
4. Plak die waarden in `src/firebaseConfig.js` (vervang de PLAK_HIER_... teksten).
5. Ga in het Firebase-menu naar **Firestore Database** → **Database maken** → kies
   **Testmodus** (dit is voldoende voor dit project; het maakt lezen/schrijven
   voor iedereen met de link mogelijk, wat nodig is omdat bewoners niet inloggen).

### 2. Naar GitHub uploaden
1. Maak een gratis account op https://github.com (indien nog niet aanwezig).
2. Maak een nieuwe (lege) repository, bijv. `woningdossier-vanwijnen`.
3. Upload **deze hele map** (alle bestanden en de `src`-map) naar die repository
   — niet alleen App.jsx, alles samen vormt het project.

### 3. Hosten via Vercel
1. Ga naar https://vercel.com, log in met je GitHub-account.
2. Klik "Add New… → Project", kies de zojuist geüploade repository.
3. Laat de standaardinstellingen staan (Vercel herkent automatisch Vite/React)
   en klik "Deploy".
4. Na ongeveer een minuut krijg je een vaste link, bijv.
   `woningdossier-vanwijnen.vercel.app`. Dit is de link die permanent blijft
   werken — hier verwijzen alle QR-codes straks naartoe.

## Gebruik
Open de gepubliceerde link → je ziet het beheerpaneel. Vul de gedeelde
documenten en per appartement de links in zoals besproken. Onder elk
appartement verschijnt automatisch de werkende QR-code.

## Lokaal testen (optioneel, voordat je publiceert)
Als je Node.js hebt geïnstalleerd (nodejs.org):
```bash
npm install
npm run dev
```
Opent op `http://localhost:5173`. Werkt alleen met opslaan zodra stap 1
(Firebase) is ingevuld.
