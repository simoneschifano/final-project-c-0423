# MoviePlex 🍿🎞
<img text-align="center" width="30%" src="./src/assets/logo.png" />


# Descrizione 📖

MoviePlex è un'applicazione web, con focus sul front-end, che permette di visualizzare la programmazione dei film di un cinema, nonché di riservare il proprio posto in sala.
Per la sua realizzazione sono state utilizzate le API di <a href="https://www.themoviedb.org/documentation/api?language=it-IT">The Movie Database</a>, 
il numero di chiamate a queste ultime sono state ridotte al minimo indispensabile al fine ultimo dell'ottimizzazione dell'applicazione.
L'utente sarà perciò in grado di visualizzare nella homepage la lista dei film attualmente in sala, con la possibilità di applicare un filtro per categoria. Potrà
scoprire quali sono gli ipotetici film più amati dal pubblico e per tale motivo sempre disponibili in sala, attraverso la sezione "I più amati"
(all'interno dell'hamburger menu nella versione mobile).
Nella sezione "Card e Promo", intuitivamente, l'utente troverà una pagina statica contenente informazioni sulle fidelity card acquistabili al cinema (sezione accessibile
ancora una volta all'interno dell'hamburger menu nella versione mobile).
Attraverso la lente in alto a destra, è possibile attivare una ricerca per titolo del film. Il risultato sarà una card del film ricercato attraverso cui si potrà accedere 
al dettaglio dello stesso, o direttamente all'acquisto del biglietto nella versione desktop.
Al click dell'icona con l'omino, l'utente potrà effettuare il login qualora fosse già registrato o, in caso contrario, registrarsi. Una volta effettuato l'accesso la modale
del profilo presenterà delle informazioni di base, quali una foto fittizia reperita da <a href="https://robohash.org/"> RoboHash </a> e lo username che l'utente 
ha inserito in fase di registrazione.
Infine, attraverso il bottone "Acquista un biglietto" l'utente non loggato sarà reindirizzato alla pagina di login/signup, dopo l'accesso potrà effettivamente comprare il 
biglietto.
La pagina di acquisto richiede la scelta di una data, un orario e almeno un posto a sedere, in caso contrario non sarà possibile procedere. Se le informazioni sono state 
inserite correttamente si viene reindirizzati alla pagina finale, quella di pagamento, in cui avremo la possibilità di scegliere il metodo di pagamento (condizione 
necessaria per procedere), un promemoria sul totale da pagare e, una volta effettuato il pagamento, apparirà una modale contente la data, l'orario e il film scelti dall'utente.
Questa, una volta chiusa riporta alla homepage.

# Tecnologie utilizzate 🚀

<code><img width="10%" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/sass-lang/sass-lang-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/npmjs/npmjs-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg"></code>
<code><img width="10%" src="https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg"></code>







# Istruzioni 📌

Avviare il server:
```
npm run dev

```

Istallare i node modules:

```
npm i 
```

# Per effettuare il login senza essere registrati 🗝:

-<b>Username</b>: Chiara <b>Password</b>: chianico <br/>
-<b>Username</b>: Erica <b>Password</b>: ericandi <br/>
-<b>Username</b>: Mattia <b>Password</b>: mattinini <br/>
-<b>Username</b>: Valentina <b>Password</b>: valeurzi <br/>
-<b>Username</b>: Valerio <b>Password</b>: vale02 <br/>

# Team 👩🏻‍💻👩🏻‍💻👩🏻‍💻👨🏻‍💻👨🏻‍💻

Il progetto è stato realizzato in gruppo utilizzando la metodologia Agile.
In particolare, una volta stabiliti i task, ogni componente del team ha proseguito alla scrittura del codice. Ogni giorno il progresso del lavoro è stato monitorato
dall'intero gruppo e, nel caso di ostacoli, si è proceduto al superamento degli stessi attraverso una programmazione di gruppo in condivisione.
L'approccio ha favorito il completamento dei task e la realizzazione finale del progetto.

-Chiara Nicoletti <a href="https://www.linkedin.com/in/chiara-nicoletti/">Linkedin </a> · <a href="https://github.com/KalaPatel">GitHub </a> <br/>
-Erica Candido <a href="https://www.linkedin.com/in/erica-candido-8085a4259/">Linkedin </a> · <a href="https://github.com/EricaCandido">GitHub </a><br/>
-Mattia Ninì <a href="https://www.linkedin.com/in/mattia-nini-64235223b/">Linkedin </a> · <a href="https://github.com/MattiaNini">GitHub </a><br/>
-Valentina Urzì <a href="https://www.linkedin.com/in/valentina-urz%C3%AC-0a3a86183/">Linkedin </a> · <a href="https://github.com/ValentinaUrzi">GitHub </a><br/>
-Valerio La Venuta <a href="https://www.linkedin.com/in/valerio-la-venuta-103621258">Linkedin </a> · <a href="https://github.com/ValerioLV">GitHub </a>
