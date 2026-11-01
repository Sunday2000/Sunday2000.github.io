// @ts-nocheck
import React from 'react';
import './index.css';
import { META, LANG_PATH, SITE_URL, langFromPath } from './seo';
const IDS = ['hero','projects','skills','certifications','experience','contact'];
const NAV = [['hero','Accueil','Home'],['projects','Projets','Projects'],['skills','Compétences','Skills'],['certifications','Certifications','Certifications'],['experience','Expérience','Experience']];
const T = {
  fr:{ skip:'Aller au contenu', cv:'CV', contact:'Me contacter', avail:'Disponible pour de nouveaux projets', busyHero:'En mission · ouvert aux échanges', hello:'Bonjour, je suis', role:'Développeur Full Stack',
    heroP:"J'aide les entreprises à créer des applications web performantes et modernes. Passionné par le développement backend et frontend, je transforme vos idées en solutions digitales.",
    seeProjects:'Voir mes projets', eyProjects:'Réalisations', hP1:'Mes', hP2:'Projets', subProjects:'Découvrez une sélection de mes réalisations récentes en développement web',
    featured:'Projet phare', seeProject:'Voir le projet', private:'Application interne · code privé', live:'Site en ligne',
    eySkills:'Stack technique', hS1:'Mes', hS2:'Compétences', subSkills:'Technologies et outils que je maîtrise pour créer des solutions web performantes', integr:'Intégrations & API tierces', methods:'Méthodologies',
    eyCerts:'Formation continue', hC1:'Mes', subCerts:'Certifications professionnelles validant mon expertise dans les technologies modernes', seeCert:'Voir le certificat', verify:'Vérifier sur Coursera',
    eyExp:'Parcours', hE1:'Mon', hE2:'Expérience', subExp:'Parcours professionnel et missions réalisées dans le développement web', st1:"Années d'expérience", st2:'Projets en production présentés', st3:'Tests automatisés sur un seul projet',
    eyContact:'Travaillons ensemble', hCt1:'Me', hCt2:'Contacter', subContact:"Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !", formTitle:'Envoyez-moi un message',
    fName:'Nom complet *', phName:'Votre nom', phEmail:'votre@email.com', fSubject:'Sujet *', phSubject:'Sujet de votre message', phMsg:'Décrivez votre projet ou votre demande...', send:'Envoyer le message',
    infoTitle:'Informations de contact', phone:'Téléphone', locLabel:'Localisation', loc:'Abomey-Calavi, Bénin · remote UTC+1', follow:'Suivez-moi', availability:'Disponibilité', busyC:'En mission · disponibilité limitée',
    reply:"Je réponds généralement sous 24h. Pour les urgences, n'hésitez pas à m'appeler directement.",
    footP:"Développeur Full Stack passionné par la création d'applications web modernes et performantes. Spécialisé en Laravel, Vue.js et React.", city:'Abomey-Calavi, Bénin', start:'Démarrer un projet', rights:'© 2026 Sunday KODONON · Tous droits réservés', top:'↑ Retour en haut',
    toastA:'Message prêt !', toastB:"Votre messagerie s'ouvre avec le message pré-rempli.", context:'Contexte', myRole:'Mon rôle', achievements:'Réalisations', visit:'Visiter', nda:'Client sous NDA · pas de lien public' },
  en:{ skip:'Skip to content', cv:'Resume', contact:'Contact me', avail:'Available for new projects', busyHero:'On assignment · open to conversations', hello:"Hi, I'm", role:'Full Stack Developer',
    heroP:'I help businesses build fast, modern web applications. Passionate about both backend and frontend development, I turn your ideas into digital solutions.',
    seeProjects:'View my projects', eyProjects:'Work', hP1:'My', hP2:'Projects', subProjects:'A selection of my recent web development work',
    featured:'Featured project', seeProject:'View project', private:'Internal application · private code', live:'Live site',
    eySkills:'Tech stack', hS1:'My', hS2:'Skills', subSkills:'Technologies and tools I use to build high-performing web solutions', integr:'Integrations & third-party APIs', methods:'Methodologies',
    eyCerts:'Continuous learning', hC1:'My', subCerts:'Professional certifications backing my expertise in modern technologies', seeCert:'View certificate', verify:'Verify on Coursera',
    eyExp:'Career', hE1:'My', hE2:'Experience', subExp:'Professional background and web development assignments', st1:'Years of experience', st2:'Production projects showcased', st3:'Automated tests on a single project',
    eyContact:"Let's work together", hCt1:'Get in', hCt2:'touch', subContact:"Have a project in mind? Get in touch and let's talk about it!", formTitle:'Send me a message',
    fName:'Full name *', phName:'Your name', phEmail:'you@email.com', fSubject:'Subject *', phSubject:'What is it about?', phMsg:'Describe your project or request...', send:'Send message',
    infoTitle:'Contact details', phone:'Phone', locLabel:'Location', loc:'Abomey-Calavi, Benin · remote UTC+1', follow:'Follow me', availability:'Availability', busyC:'On assignment · limited availability',
    reply:'I usually reply within 24 hours. For anything urgent, feel free to call me directly.',
    footP:'Full Stack developer who loves building modern, high-performing web applications. Specialized in Laravel, Vue.js and React.', city:'Abomey-Calavi, Benin', start:'Start a project', rights:'© 2026 Sunday KODONON · All rights reserved', top:'↑ Back to top',
    toastA:'Message ready!', toastB:'Your email app opens with the message pre-filled.', context:'Context', myRole:'My role', achievements:'Highlights', visit:'Visit', nda:'Client under NDA · no public link' }
};
const PROJECTS = [
  {"id":"sim","kind":"Application web fullstack · Laravel 13 + React 18","role":"Développeur Full Stack","title":"GSK SIM : plateforme de gestion de numéros et de suivi des partenaires","client":"Réseau de distribution de cartes SIM · Bénin","summary":"Application web fullstack (Laravel 13 + React 18) pour gérer un réseau de distribution de cartes SIM au Bénin.","context":"Le client distribue des cartes SIM via un réseau hiérarchique : Super Dealers, Sous Super Dealers, puis numéros agents (AGT2, Agent Coma, AGT3). Des partenaires externes exploitent ces numéros comme points de vente (PDV). L'ancien outil ne suivait plus la croissance du parc. Il fallait une plateforme unique pour cartographier le réseau, savoir quels partenaires sont en règle, affecter les numéros aux vendeurs terrain et sortir des statistiques fiables.","roleLong":"J'ai conçu et développé l'application de bout en bout, à partir d'un cahier des charges : API REST, interface d'administration, formulaire public d'inscription, reprise des données de l'ancien système et déploiement.","groups":[{"title":"Fonctionnalités principales","items":["Parc de numéros : CRUD complet avec les règles de hiérarchie (un AGT3 est lié à un seul Agent Coma), numéros « maison » ou « linker », géolocalisation, pièces jointes (engagements signés en image ou PDF).","Points de vente : calcul automatique des PDV (un AGT2 seul ou une paire Agent Coma + AGT3). Les données partagées se propagent à tous les numéros d'un même PDV.","Statut « à jour » : un partenaire ne peut être déclaré à jour qu'avec toutes ses pièces (CIP, RCCM, IFU, photo du siège). Ce statut s'applique à tous ses numéros et verrouille leurs champs.","Suivi des dossiers partenaires : un workflow en 7 états (inscription, prise en charge, complétude, clôture, validation, rejet, annulation). Un dossier n'est attribué qu'à un seul agent TMA, et chaque changement d'étape est horodaté.","Formulaire d'inscription public, accessible sans compte.","Affectation aux vendeurs (VM) : un VM peut s'attribuer un numéro seulement si celui-ci est à jour.","Tableau de bord et couverture : répartition des types de numéros, taux de numéros à jour, part maison/linker, couverture par VM et par agence.","Filtres avancés : filtre spatio-temporel (département, commune, arrondissement, quartier, en autocomplétion, plus une période) et filtre par mode d'approvisionnement.","Export Excel sur toutes les listes.","Référentiels : agences et annexes, services, utilisateurs, localités.","Historique : chaque modification est tracée (qui, quoi, quand), et la suppression est logique, avec restauration possible."]},{"title":"Points techniques marquants","items":["Permissions fines, champ par champ : les rôles se composent librement à partir des permissions, et un utilisateur peut cumuler plusieurs rôles. Selon ses droits, il peut modifier tout le numéro ou seulement certains groupes de champs (localité, MoMo, agence, partenaire). Le backend est la seule source de la règle : il renvoie au front la liste des champs modifiables, et le front grise les autres. Le rôle « VM privé » ne voit qu'une partie des données des numéros qu'il n'a pas mis à jour.","State Pattern pour le workflow des dossiers : chaque état est une classe qui définit ses transitions, son libellé et ses conditions de passage.","Transactions avec nettoyage des fichiers : si une transaction échoue, les fichiers déjà téléversés sont supprimés, pour ne pas laisser de fichiers orphelins sur le disque.","Migration des données : import Excel des données de l'ancien système, scripts de correction et de dédoublonnage (conflits de NPI), et migration de schéma sans perte (déplacement des promoteurs vers une table dédiée).","Anonymisation de la base : un seeder remplace les données personnelles en place, sans casser les relations, pour pouvoir travailler sur une copie réaliste de la production.","Sécurité : authentification OAuth2 par jeton (Laravel Passport), session chiffrée en AES côté client, validation centralisée dans des Form Requests.","Qualité : plus de 800 tests PHPUnit (fonctionnels et unitaires), dont une matrice qui vérifie chaque route pour chaque permission.","Front-end : SPA React découpée en services API, hooks personnalisés et composants réutilisables (tableau triable, multi-select, modales, filtres). Build Vite multi-pages, Tailwind compilé, déploiement Apache avec cache des assets versionnés et en-têtes de sécurité."]}],"metrics":[],"stack":["PHP 8.3","Laravel 13","Laravel Passport","Spatie Permission","Spatie Activitylog","Laravel Excel","MySQL","PHPUnit","React 18","React Router 6","Vite","Tailwind CSS","Axios","CryptoJS","IMask","date-fns"],"link":null,"shots":[["sim-1","Tableau de bord : répartition des types de numéros, taux de numéros à jour, part maison/linker et couverture."],["sim-2","Parc de numéros : filtre spatio-temporel, filtre par mode d’approvisionnement et export Excel."],["sim-6","Ajout de numéro : champs modifiables selon les permissions, les autres sont grisés."],["sim-3","Partenaires : numéros détenus, PDV et statut « à jour »."],["sim-4","Suivi des dossiers partenaires : workflow en 7 états."],["sim-5","Rôles composés librement à partir des permissions."]],"points":[]},
  { id:'ecom', kind:'Application web fullstack · Laravel 9 + Vue 3', role:'Développeur Full Stack', title:'E-COMMANDE : plateforme de gestion d\u2019un réseau de distribution de services financiers', client:'Distributeur agréé de services financiers · Bénin · depuis mars 2023',
    summary:"Application web full-stack qui permet à un distributeur de services financiers et numériques au Bénin de piloter son réseau de partenaires et de points de vente : opérations clients, commandes et stock, dépôts, calcul et retrait des commissions, tableaux de bord en temps réel.",
    context:"Un distributeur agréé revend, via un réseau de partenaires et de points de vente, des cartes Visa prépayées, des abonnements TV (Canal+), le paiement de factures d'eau et d'électricité et des services de transfert Ecobank (Rapid Transfert, Xpress). Avant la plateforme, le suivi des opérations, des soldes et des commissions de chaque partenaire était manuel. E-COMMANDE centralise tout ce cycle, de la saisie d'une opération en agence jusqu'au paiement des commissions.",
    roleLong:"Développeur full-stack sur l'ensemble du projet depuis mars 2023 : conception de l'architecture, développement du back-end et du front-end, optimisation, sécurité et déploiement en production.",
    groups:[{title:'Fonctionnalités', items:["4 profils : administrateurs, agents de vérification, partenaires et leurs points de vente. Chaque compte a des permissions fines, configurables utilisateur par utilisateur.",
      "Opérations clients : saisie avec pièces justificatives, contrôles de validité (identité, âge, formats), puis vérification par un agent (validation, rejet ou annulation) avec un historique complet de chaque changement de statut.",
      "Compte partenaire : dépôts validés manuellement, solde en temps réel, relevés, points par activité et par partenaire, fiches de recouvrement.",
      "Moteur de commissions : taux configurables par produit et par partenaire, prise en compte des sous-réseaux, retrait des commissions avec garantie qu'une commission ne peut jamais être payée deux fois.",
      "Commandes et stock : bons de commande, suivi du stock par lots, tarifs différenciés selon le profil du partenaire.",
      "Challenges commerciaux : objectifs de vente, évaluation automatique, primes et exports Excel.",
      "Notifications en temps réel pour les agents à chaque nouvelle opération ou nouveau dépôt.",
      "Rapports automatiques : bilan quotidien et rapport des soldes générés chaque jour et envoyés sur Telegram, exports Excel et PDF."]},
      {title:'Points techniques marquants', items:["Event sourcing : chaque mouvement financier (dépôt, opération, retrait de commission, correction de solde) est enregistré comme un événement immuable, puis projeté sur les soldes. On obtient un historique auditable et la possibilité de reconstruire ou de réparer les données.",
      "Machines à états pour le cycle de vie de chaque type d'opération, et une couche Service qui sépare la logique métier des contrôleurs.",
      "Optimisation des performances : suppression d'un problème de requêtes N+1 dans le calcul des commissions. Le tableau de bord administrateur est passé de 11 s et 19 000 requêtes SQL à 0,8 s et 6 requêtes, avec une non-régression vérifiée en comparant automatiquement toutes les réponses de l'API avant et après.",
      "Fiabilité financière : double contrôle des commissions déjà versées, verrou contre les retraits simultanés, et scripts de réparation des données qu'on peut relancer sans effet de bord.",
      "Protection des données personnelles : les notifications temps réel ne transportent que les données strictement nécessaires (identifiant, code, type, montant, date) ; un outil d'anonymisation de la base est disponible pour les environnements de test ; les CGU et la politique de confidentialité ont été rédigées conformément au code du numérique béninois.",
      "Une même plateforme déclinée pour plusieurs distributeurs, avec des modules activables selon le client."]}],
    metrics:[],
    stack:['Laravel 9','PHP 8','Vue 3','Spatie Event Sourcing','MySQL / MariaDB','Pusher','Laravel Sanctum','Laravel Excel','DomPDF','Telegram Bot SDK','Vite','Vue Router','Vuex','Bootstrap 5','ApexCharts','Laravel Echo'], link:null,
    shots:[['ecom/01','Tableau de bord : soldes, commissions partenaires et externes, liste des commissions à retirer.'],['ecom/02','Liste des distributeurs : taux de partenaires à jour, filtres, sélection multiple et gestion des permissions.'],['ecom/03','Relevé de compte : chaque mouvement avec balance avant / après, code d\u2019opération et initiateur.'],['ecom/04','Statistiques par opération : graphes mensuels et annuels (ApexCharts).'],['ecom/05','Point périodique des activités et des commissions par partenaire.'],['ecom/06','Bons de commande : statut, livreur, investissement, commission et montant.'],['ecom/07','Stock de produits : cartes Visa suivies par lot et liées au bon de commande.'],['ecom/08','Connexion par email ou téléphone, et demande de partenariat.']] },
  { id:'blwm', kind:'Application web & PWA · Laravel + React', role:'Développeur Full Stack principal', title:'BLWM : plateforme de gestion pour un réseau d\u2019églises', client:'Life Word Mission · Bénin · freelance, depuis février 2025',
    summary:"Plateforme qui centralise un réseau d'églises sur trois niveaux : structure, responsables, planning, rapports d'activité configurables, synthèses Word générées automatiquement et validation audio publiée sur Telegram.",
    context:"Life Word Mission est un réseau d'églises au Bénin, organisé sur trois niveaux : une coordination nationale, 6 districts et environ 70 assemblées locales. Sept départements (Communication, Chorale, Protocole, Mission, Santé, Jeunesse, Famille) sont présents à chacun de ces niveaux. Leur suivi se faisait surtout à la main, avec des comptes rendus Word et PDF échangés entre les responsables.",
    roleLong:"Développeur fullstack principal, du back-end au front-end : conception de la base de données, API REST, interface, notifications, déploiement et suivi des erreurs en production.",
    points:["Formulaires dynamiques. L'administrateur définit les champs de chaque rapport pour chaque département et chaque type d'activité : texte, listes, cases à cocher, dates, fichiers, audio, et champs répétables. La validation côté serveur est générée à partir de ces définitions, avec la gestion des fichiers lors des modifications (fichiers existants conservés, nouveaux fichiers ajoutés).",
      "Droits d'accès à plusieurs niveaux. Rôles et permissions (Spatie), plus une limite selon le poste occupé : un responsable national voit tout, un délégué ne voit que son district, un porte-parole que son assemblée.",
      "Génération de rapports Word. Une architecture Factory / Strategy propre à chaque département et à chaque niveau combine les rapports sources dans un document Word (PhpWord), en gardant le lien vers les rapports d'origine.",
      "Temps réel et notifications push. Notifications en direct (Laravel Broadcasting, Pusher, Laravel Echo) et notifications push web passant par un service worker écrit à la main.",
      "Suivi des erreurs en production. Sentry est intégré côté front et côté back. Les erreurs sont regroupées par endpoint, les données personnelles sont masquées et chaque erreur est liée à l'utilisateur concerné.",
      "Autres fonctionnalités : PWA installable · carte des assemblées (Leaflet) · calendrier (FullCalendar) · export Excel des organigrammes · médiathèque audio publique · actualités · module de formation · authentification JWT et réinitialisation du mot de passe · documentation d'API générée automatiquement (Scramble) · tests automatisés (PHPUnit)"],
    metrics:[], stack:['Laravel 13','PHP 8.3','MySQL','JWT','Spatie Permission','PhpWord','Laravel Excel','Telegram Bot SDK','WebPush','Pusher','Sentry','PHPUnit','React 18','Vite','Tailwind CSS','React Router','Axios','Laravel Echo','FullCalendar','Leaflet','vite-plugin-pwa'], link:null,
    shots:[['blwm/01','Tableau de bord : activités à venir, rapports récents et carte du réseau.'],['blwm/02','Carte des assemblées (Leaflet) sur l’ensemble du Bénin.'],['blwm/03','Programmation : calendrier partagé des activités (FullCalendar).'],['blwm/12','Rapports d’activité envoyés, avec filtres et statut.'],['blwm/11','Nouveau rapport : formulaire généré à partir de la configuration de l’administrateur.'],['blwm/14','Variables d’un type d’activité : champs configurables du formulaire de rapport.'],['blwm/15','Édition d’un champ : type, options, champ obligatoire ou répétable.'],['blwm/13','Types d’activité et configuration de leurs formulaires.'],['blwm/10','Validation audio : prédications et témoignages avant publication sur Telegram.'],['blwm/07','Rôles & permissions (Spatie).'],['blwm/06','Actualités du réseau.'],['blwm/05','Module de formation.']] },
  { id:'sak', kind:'Site web · Laravel + Vue.js', role:'Développeur Full Stack', title:'SAK SERVICES : agence de services financiers', client:'SAK SERVICES · Cotonou · partenaire UBA & Ecobank',
    summary:"Site d'agence de services financiers : cartes Visa prépayées, transferts internationaux, Mobile Money, Canal+, DHL et assurances.",
    context:"L'agence propose cartes Visa prépayées, transferts internationaux (RIA, MoneyGram, RapidTransfer), Mobile Money, Canal+, DHL et assurances. Le site réunit toutes ces offres et oriente le client vers l'agence ou WhatsApp.",
    roleLong:'Développeur full-stack',
    points:["Interface responsive : hero, services en onglets sans rechargement, étapes, FAQ en accordéon.","Formulaire de contact validé avec choix du sujet et contact WhatsApp direct.","Accès inscription partenaire et connexion client.","SEO : métadonnées Open Graph et balises géographiques locales."],
    metrics:[], stack:['Laravel','Vue.js','Tailwind CSS','Responsive','SEO'], link:'https://sak-service.net', linkLabel:'sak-service.net',
    shots:[['sak-1','Accueil : proposition de valeur, badge partenaires, deux appels à l\u2019action et chiffres clés.'],['sak-2','Services en onglets : chaque offre a son panneau, sans rechargement de page.'],['sak-3','FAQ en accordéon sur les cartes Visa, transferts, Mobile Money, Canal+, DHL et assurances.']] },
  { id:'saf', kind:'Site web · Laravel + Vue.js', role:'Développeur Full Stack', title:'SAF OLA SERVICES : agence de services financiers', client:'SAF OLA SERVICES · Cotonou',
    summary:"Site présentant toute l'offre de l'agence, avec statut ouvert / fermé calculé en direct, carte Google intégrée et contact WhatsApp.",
    context:"Cartes Visa UBA et Ecobank, solutions Ecobank, transferts, Mobile Money, Canal+, assurances et point Super Marchand : le site présente toute l'offre de l'agence au même endroit.",
    roleLong:'Développeur full-stack',
    points:["Carrousel d'accueil avec flèches et indicateurs, services en onglets, sections confiance et étapes.","Statut ouvert / fermé calculé en direct à partir des horaires d'ouverture.","Carte Google intégrée, bouton WhatsApp, accès partenaire et connexion client."],
    metrics:[], stack:['Laravel','Vue.js','Tailwind CSS','Google Maps','Responsive'], link:'https://safolaservices.com/', linkLabel:'safolaservices.com',
    shots:[['saf-1','Carrousel d\u2019accueil avec navigation, appels à l\u2019action et badges de confiance.'],['saf-2','Services en onglets : Visa, Ecobank, transferts, Mobile Money, Canal+, assurances, Super Marchand.'],['saf-3','Contact : bouton WhatsApp, carte Google intégrée et statut ouvert / fermé en direct.']] },
  { id:'afn', kind:'Site vitrine · React + Vite', role:'Développeur Front-end', title:'Afrika Nature : site vitrine React optimisé SEO', client:'Afrika Nature · Abomey-Calavi · agroalimentaire',
    summary:"Site one-page pour une marque agroalimentaire : catalogue de 10 produits, points de vente dans 3 pays, pré-rendu et SEO technique.",
    context:"La marque transforme le souchet en lait végétal, farines, liqueurs, huile et biscuits, vendus au Bénin, au Togo et en Côte d'Ivoire. Le site devait présenter la gamme, rassurer les consommateurs et attirer distributeurs et investisseurs.",
    roleLong:'Développeur front-end',
    points:["Site one-page rapide : catalogue de 10 produits, bienfaits, impact, points de vente par pays, contact WhatsApp.","Fiches produits centralisées dans un fichier de données : le client ajoute un produit sans toucher à la mise en page.","Pré-rendu HTML statique, données structurées JSON-LD, sitemap et robots.txt générés au build, aperçus Open Graph.","Configuration Apache : HTTPS forcé, cache, compression et en-têtes de sécurité."],
    metrics:[{v:'10',l:'produits au catalogue'},{v:'3',l:'pays de distribution'}], stack:['React 18','Vite','Pré-rendu SSR','JSON-LD','Apache'], link:'https://africa-nature.xedomi.com/', linkLabel:'africa-nature.xedomi.com',
    shots:[['afn-1','Accueil : positionnement de la marque, appels à l\u2019action et chiffres clés.'],['afn-2','Catalogue produits avec catégories et formats, alimenté par un fichier de données.'],['afn-3','Points de vente par pays et contact direct.']] }
];
const EXPS = [
  { period:'Juin 2023 – Août 2025', type:'CDI', location:'Bénin', role:'Développeur Full Stack', org:"Institut Africain de Suivi et d'Évaluation d'Impact (Le Baromètre)",
    groups:[{title:null, items:["Plateformes de suivi-évaluation développées en front et back, de la modélisation UML à la mise en production.","Moteur de formules dynamiques : les utilisateurs définissent les calculs d'indicateurs, recalculés en temps réel avec une évaluation sécurisée.","Formulaires dynamiques générés à partir de schémas backend variables (champs et validations à la volée).","API REST JSON pour les modules de collecte et les exports d'indicateurs ; tableaux de bord interactifs."]}],
    stack:['Laravel 10','Vue.js 3','REST API','MySQL','UML'] },
  { period:'Mars 2021 – 2023', type:'Freelance', location:'Bénin · remote', role:'Consultant indépendant · Full Stack', org:'Clients au Bénin',
    groups:[{title:'SAK Services · secteur financier, 2021', items:["Plateforme d'opérations financières : workflows de validation / rejet et contrôle d'accès par rôles.","API REST, intégration du paiement QOSIC, sauvegardes automatiques sur Google Drive.","Optimisation SQL et refactoring des opérations critiques."]},
            {title:'GSK Groupe · gestion opérationnelle, 2023', items:["Gestion du personnel, des partenaires, des commandes et des stocks avec permissions RBAC.","Tableau de bord statistique multicritère et gestion simplifiée des commissions.","TDD sur les modules critiques (validation des transactions, permissions)."]}],
    stack:['Laravel','Vue.js','QOSIC','Google Drive API','PHPUnit'] },
  { period:'Août 2021 – Août 2022', type:'Stage', location:'Bénin', role:'Développeur Web', org:'Beewton',
    groups:[{title:null, items:["Applications SaaS Laravel / Vue.js développées et maintenues en équipe Agile.","API REST sur mesure et intégrations tierces (PayPal, KKiapay, Google Drive).","Modélisation UML et tests fonctionnels pour valider les livrables."]}],
    stack:['Laravel','Vue.js','PayPal','KKiapay','Scrum'] }
];
const TYPE_C = { CDI:['#E6EEFD','#1D4ED8'], Freelance:['#DCF5E5','#15803D'], Stage:['#FEF3C7','#B45309'] };
const SKILLS = [
  ['Backend',[['PHP 8+',1],['Laravel',1],'Eloquent ORM','API REST JSON','GraphQL',['Laravel Passport · Spatie Permission',0,'Auth & rôles']]],
  ['Frontend',[['Vue.js 3',1],'React','Vuex · Vuetify','React Router','Tailwind CSS',['HTML5 · CSS3',0,'Responsive']]],
  ['Bases de données',['MySQL','SQL avancé',['Optimisation de requêtes',0,'Index, refactoring'],'Modélisation relationnelle',['PostgreSQL',0,'Bases']]],
  ['DevOps & Outils',['Docker',['Apache · Nginx',0,'HTTPS, cache, compression'],'Vite · Composer','Git · GitHub · Bitbucket','PHPUnit',['Sentry',0,'Suivi des erreurs']]]
];
const CV = (id, mark, org, title, date) => ({ src:'coursera', mark, title, issuer: org + ' · Coursera · ' + date, pdf:'/assets/certs/coursera-' + id + '.pdf', verify:'https://coursera.org/verify/' + id });
const OC = (f, title, date) => ({ src:'oc', mark:'OC', title, issuer:'OpenClassrooms · ' + date, pdf:'/assets/certs/' + f + '.pdf', verify:null });
const CERTS = [
  CV('SHR193NKOSZV','IBM','IBM','Databases and SQL for Data Science with Python','nov. 2025'),
  CV('VXCL0TDKPZW5','Meta','Meta','Advanced React','avr. 2025'),
  CV('6M6PPI4FGI1L','Meta','Meta','React Basics','mars 2025'),
  CV('8LRFR736SYCU','IBM','IBM','Python for Data Science, AI & Development','févr. 2025'),
  CV('2I2DKJG6XFHS','IBM','IBM','Data Science Methodology','févr. 2025'),
  CV('US1Z054LYKBU','IBM','IBM','Tools for Data Science','déc. 2024'),
  CV('C30RY00RUZSW','IBM','IBM','What is Data Science?','déc. 2024'),
  OC('oc-objectif-ia','Objectif IA : initiez-vous à l\u2019intelligence artificielle','oct. 2024'),
  OC('oc-agile','Devenez développeur agile','août 2024'),
  OC('oc-c','Apprenez à programmer en C','août 2024'),
  OC('oc-laravel','Découvrez le framework PHP Laravel','août 2024'),
  OC('oc-docker','Optimisez votre déploiement en créant des conteneurs avec Docker','juin 2022'),
  OC('oc-git','Gérez du code avec Git et GitHub','avr. 2022'),
  OC('oc-html-css','Créez votre site web avec HTML5 et CSS3','avr. 2020'),
  OC('oc-projet','Gérez votre projet informatique facilement','févr. 2020'),
  OC('oc-jquery','Introduction à jQuery','déc. 2019'),
  { src:'other', mark:'EN', title:'Certificat d\u2019anglais', issuer:'Langue', pdf:'/assets/certs/anglais.pdf', verify:null }
];
const CERT_TABS = [['all','Toutes','All'],['coursera','Coursera · IBM & Meta','Coursera · IBM & Meta'],['oc','OpenClassrooms','OpenClassrooms'],['other','Langues','Languages']];
const MONTH_EN = { 'nov.':'Nov', 'avr.':'Apr', 'mars':'Mar', 'févr.':'Feb', 'déc.':'Dec', 'oct.':'Oct', 'août':'Aug', 'juin':'Jun' };
const enDate = (s) => s.replace(/(nov\.|avr\.|mars|févr\.|déc\.|oct\.|août|juin)/, (m) => MONTH_EN[m]);
const SK_EN = { 'Bases de données':'Databases', 'DevOps & Outils':'DevOps & Tools', 'SQL avancé':'Advanced SQL', 'Optimisation de requêtes':'Query optimization', 'Index, refactoring':'Indexes, refactoring', 'Modélisation relationnelle':'Relational modeling', 'Bases':'Basics', 'Auth & rôles':'Auth & roles', 'HTTPS, cache, compression':'HTTPS, caching, compression', 'Revue de code':'Code review', 'Suivi des erreurs':'Error tracking' };
const TYPE_EN = { CDI:'Full-time', Freelance:'Freelance', Stage:'Internship' };
const PROJECTS_EN = {
  sim:{"kind":"Full-stack web app · Laravel 13 + React 18","role":"Full Stack Developer","title":"GSK SIM: number management and partner tracking platform","client":"SIM card distribution network · Benin","summary":"Full-stack web application (Laravel 13 + React 18) to manage a SIM card distribution network in Benin.","context":"The client distributes SIM cards through a hierarchical network: Super Dealers, Sub Super Dealers, then agent numbers (AGT2, Agent Coma, AGT3). External partners operate these numbers as points of sale (POS). The old tool could no longer keep up with the growing inventory. A single platform was needed to map the network, know which partners are compliant, assign numbers to field sellers and produce reliable statistics.","roleLong":"I designed and built the application end to end from a specification: REST API, admin interface, public registration form, migration of data from the old system and deployment.","groups":[{"title":"Key features","items":["Number inventory: full CRUD with hierarchy rules (an AGT3 is linked to a single Agent Coma), \"in-house\" or \"linker\" numbers, geolocation, attachments (signed commitments as image or PDF).","Points of sale: automatic POS calculation (a single AGT2 or an Agent Coma + AGT3 pair). Shared data propagates to every number of the same POS.","\"Up to date\" status: a partner can only be marked up to date with all documents (CIP, RCCM, IFU, head-office photo). The status applies to all their numbers and locks their fields.","Partner file tracking: a 7-state workflow (registration, assignment, completeness, closing, approval, rejection, cancellation). Each file is assigned to a single TMA agent, and every step change is timestamped.","Public registration form, accessible without an account.","Seller (VM) assignment: a VM can claim a number only if it is up to date.","Dashboard and coverage: number type breakdown, up-to-date rate, in-house/linker share, coverage by VM and by branch.","Advanced filters: spatio-temporal filter (department, commune, district, neighborhood, with autocomplete, plus a date range) and filter by supply mode.","Excel export on every list.","Reference data: branches and annexes, services, users, localities.","History: every change is logged (who, what, when), with soft delete and restore."]},{"title":"Technical highlights","items":["Fine-grained, field-level permissions: roles are freely composed from permissions, and a user can hold several roles. Depending on their rights, they can edit the whole number or only certain field groups (locality, MoMo, branch, partner). The backend is the single source of truth: it sends the front end the list of editable fields, and the front end greys out the rest. The \"private VM\" role only sees part of the data on numbers it did not update.","State Pattern for the file workflow: each state is a class defining its transitions, label and transition conditions.","Transactions with file cleanup: if a transaction fails, already-uploaded files are deleted so no orphan files are left on disk.","Data migration: Excel import of legacy data, correction and de-duplication scripts (NPI conflicts), and lossless schema migration (moving promoters to a dedicated table).","Database anonymization: a seeder replaces personal data in place without breaking relations, to work on a realistic copy of production.","Security: OAuth2 token authentication (Laravel Passport), AES-encrypted client-side session, validation centralized in Form Requests.","Quality: 800+ PHPUnit tests (feature and unit), including a matrix that checks every route for every permission.","Front end: React SPA split into API services, custom hooks and reusable components (sortable table, multi-select, modals, filters). Multi-page Vite build, compiled Tailwind, Apache deployment with versioned asset caching and security headers."]}],"points":[],"mlabels":[],"caps":["Dashboard: number type breakdown, up-to-date rate, in-house/linker share and coverage.","Number inventory: spatio-temporal filter, supply-mode filter and Excel export.","Add number: fields editable according to permissions, the rest greyed out.","Partners: held numbers, POS and \"up to date\" status.","Partner file tracking: 7-state workflow.","Roles freely composed from permissions."]},
  ecom:{ kind:'Full-stack web app · Laravel 9 + Vue 3', role:'Full Stack Developer', title:'E-COMMANDE: management platform for a financial services distribution network', client:'Licensed financial services distributor · Benin · since March 2023',
    summary:'Full-stack web application that lets a financial and digital services distributor in Benin run its network of partners and points of sale: customer operations, orders and stock, deposits, commission calculation and withdrawal, real-time dashboards.',
    context:'A licensed distributor resells, through a network of partners and points of sale, prepaid Visa cards, TV subscriptions (Canal+), water and electricity bill payments and Ecobank transfer services (Rapid Transfert, Xpress). Before the platform, tracking each partner\u2019s operations, balances and commissions was manual. E-COMMANDE centralizes the whole cycle, from entering an operation at the branch to paying out commissions.',
    roleLong:'Full-stack developer on the entire project since March 2023: architecture design, back-end and front-end development, optimization, security and production deployment.',
    groups:[{title:'Features', items:['4 profiles: administrators, verification agents, partners and their points of sale. Each account has fine-grained permissions, configurable user by user.',
      'Customer operations: entry with supporting documents, validity checks (identity, age, formats), then review by an agent (approval, rejection or cancellation) with a full history of every status change.',
      'Partner account: manually validated deposits, real-time balance, statements, reports by activity and by partner, collection sheets.',
      'Commission engine: rates configurable per product and per partner, sub-network support, commission withdrawal with a guarantee that a commission can never be paid twice.',
      'Orders and stock: purchase orders, batch-level stock tracking, pricing based on the partner\u2019s profile.',
      'Sales challenges: sales targets, automatic evaluation, bonuses and Excel exports.',
      'Real-time notifications for agents on every new operation or deposit.',
      'Automated reports: daily summary and balance report generated every day and sent to Telegram, Excel and PDF exports.']},
      {title:'Technical highlights', items:['Event sourcing: every financial movement (deposit, operation, commission withdrawal, balance correction) is stored as an immutable event, then projected onto balances. This gives an auditable history and the ability to rebuild or repair data.',
      'State machines for the lifecycle of each operation type, and a Service layer that separates business logic from controllers.',
      'Performance optimization: removed an N+1 query problem in commission calculation. The admin dashboard went from 11 s and 19,000 SQL queries to 0.8 s and 6 queries, with non-regression verified by automatically comparing every API response before and after.',
      'Financial reliability: double check on commissions already paid, a lock against concurrent withdrawals, and data repair scripts that can be re-run without side effects.',
      'Personal data protection: real-time notifications carry only strictly necessary data (ID, code, type, amount, date); a database anonymization tool is available for test environments; the terms of use and privacy policy were written in line with Benin\u2019s digital code.',
      'One platform deployed for several distributors, with modules enabled per client.']}],
    mlabels:[],
    caps:['Dashboard: balances, partner and external commissions, list of commissions to withdraw.','Distributor list: up-to-date partner rate, filters, multi-select and permission management.','Account statement: every movement with balance before / after, operation code and initiator.','Statistics by operation: monthly and yearly charts (ApexCharts).','Periodic activity and commission report by partner.','Purchase orders: status, delivered by, investment, commission and amount.','Product stock: Visa cards tracked by batch and linked to their purchase order.','Login by email or phone, and partnership request.'] },
  blwm:{ kind:'Web app & PWA · Laravel + React', role:'Lead Full Stack Developer', title:'BLWM: management platform for a church network', client:'Life Word Mission · Benin · freelance, since February 2025',
    summary:'Platform that centralizes a three-level church network: structure, leaders, scheduling, configurable activity reports, auto-generated Word summaries and audio review published to Telegram.',
    context:'Life Word Mission is a church network in Benin organized on three levels: a national coordination, 6 districts and about 70 local assemblies. Seven departments (Communication, Choir, Protocol, Mission, Health, Youth, Family) exist at each level. Tracking was mostly manual, with Word and PDF reports exchanged between leaders.',
    roleLong:'Lead full-stack developer, back end to front end: database design, REST API, interface, notifications, deployment and production error tracking.',
    points:['Dynamic forms. The administrator defines the fields of each report for every department and activity type: text, lists, checkboxes, dates, files, audio and repeatable fields. Server-side validation is generated from these definitions, with file handling on edits (existing files kept, new files added).',
      'Multi-level access control. Roles and permissions (Spatie), plus a scope based on position: a national leader sees everything, a delegate only their district, a spokesperson only their assembly.',
      'Word report generation. A Factory / Strategy architecture per department and level combines source reports into a Word document (PhpWord), keeping links to the original reports.',
      'Real-time and push notifications. Live notifications (Laravel Broadcasting, Pusher, Laravel Echo) and web push notifications through a hand-written service worker.',
      'Production error tracking. Sentry on both front and back end. Errors grouped by endpoint, personal data masked, each error linked to the affected user.',
      'Other features: installable PWA · assembly map (Leaflet) · calendar (FullCalendar) · Excel export of org charts · public audio library · news · training module · JWT authentication and password reset · auto-generated API docs (Scramble) · automated tests (PHPUnit)'],
    mlabels:[],
    caps:['Dashboard: upcoming activities, recent reports and network map.','Assembly map (Leaflet) across Benin.','Scheduling: shared activity calendar (FullCalendar).','Submitted activity reports, with filters and status.','New report: form generated from the administrator\u2019s configuration.','Activity type variables: configurable report form fields.','Field editor: type, options, required or repeatable.','Activity types and their form configuration.','Audio review: sermons and testimonies before publishing to Telegram.','Roles & permissions (Spatie).','Network news.','Training module.'] },
  sak:{ kind:'Website · Laravel + Vue.js', role:'Full Stack Developer', title:'SAK SERVICES: financial services agency', client:'SAK SERVICES · Cotonou · UBA & Ecobank partner',
    summary:'Website for a financial services agency: prepaid Visa cards, international transfers, Mobile Money, Canal+, DHL and insurance.',
    context:'The agency offers prepaid Visa cards, international transfers (RIA, MoneyGram, RapidTransfer), Mobile Money, Canal+, DHL and insurance. The site brings all these offers together and directs customers to the branch or WhatsApp.',
    roleLong:'Full-stack developer',
    points:['Responsive interface: hero, tabbed services without page reloads, steps, accordion FAQ.','Validated contact form with subject selection and direct WhatsApp contact.','Partner sign-up and customer login access.','SEO: Open Graph metadata and local geo tags.'],
    mlabels:[], caps:['Home: value proposition, partner badge, two calls to action and key figures.','Tabbed services: each offer has its own panel, no page reload.','Accordion FAQ on Visa cards, transfers, Mobile Money, Canal+, DHL and insurance.'] },
  saf:{ kind:'Website · Laravel + Vue.js', role:'Full Stack Developer', title:'SAF OLA SERVICES: financial services agency', client:'SAF OLA SERVICES · Cotonou',
    summary:"Site presenting the agency's full offer, with a live open / closed status, embedded Google map and WhatsApp contact.",
    context:"UBA and Ecobank Visa cards, Ecobank solutions, transfers, Mobile Money, Canal+, insurance and a Super Merchant point: the site presents the agency's entire offer in one place.",
    roleLong:'Full-stack developer',
    points:['Home carousel with arrows and indicators, tabbed services, trust and steps sections.','Open / closed status computed live from opening hours.','Embedded Google map, WhatsApp button, partner access and customer login.'],
    mlabels:[], caps:['Home carousel with navigation, calls to action and trust badges.','Tabbed services: Visa, Ecobank, transfers, Mobile Money, Canal+, insurance, Super Merchant.','Contact: WhatsApp button, embedded Google map and live open / closed status.'] },
  afn:{ kind:'Showcase site · React + Vite', role:'Front-end Developer', title:'Afrika Nature: SEO-optimized React showcase site', client:'Afrika Nature · Abomey-Calavi · food industry',
    summary:'One-page site for a food brand: 10-product catalog, points of sale in 3 countries, pre-rendering and technical SEO.',
    context:"The brand turns tiger nuts into plant milk, flours, liqueurs, oil and biscuits, sold in Benin, Togo and Côte d'Ivoire. The site had to present the range, reassure consumers and attract distributors and investors.",
    roleLong:'Front-end developer',
    points:['Fast one-page site: 10-product catalog, benefits, impact, points of sale by country, WhatsApp contact.','Product sheets centralized in a data file: the client adds a product without touching the layout.','Static HTML pre-rendering, JSON-LD structured data, sitemap and robots.txt generated at build time, Open Graph previews.','Apache configuration: forced HTTPS, caching, compression and security headers.'],
    stack:['React 18','Vite','SSR pre-rendering','JSON-LD','Apache'],
    mlabels:['products in catalog','distribution countries'], caps:['Home: brand positioning, calls to action and key figures.','Product catalog with categories and formats, powered by a data file.','Points of sale by country and direct contact.'] }
};
const EXPS_EN = [
  { period:'Jun 2023 – Aug 2025', location:'Benin', role:'Full Stack Developer', org:'African Institute for Impact Monitoring and Evaluation (Le Baromètre)',
    groups:[{title:null, items:['Monitoring and evaluation platforms built front to back, from UML modeling to production.','Dynamic formula engine: users define indicator calculations, recomputed in real time with secure evaluation.','Dynamic forms generated from variable backend schemas (fields and validation on the fly).','REST JSON APIs for data-collection modules and indicator exports; interactive dashboards.']}] },
  { period:'Mar 2021 – 2023', location:'Benin · remote', role:'Independent consultant · Full Stack', org:'Clients in Benin',
    groups:[{title:'SAK Services · financial sector, 2021', items:['Financial operations platform: approval / rejection workflows and role-based access control.','REST API, QOSIC payment integration, automatic backups to Google Drive.','SQL optimization and refactoring of critical operations.']},
            {title:'GSK Groupe · operations management, 2023', items:['Staff, partner, order and inventory management with RBAC permissions.','Multi-criteria statistics dashboard and simplified commission management.','TDD on critical modules (transaction validation, permissions).']}] },
  { period:'Aug 2021 – Aug 2022', location:'Benin', role:'Web Developer', org:'Beewton',
    groups:[{title:null, items:['Laravel / Vue.js SaaS applications built and maintained in an Agile team.','Custom REST APIs and third-party integrations (PayPal, KKiapay, Google Drive).','UML modeling and functional testing to validate deliverables.']}] }
];

const SLAB_TONES = {
  blue:   { face: ['#5B8CFF', '#2563EB'], edge: '#1E4FC2' },
  sky:    { face: ['#5CC8FF', '#1A9BEA'], edge: '#1279C2' },
  violet: { face: ['#A99BFF', '#7C6CF2'], edge: '#5F4FD6' },
  pink:   { face: ['#F3B6FF', '#D58BF5'], edge: '#B06AD8' }
};
const CUBE_SETS = {
  hero: [
    { s: 74, top: '16%', left: '6%', speed: 0.35, tone: 'violet', rx: 14, ry: -26, dur: 9, mob: true },
    { s: 46, top: '30%', left: '15%', speed: 0.55, tone: 'pink', rx: 10, ry: -18, dur: 11 },
    { s: 86, top: '62%', left: '8%', speed: 0.25, tone: 'blue', rx: 16, ry: 24, dur: 10 },
    { s: 56, top: '22%', right: '8%', speed: 0.5, tone: 'sky', rx: 12, ry: 28, dur: 8, mob: true },
    { s: 40, top: '70%', right: '14%', speed: 0.7, tone: 'violet', rx: 18, ry: -22, dur: 12 }
  ],
  skills: [
    { s: 58, top: '8%', left: '3%', speed: 0.12, tone: 'blue', rx: 14, ry: 22, dur: 10 },
    { s: 34, top: '80%', right: '4%', speed: 0.2, tone: 'pink', rx: 12, ry: -24, dur: 9 }
  ],
  exp: [
    { s: 44, top: '5%', right: '6%', speed: 0.15, tone: 'sky', rx: 16, ry: -20, dur: 11 }
  ],
  contact: [
    { s: 64, top: '9%', left: '4%', speed: 0.1, tone: 'violet', rx: 12, ry: 26, dur: 10 },
    { s: 38, top: '18%', right: '7%', speed: 0.18, tone: 'blue', rx: 18, ry: -18, dur: 8 }
  ]
};
function renderCubes(key, y, w, anchorY) {
  const e = React.createElement, narrow = w < 900;
  const list = CUBE_SETS[key].filter(c => !narrow || c.mob);
  if (!list.length) return null;
  const off = Math.max(-80, Math.min(80, (y - anchorY)));
  return e('div', { 'aria-hidden': 'true', style: { position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' } },
    list.map((c, i) => {
      const s = narrow ? Math.round(c.s * 0.65) : c.s, t = SLAB_TONES[c.tone];
      const r = Math.round(s * 0.2), depth = Math.max(8, Math.round(s * 0.2)), N = 7;
      const layers = [];
      for (let k = N; k >= 1; k--) layers.push(e('span', { key: 'l' + k, style: { position: 'absolute', inset: 0, borderRadius: r + 'px', background: t.edge, opacity: 0.55 + 0.3 * (1 - k / N), transform: 'translateZ(' + (-(k / N) * depth).toFixed(1) + 'px)', boxShadow: k === N ? '0 18px 30px -10px rgba(21,27,39,0.28)' : 'none' } }));
      layers.push(e('span', { key: 'f', style: { position: 'absolute', inset: 0, borderRadius: r + 'px', overflow: 'hidden', background: 'linear-gradient(140deg,' + t.face[0] + ' 0%,' + t.face[1] + ' 78%)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45), inset 0 ' + Math.round(s * 0.06) + 'px ' + Math.round(s * 0.12) + 'px rgba(255,255,255,0.28)' } },
        e('span', { style: { position: 'absolute', top: '-30%', left: '38%', width: '26%', height: '160%', background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.32) 50%,rgba(255,255,255,0) 100%)', transform: 'rotate(24deg)' } })));
      const pos = { position: 'absolute', top: c.top, width: s + 'px', height: s + 'px', perspective: '700px', opacity: 0.92, transform: 'translate3d(0,' + (-off * c.speed).toFixed(1) + 'px,0)', transition: 'transform 120ms linear' };
      if (c.left) pos.left = c.left; else pos.right = c.right;
      return e('div', { key: key + i, style: pos },
        e('div', { style: { width: '100%', height: '100%', animation: 'cubeFloat ' + (c.dur * 0.8).toFixed(1) + 's ease-in-out ' + (-i * 1.7) + 's infinite' } },
          e('div', { style: { position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', '--rx': c.rx + 'deg', '--ry': c.ry + 'deg', transform: 'rotateX(' + c.rx + 'deg) rotateY(' + c.ry + 'deg)', animation: 'slabRock ' + c.dur + 's ease-in-out ' + (-i * 2.3) + 's infinite alternate' } }, layers)));
    }));
}
export default class App extends React.Component<any, any> {
  // La langue vient de l'URL (/ = en, /fr/ = fr) : chaque version a sa propre page pré-rendue et indexable.
  state = { w: 1280, y: 0, active: 'hero', menu: false, modal: null, mShot: 0, toast: false, ready: false,
    lang: this.props.lang || (typeof location !== 'undefined' ? langFromPath(location.pathname) : 'en') };
  certRef = React.createRef();
  componentDidMount() {
    document.documentElement.classList.remove('pre');
    this.onResize = () => this.setState({ w: window.innerWidth });
    this.onScroll = () => {
      let cur = 'hero';
      for (const id of IDS) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 160) cur = id; }
      const y = window.scrollY;
      if (cur !== this.state.active || (y > 40) !== (this.state.y > 40) || (y > 700) !== (this.state.y > 700)) this.setState({ active: cur, y });
      if (!this.cyRaf) this.cyRaf = requestAnimationFrame(() => { this.cyRaf = 0; if (Math.abs(window.scrollY - (this.state.cy || 0)) > 6) this.setState({ cy: window.scrollY }); });
    };
    this.onKey = (e) => { if (e.key === 'Escape') this.closeModal(); };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('keydown', this.onKey);
    this.onPop = () => { const l = langFromPath(location.pathname); this.applyMeta(l); this.setState({ lang: l }); };
    window.addEventListener('popstate', this.onPop);
    this.setState({ ready: true });
    this.onResize(); this.onScroll();
    // Sur la racine, un visiteur qui avait choisi le français y est renvoyé ; /fr/ reste toujours en français.
    try { const l = localStorage.getItem('sk-portfolio-lang'); if (l === 'fr' && this.state.lang === 'en' && location.pathname === '/') this.setLang('fr', true); } catch (_) {}
    setTimeout(() => this.setupReveal(), 300);
  }
  setupReveal() {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.io = new IntersectionObserver((entries) => entries.forEach(en => {
      if (en.isIntersecting) { en.target.style.opacity = '1'; en.target.style.transform = 'none'; this.io.unobserve(en.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) return;
      el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 700ms cubic-bezier(.2,.7,.2,1), transform 700ms cubic-bezier(.2,.7,.2,1)';
      this.io.observe(el);
    });
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('popstate', this.onPop);
    this.io && this.io.disconnect();
    clearTimeout(this.tt);
    document.body.style.overflow = '';
  }
  setLang(l, replace = false) {
    try { localStorage.setItem('sk-portfolio-lang', l); } catch (_) {}
    const path = LANG_PATH[l];
    if (location.pathname !== path) history[replace ? 'replaceState' : 'pushState'](null, '', path + location.hash);
    this.applyMeta(l); this.setState({ lang: l });
  }
  applyMeta(l) {
    const M = META[l], url = SITE_URL + LANG_PATH[l];
    document.documentElement.lang = l; document.title = M.title;
    const set = (sel, attr, v) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, v); };
    set('meta[name="description"]', 'content', M.description); set('meta[property="og:title"]', 'content', M.title);
    set('meta[property="og:description"]', 'content', M.ogDescription); set('meta[property="og:locale"]', 'content', M.locale);
    set('meta[property="og:url"]', 'content', url); set('link[rel="canonical"]', 'href', url);
  }
  componentDidUpdate() { const want = META[this.state.lang].title; if (document.title !== want) document.title = want; }
  openModal(id, shot = 0) { document.body.style.overflow = 'hidden'; this.setState({ modal: id, mShot: shot }); }
  closeModal = () => { document.body.style.overflow = ''; this.setState({ modal: null }); };
  scrollCerts(dir) { const el = this.certRef.current; if (el) el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.66), behavior: 'smooth' }); }
  submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = `${f.get('message')}\n\n${f.get('name')} · ${f.get('email')}`;
    const href = `mailto:kodonoumahuwanu@gmail.com?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`;
    try { window.open(href, '_blank'); } catch (_) {}
    e.target.reset();
    this.setState({ toast: true });
    clearTimeout(this.tt); this.tt = setTimeout(() => this.setState({ toast: false }), 4500);
  };
  secTop(id) { const el = this.state.ready && document.getElementById(id); return el ? el.offsetTop : 0; }
  renderVals() {
    const { w, y, active, menu, modal, mShot, toast } = this.state;
    const cy = this.state.cy || 0;
    const CFG = (typeof window !== 'undefined' && window.SITE_CONFIG) || {};
    const cubesOn = this.props.cubes ?? CFG.cubes ?? true;
    const cubeVals = !cubesOn ? {} : {
      heroCubes: renderCubes('hero', cy, w, 0),
      skillsCubes: renderCubes('skills', cy, w, this.secTop('skills')),
      expCubes: renderCubes('exp', cy, w, this.secTop('experience')),
      contactCubes: renderCubes('contact', cy, w, this.secTop('contact'))
    };
    const lang = this.state.lang;
    const en = lang === 'en';
    const tr = (s) => (en && s && SK_EN[s]) || s;
    const PJ = PROJECTS.map(p => { if (!en) return p; const x = PROJECTS_EN[p.id];
      return { ...p, ...x, groups: x.groups || p.groups, stack: x.stack || p.stack, metrics: p.metrics.map((m, i) => ({ v: m.v, l: x.mlabels[i] })), shots: p.shots.map((s, i) => [s[0], x.caps[i]]) }; });
    const available = this.props.available ?? CFG.available ?? true;
    const isWide = w >= 1180, wideTl = w >= 900;
    const card = (p) => ({ ...p, cover: '/assets/' + p.shots[0][0] + '.webp', stackShort: p.stack.slice(0, 6), open: () => this.openModal(p.id) });
    let m = null;
    if (modal) {
      const p = PJ.find(x => x.id === modal);
      const shots = p.shots.map(([f, cap], i) => ({ src: '/assets/' + f + '.webp', cap, ring: i === mShot ? 'var(--acc,#2563EB)' : 'transparent', op: i === mShot ? 1 : 0.55, select: () => this.setState({ mShot: i }) }));
      m = { ...p, shots, shot: shots[mShot] || shots[0], groups: p.groups || [], hasPoints: (p.points || []).length > 0, hasMetrics: p.metrics.length > 0, hasLink: !!p.link, nda: !p.link };
    }
    return {
      ...cubeVals,
      acc: this.props.accent || CFG.accent || '#2563EB',
      heroImage: this.props.heroImage ?? CFG.heroImage ?? true,
      available, busy: !available,
      isWide, isNarrow: !isWide, menuOpen: !isWide && menu,
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })), closeMenu: () => this.setState({ menu: false }),
      navBg: y > 40 || menu ? 'rgba(255,255,255,0.92)' : 'transparent',
      navShadow: y > 40 ? '0 1px 0 #E6E9EE, 0 8px 30px -16px rgba(21,27,39,.18)' : 'none',
      showTop: y > 700,
      t: T[lang],
      setFr: () => this.setLang('fr'), setEn: () => this.setLang('en'),
      frBg: lang === 'fr' ? '#fff' : 'transparent', frFg: lang === 'fr' ? '#151B27' : '#61697A', frSh: lang === 'fr' ? '0 1px 2px rgba(21,27,39,.12)' : 'none',
      enBg: lang === 'en' ? '#fff' : 'transparent', enFg: lang === 'en' ? '#151B27' : '#61697A', enSh: lang === 'en' ? '0 1px 2px rgba(21,27,39,.12)' : 'none',
      nav: NAV.map(([id, fr, en]) => ({ href: '#' + id, label: lang === 'en' ? en : fr, color: active === id ? 'var(--acc,#2563EB)' : '#2A3243', bar: active === id ? 1 : 0, mbg: active === id ? '#EEF3FE' : 'transparent' })),
      ...(() => {
        const fl = PJ.slice(0, 3).map(card), fi = Math.min(this.state.fIdx || 0, fl.length - 1), fs = this.state.fShot || 0;
        const split = (s) => { const [a, ...b] = s.split(/\s*:\s+/); const r = b.join(': '); return [a, r.charAt(0).toUpperCase() + r.slice(1)]; };
        const p = fl[fi], sh = p.shots[fs] || p.shots[0], [name] = split(p.title);
        const bs = this.state.bShot || {};
        const bItem = (q, i) => { const n = q.shots.length, k = (bs[q.id] || 0) % n, s = q.shots[k], [nm, sub] = split(q.title);
          const go = (d) => this.setState(st => ({ bShot: { ...(st.bShot || {}), [q.id]: ((((st.bShot || {})[q.id] || 0) + d) % n + n) % n } }));
          return { ...q, num: '0' + (i + 1), name: nm, sub, src: '/assets/' + s[0] + '.webp', cap: s[1], pos: (k + 1) + ' / ' + n, prev: () => go(-1), next: () => go(1), openShot: () => this.openModal(q.id, k) }; };
        const layout = this.props.featLayout ?? 'showcase';
        return {
          isBento: layout === 'bento', isShowcase: layout !== 'bento',
          bento: { big: bItem(fl[0], 0), small: fl.slice(1).map((q, i) => bItem(q, i + 1)) },
          featLabel: en ? 'Featured projects' : 'Projets phares',
          featTabs: fl.map((q, i) => { const on = i === fi, [nm, sub] = split(q.title); return { num: '0' + (i + 1), name: nm, sub, kind: q.kind, sel: on ? 'true' : 'false',
            bg: on ? '#fff' : 'transparent', bd: on ? '#D3DDF3' : 'transparent', sh: on ? '0 14px 34px -18px rgba(21,27,39,.28)' : 'none', numC: on ? 'var(--acc,#2563EB)' : '#9AA2B1',
            select: () => this.setState({ fIdx: i, fShot: 0 }) }; }),
          feat: { ...p, name, shotSrc: '/assets/' + sh[0] + '.webp', shotCap: sh[1], shotPos: (fs + 1) + ' / ' + p.shots.length,
            openShot: () => this.openModal(p.id, fs),
            thumbs: p.shots.map(([f, cap], i) => ({ src: '/assets/' + f + '.webp', cap, ring: i === fs ? 'var(--acc,#2563EB)' : 'transparent', op: i === fs ? 1 : 0.6, select: () => this.setState({ fShot: i }) })) }
        };
      })(),
      others: PJ.slice(3).map(card),
      skills: SKILLS.map(([title, rows], i) => ({ title: tr(title), i1: i === 0, i2: i === 1, i3: i === 2, i4: i === 3,
        rows: rows.map(r => Array.isArray(r) ? { label: tr(r[0]), expert: !!r[1], note: tr(r[2]) || null } : { label: tr(r), expert: false, note: null }) })),
      integrations: ['PayPal','Stripe','QOSIC','KKiapay','Google Drive API','Duda API'],
      methods: ['Agile / Scrum','TDD','UML','MVC · SOLID','Revue de code'].map(tr),
      certs: CERTS.filter(c => (this.state.certTab || 'all') === 'all' || c.src === this.state.certTab).map(c => ({ ...c, href: c.verify || c.pdf })).map(c => !en ? c : c.src === 'other' ? { ...c, title: 'English certificate', issuer: 'Language' } : { ...c, issuer: enDate(c.issuer) }),
      certTabs: CERT_TABS.map(([k, fr, enL]) => { const label = en ? enL : fr; const on = (this.state.certTab || 'all') === k; return { label, n: k === 'all' ? CERTS.length : CERTS.filter(c => c.src === k).length,
        bg: on ? '#151B27' : '#fff', fg: on ? '#fff' : '#2A3243', bd: on ? '#151B27' : '#DDE0E6',
        pick: () => { this.setState({ certTab: k }); const el = this.certRef.current; if (el) el.scrollTo({ left: 0 }); } }; }),
      certRef: this.certRef,
      certPrev: () => this.scrollCerts(-1), certNext: () => this.scrollCerts(1),
      lineLeft: wideTl ? '50%' : '9px',
      cardW: wideTl ? 'calc(50% - 40px)' : 'calc(100% - 36px)',
      cardML: wideTl ? '0' : '36px',
      exps: EXPS.map((e, i) => ({ ...e, ...(en ? EXPS_EN[i] : {}), label: en ? TYPE_EN[e.type] : e.type, dir: wideTl && i % 2 === 1 ? 'row-reverse' : 'row', badgeBg: TYPE_C[e.type][0], badgeFg: TYPE_C[e.type][1] })),
      submit: this.submit, toast,
      modal: m, closeModal: this.closeModal, stop: (e) => e.stopPropagation()
    };
  }
  render() {
    const v: any = this.renderVals();
    return (
      <>
      <div style={{ "--acc": v.acc, "fontFamily": "'Geist',system-ui,sans-serif", "background": "#F6F7F9", "minHeight": "100vh" }}>
        <a href="#projects" className="dc1" style={{ "position": "fixed", "left": "16px", "top": "-60px", "zIndex": "200", "padding": "10px 16px", "borderRadius": "8px", "background": "#151B27", "color": "#fff", "fontSize": "14px", "fontWeight": "600" }}>
          {v.t.skip}
        </a>
        <header style={{ "position": "fixed", "top": "0", "left": "0", "right": "0", "zIndex": "50", "background": v.navBg, "backdropFilter": "blur(10px)", "WebkitBackdropFilter": "blur(10px)", "boxShadow": v.navShadow, "transition": "background 250ms,box-shadow 250ms" }}>
          <div style={{ "maxWidth": "1240px", "margin": "0 auto", "padding": "0 24px", "height": "68px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px" }}>
            <a href="#hero" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "color": "#151B27" }}>
              <span style={{ "width": "34px", "height": "34px", "borderRadius": "9px", "background": "#151B27", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Geist Mono',monospace", "fontWeight": "500", "fontSize": "13px" }}>
                SK
              </span>
              <span style={{ "display": "flex", "flexDirection": "column", "lineHeight": "1.1" }}>
                <span style={{ "fontWeight": "700", "fontSize": "16px", "letterSpacing": "-0.01em" }}>
                  Sunday
                  <span style={{ "color": "var(--acc,#2563EB)" }}>
                    .
                  </span>
                </span>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "fontWeight": "500", "color": "var(--acc,#2563EB)" }}>
                  &lt;KOD/&gt;
                </span>
              </span>
            </a>
            {v.isWide ? (
              <>
                <nav style={{ "display": "flex", "alignItems": "center", "gap": "28px" }}>
                  {(v.nav || []).map((l, $index) => (
                    <React.Fragment key={$index}>
                      <a href={l.href} className="dc2" style={{ "position": "relative", "padding": "6px 0", "fontSize": "14px", "fontWeight": "500", "color": l.color }}>
                        {l.label}
                        <span style={{ "position": "absolute", "left": "0", "right": "0", "bottom": "-2px", "height": "2px", "borderRadius": "2px", "background": "var(--acc,#2563EB)", "transform": `scaleX(${l.bar})`, "transformOrigin": "left", "transition": "transform 200ms" }} />
                      </a>
                    </React.Fragment>
                  ))}
                </nav>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
                  <div role="group" aria-label="Langue" style={{ "display": "flex", "padding": "3px", "borderRadius": "9px", "background": "#EEF0F3", "border": "1px solid #E1E4E9" }}>
                    <button onClick={v.setFr} style={{ "padding": "6px 10px", "border": "0", "borderRadius": "6px", "background": v.frBg, "color": v.frFg, "boxShadow": v.frSh, "fontSize": "12.5px", "fontWeight": "600", "letterSpacing": ".02em", "cursor": "pointer" }}>
                      FR
                    </button>
                    <button onClick={v.setEn} style={{ "padding": "6px 10px", "border": "0", "borderRadius": "6px", "background": v.enBg, "color": v.enFg, "boxShadow": v.enSh, "fontSize": "12.5px", "fontWeight": "600", "letterSpacing": ".02em", "cursor": "pointer" }}>
                      EN
                    </button>
                  </div>
                  <a href="/assets/cv.pdf" download="CV_Sunday_Kodonon.pdf" className="dc3" style={{ "display": "flex", "alignItems": "center", "gap": "7px", "padding": "9px 14px", "borderRadius": "8px", "border": "1px solid #DDE0E6", "background": "#fff", "color": "#151B27", "fontSize": "14px", "fontWeight": "600" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M12 15V3" />
                    </svg>
                    {v.t.cv}
                  </a>
                  <a href="#contact" className="dc4" style={{ "padding": "10px 16px", "borderRadius": "8px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "14px", "fontWeight": "600" }}>
                    {v.t.contact}
                  </a>
                </div>
              </>
            ) : null}
            {v.isNarrow ? (
              <>
                <button onClick={v.toggleMenu} aria-label="Menu" style={{ "width": "44px", "height": "44px", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#fff", "border": "1px solid #DDE0E6", "borderRadius": "10px", "color": "#151B27", "cursor": "pointer" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </button>
              </>
            ) : null}
          </div>
          {v.menuOpen ? (
            <>
              <nav style={{ "display": "flex", "flexDirection": "column", "gap": "2px", "padding": "8px 16px 16px", "background": "#fff", "borderTop": "1px solid #E6E9EE" }}>
                {(v.nav || []).map((l, $index) => (
                  <React.Fragment key={$index}>
                    <a href={l.href} onClick={v.closeMenu} style={{ "padding": "12px", "borderRadius": "8px", "fontSize": "16px", "fontWeight": "500", "color": l.color, "background": l.mbg }}>
                      {l.label}
                    </a>
                  </React.Fragment>
                ))}
                <div style={{ "marginTop": "10px", "paddingTop": "14px", "borderTop": "1px solid #E6E9EE", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "10px" }}>
                  <div role="group" aria-label="Langue" style={{ "display": "flex", "padding": "3px", "borderRadius": "9px", "background": "#EEF0F3", "border": "1px solid #E1E4E9" }}>
                    <button onClick={v.setFr} style={{ "minWidth": "44px", "height": "38px", "border": "0", "borderRadius": "6px", "background": v.frBg, "color": v.frFg, "boxShadow": v.frSh, "fontSize": "13px", "fontWeight": "600", "cursor": "pointer" }}>
                      FR
                    </button>
                    <button onClick={v.setEn} style={{ "minWidth": "44px", "height": "38px", "border": "0", "borderRadius": "6px", "background": v.enBg, "color": v.enFg, "boxShadow": v.enSh, "fontSize": "13px", "fontWeight": "600", "cursor": "pointer" }}>
                      EN
                    </button>
                  </div>
                  <a href="/assets/cv.pdf" download="CV_Sunday_Kodonon.pdf" style={{ "flex": "1", "minWidth": "110px", "padding": "12px", "borderRadius": "8px", "border": "1px solid #DDE0E6", "color": "#151B27", "fontSize": "15px", "fontWeight": "600", "textAlign": "center" }}>
                    {v.t.cv}
                  </a>
                  <a href="#contact" onClick={v.closeMenu} style={{ "flex": "1", "minWidth": "140px", "padding": "12px", "borderRadius": "8px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "15px", "fontWeight": "600", "textAlign": "center" }}>
                    {v.t.contact}
                  </a>
                </div>
              </nav>
            </>
          ) : null}
        </header>
        <main>
          <section id="hero" data-screen-label="Accueil" style={{ "position": "relative", "minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "overflow": "hidden", "padding": "120px 24px 96px", "boxSizing": "border-box" }}>
            {v.heroImage ? (
              <>
                <div style={{ "position": "absolute", "inset": "0", "zIndex": "0" }}>
                  <img src="/assets/hero-background.webp" alt="" width="1600" height="900" fetchpriority="high" decoding="async" style={{ "width": "100%", "height": "100%", "objectFit": "cover" }} />
                  <div style={{ "position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(246,247,249,0.86) 0%,rgba(246,247,249,0.93) 60%,#F6F7F9 100%)" }} />
                </div>
              </>
            ) : null}
            {v.heroCubes}
            <div style={{ "position": "relative", "zIndex": "1", "maxWidth": "860px", "width": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "28px" }}>
              <div style={{ "position": "relative", "width": "132px", "height": "132px" }}>
                <div style={{ "position": "absolute", "inset": "-6px", "borderRadius": "50%", "border": "1px solid #DDE0E6", "background": "#fff" }} />
                <img src="/assets/sunday.jpeg" alt="Sunday KODONON" width="132" height="132" fetchpriority="high" decoding="async" style={{ "position": "absolute", "inset": "0", "width": "132px", "height": "132px", "borderRadius": "50%", "objectFit": "cover", "objectPosition": "50% 22%" }} />
                {v.available ? (
                  <>
                    <span title="Disponible" style={{ "position": "absolute", "right": "6px", "bottom": "6px", "width": "20px", "height": "20px", "borderRadius": "50%", "background": "#16A34A", "border": "3px solid #fff" }} />
                  </>
                ) : null}
              </div>
              {v.available ? (
                <>
                  <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "6px 14px", "borderRadius": "999px", "background": "#fff", "border": "1px solid #DDE0E6", "fontSize": "13px", "fontWeight": "500", "color": "#3A4252" }}>
                    <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "background": "#16A34A", "boxShadow": "0 0 0 3px rgba(22,163,74,.18)" }} />
                    {v.t.avail}
                  </span>
                </>
              ) : null}
              {v.busy ? (
                <>
                  <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "6px 14px", "borderRadius": "999px", "background": "#fff", "border": "1px solid #DDE0E6", "fontSize": "13px", "fontWeight": "500", "color": "#3A4252" }}>
                    <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "background": "#D97706" }} />
                    {v.t.busyHero}
                  </span>
                </>
              ) : null}
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                <h1 style={{ "margin": "0", "fontSize": "clamp(40px,6.4vw,76px)", "lineHeight": "1.02", "letterSpacing": "-0.04em", "fontWeight": "800" }}>
                  <span style={{ "display": "block", "fontWeight": "500", "fontSize": "0.42em", "letterSpacing": "-0.01em", "color": "#61697A", "marginBottom": "12px" }}>
                    {v.t.hello}
                  </span>
                  <span style={{ "display": "block" }}>
                    Sunday{" "}
                    <span style={{ "color": "var(--acc,#2563EB)" }}>
                      KODONON
                    </span>
                  </span>
                </h1>
                <p style={{ "margin": "0", "fontSize": "clamp(20px,2.4vw,26px)", "fontWeight": "600", "letterSpacing": "-0.01em", "color": "#151B27" }}>
                  {v.t.role}
                </p>
              </div>
              <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "8px" }}>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "13px", "padding": "6px 12px", "borderRadius": "6px", "background": "#fff", "border": "1px solid #DDE0E6", "color": "#151B27" }}>
                  Laravel
                </span>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "13px", "padding": "6px 12px", "borderRadius": "6px", "background": "#fff", "border": "1px solid #DDE0E6", "color": "#151B27" }}>
                  Vue.js
                </span>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "13px", "padding": "6px 12px", "borderRadius": "6px", "background": "#fff", "border": "1px solid #DDE0E6", "color": "#151B27" }}>
                  React
                </span>
              </div>
              <p style={{ "margin": "0", "fontSize": "18px", "lineHeight": "1.65", "color": "#4B5363", "maxWidth": "620px", "textWrap": "pretty" }}>
                {v.t.heroP}
              </p>
              <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "12px" }}>
                <a href="#projects" className="dc5" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "14px 24px", "borderRadius": "10px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "15px", "fontWeight": "600", "boxShadow": "0 8px 24px -8px rgba(37,99,235,.55)" }}>
                  {v.t.seeProjects}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="dc6" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "14px 24px", "borderRadius": "10px", "background": "#fff", "border": "1px solid #DDE0E6", "color": "#151B27", "fontSize": "15px", "fontWeight": "600" }}>
                  {v.t.contact}
                </a>
              </div>
              <div style={{ "display": "flex", "gap": "10px" }}>
                <a href="https://github.com/Sunday2000" target="_blank" rel="noopener" aria-label="GitHub" className="dc7" style={{ "width": "44px", "height": "44px", "borderRadius": "10px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#4B5363" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/sunday-kodonon-b6a8331a5" target="_blank" rel="noopener" aria-label="LinkedIn" className="dc8" style={{ "width": "44px", "height": "44px", "borderRadius": "10px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#4B5363" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="mailto:kodonoumahuwanu@gmail.com" aria-label="E-mail" className="dc9" style={{ "width": "44px", "height": "44px", "borderRadius": "10px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#4B5363" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </a>
              </div>
            </div>
            <a href="#projects" aria-label="Défiler" style={{ "position": "absolute", "bottom": "28px", "left": "50%", "marginLeft": "-12px", "zIndex": "1", "width": "24px", "height": "40px", "border": "2px solid #9AA2B1", "borderRadius": "999px", "display": "flex", "justifyContent": "center", "boxSizing": "border-box" }}>
              <span style={{ "width": "4px", "height": "10px", "marginTop": "7px", "borderRadius": "2px", "background": "var(--acc,#2563EB)", "animation": "bob 1.8s ease-in-out infinite" }} />
            </a>
          </section>
          <section id="projects" data-screen-label="Projets" style={{ "background": "#FFFFFF", "scrollMarginTop": "68px", "borderTop": "1px solid #E6E9EE" }}>
            <div style={{ "maxWidth": "1240px", "margin": "0 auto", "padding": "clamp(72px,9vw,112px) 24px" }}>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "14px", "marginBottom": "56px" }}>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "var(--acc,#2563EB)" }}>
                  {v.t.eyProjects}
                </span>
                <h2 style={{ "margin": "0", "fontSize": "clamp(32px,4.2vw,48px)", "fontWeight": "800", "letterSpacing": "-0.035em", "lineHeight": "1.05" }}>
                  {v.t.hP1}{" "}
                  <span style={{ "color": "var(--acc,#2563EB)" }}>
                    {v.t.hP2}
                  </span>
                </h2>
                <p style={{ "margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#61697A", "maxWidth": "620px", "textWrap": "pretty" }}>
                  {v.t.subProjects}
                </p>
              </div>
              {v.isBento ? (
                <>
                  <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "gap": "14px", "marginBottom": "56px" }}>
                    <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#7A8291" }}>
                      {v.featLabel}
                    </span>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "stretch" }}>
                      <article className="dc10" style={{ "flex": "3 1 560px", "minWidth": "0", "display": "flex", "flexDirection": "column", "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "18px", "overflow": "hidden", "transition": "box-shadow 250ms" }}>
                        <div style={{ "position": "relative", "background": "#F1F4F8", "borderBottom": "1px solid #E6E9EE" }}>
                          <button onClick={v.bento.big.openShot} aria-label={v.t.seeProject} style={{ "display": "block", "width": "100%", "padding": "0", "border": "0", "background": "transparent", "cursor": "zoom-in" }}>
                            <img src={v.bento.big.src} decoding="async" alt={v.bento.big.cap} style={{ "display": "block", "width": "100%", "height": "auto", "aspectRatio": "16/10", "objectFit": "cover", "objectPosition": "top left" }} />
                          </button>
                          <span style={{ "position": "absolute", "top": "14px", "left": "14px", "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "fontWeight": "600", "padding": "5px 9px", "borderRadius": "6px", "background": "#151B27", "color": "#fff" }}>
                            01
                          </span>
                          <div style={{ "position": "absolute", "right": "14px", "bottom": "14px", "display": "flex", "alignItems": "center", "gap": "6px", "padding": "4px", "borderRadius": "999px", "background": "rgba(255,255,255,.94)", "boxShadow": "0 6px 18px -8px rgba(21,27,39,.4)" }}>
                            <button onClick={v.bento.big.prev} aria-label="Précédent" className="dc11" style={{ "width": "30px", "height": "30px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "0", "borderRadius": "50%", "background": "transparent", "color": "#2A3243", "cursor": "pointer" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                              </svg>
                            </button>
                            <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "color": "#2A3243", "minWidth": "38px", "textAlign": "center" }}>
                              {v.bento.big.pos}
                            </span>
                            <button onClick={v.bento.big.next} aria-label="Suivant" className="dc12" style={{ "width": "30px", "height": "30px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "0", "borderRadius": "50%", "background": "transparent", "color": "#2A3243", "cursor": "pointer" }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div style={{ "padding": "clamp(20px,2.6vw,30px)", "display": "flex", "flexDirection": "column", "gap": "14px", "flex": "1" }}>
                          <p style={{ "margin": "0", "fontSize": "13px", "lineHeight": "1.5", "color": "#7A8291" }}>
                            {v.bento.big.cap}
                          </p>
                          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                            <span style={{ "fontSize": "12px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "6px", "background": "#E6EEFD", "color": "#1D4ED8" }}>
                              {v.bento.big.role}
                            </span>
                            <span style={{ "fontSize": "12px", "fontWeight": "500", "padding": "5px 10px", "borderRadius": "6px", "border": "1px solid #DDE0E6", "color": "#4B5363" }}>
                              {v.bento.big.client}
                            </span>
                          </div>
                          <h3 style={{ "margin": "0", "fontSize": "clamp(22px,2.3vw,28px)", "fontWeight": "700", "letterSpacing": "-0.025em", "lineHeight": "1.2", "textWrap": "balance" }}>
                            {v.bento.big.title}
                          </h3>
                          <p style={{ "margin": "0", "fontSize": "15.5px", "lineHeight": "1.65", "color": "#4B5363", "textWrap": "pretty" }}>
                            {v.bento.big.summary}
                          </p>
                          <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "marginTop": "auto", "paddingTop": "6px" }}>
                            <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "flex": "1 1 300px", "minWidth": "0" }}>
                              {(v.bento.big.stackShort || []).map((st, $index) => (
                                <React.Fragment key={$index}>
                                  <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "padding": "4px 9px", "borderRadius": "5px", "border": "1px solid #D3DDF3", "color": "#1D4ED8" }}>
                                    {st}
                                  </span>
                                </React.Fragment>
                              ))}
                            </div>
                            <button onClick={v.bento.big.open} className="dc13" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "11px 18px", "border": "0", "borderRadius": "9px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "14px", "fontWeight": "600", "cursor": "pointer", "fontFamily": "inherit" }}>
                              {v.t.seeProject}
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                      <div style={{ "flex": "2 1 340px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "20px" }}>
                        {(v.bento.small || []).map((b, $index) => (
                          <React.Fragment key={$index}>
                            <article className="dc14" style={{ "flex": "1", "display": "flex", "flexDirection": "column", "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "18px", "overflow": "hidden", "transition": "box-shadow 250ms" }}>
                              <div style={{ "position": "relative", "background": "#F1F4F8", "borderBottom": "1px solid #E6E9EE" }}>
                                <button onClick={b.openShot} aria-label={b.cap} style={{ "display": "block", "width": "100%", "padding": "0", "border": "0", "background": "transparent", "cursor": "zoom-in" }}>
                                  <img src={b.src} loading="lazy" alt={b.cap} style={{ "display": "block", "width": "100%", "height": "auto", "aspectRatio": "16/8", "objectFit": "cover", "objectPosition": "top left" }} />
                                </button>
                                <span style={{ "position": "absolute", "top": "12px", "left": "12px", "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "fontWeight": "600", "padding": "4px 8px", "borderRadius": "6px", "background": "#151B27", "color": "#fff" }}>
                                  {b.num}
                                </span>
                                <div style={{ "position": "absolute", "right": "12px", "bottom": "12px", "display": "flex", "alignItems": "center", "gap": "4px", "padding": "3px", "borderRadius": "999px", "background": "rgba(255,255,255,.94)", "boxShadow": "0 6px 18px -8px rgba(21,27,39,.4)" }}>
                                  <button onClick={b.prev} aria-label="Précédent" className="dc15" style={{ "width": "26px", "height": "26px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "0", "borderRadius": "50%", "background": "transparent", "color": "#2A3243", "cursor": "pointer" }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="m15 18-6-6 6-6" />
                                    </svg>
                                  </button>
                                  <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "#2A3243", "minWidth": "34px", "textAlign": "center" }}>
                                    {b.pos}
                                  </span>
                                  <button onClick={b.next} aria-label="Suivant" className="dc16" style={{ "width": "26px", "height": "26px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "0", "borderRadius": "50%", "background": "transparent", "color": "#2A3243", "cursor": "pointer" }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="m9 18 6-6-6-6" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <div style={{ "padding": "20px 22px", "display": "flex", "flexDirection": "column", "gap": "8px", "flex": "1" }}>
                                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "var(--acc,#2563EB)" }}>
                                  {b.kind}
                                </span>
                                <h3 style={{ "margin": "0", "fontSize": "19px", "fontWeight": "700", "letterSpacing": "-0.02em", "lineHeight": "1.25" }}>
                                  {b.name}
                                </h3>
                                <p style={{ "margin": "0", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#61697A", "textWrap": "pretty" }}>
                                  {b.sub}
                                </p>
                                <button onClick={b.open} className="dc17" style={{ "alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "6px", "marginTop": "auto", "padding": "8px 0 0", "border": "0", "background": "transparent", "color": "var(--acc,#2563EB)", "fontSize": "14px", "fontWeight": "600", "cursor": "pointer", "fontFamily": "inherit" }}>
                                  {v.t.seeProject}
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                  </svg>
                                </button>
                              </div>
                            </article>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
              {v.isShowcase ? (
                <>
                  <div data-reveal="" style={{ "display": "flex", "flexWrap": "wrap", "gap": "24px", "alignItems": "flex-start", "marginBottom": "56px" }}>
                    <div role="tablist" aria-label={v.featLabel} style={{ "flex": "1 1 280px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#7A8291", "padding": "0 4px 6px" }}>
                        {v.featLabel}
                      </span>
                      {(v.featTabs || []).map((ft, $index) => (
                        <React.Fragment key={$index}>
                          <button role="tab" aria-selected={ft.sel} onClick={ft.select} className="dc18" style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "textAlign": "left", "padding": "18px 18px", "borderRadius": "14px", "border": `1px solid ${ft.bd}`, "background": ft.bg, "boxShadow": ft.sh, "cursor": "pointer", "fontFamily": "inherit", "transition": "background 180ms,box-shadow 180ms,border-color 180ms" }}>
                            <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "13px", "fontWeight": "600", "color": ft.numC, "paddingTop": "3px" }}>
                              {ft.num}
                            </span>
                            <span style={{ "display": "flex", "flexDirection": "column", "gap": "5px", "minWidth": "0" }}>
                              <span style={{ "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-0.015em", "color": "#151B27" }}>
                                {ft.name}
                              </span>
                              <span style={{ "fontSize": "14px", "lineHeight": "1.5", "color": "#61697A", "textWrap": "pretty" }}>
                                {ft.sub}
                              </span>
                              <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": ft.numC, "marginTop": "2px" }}>
                                {ft.kind}
                              </span>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                    <article role="tabpanel" style={{ "flex": "3 1 560px", "minWidth": "0", "background": "#F6F7F9", "border": "1px solid #E6E9EE", "borderRadius": "18px", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                      <div style={{ "padding": "clamp(14px,2vw,24px) clamp(14px,2vw,24px) 0" }}>
                        <div style={{ "background": "#fff", "border": "1px solid #E1E5EB", "borderRadius": "12px", "overflow": "hidden", "boxShadow": "0 18px 40px -22px rgba(21,27,39,.35)" }}>
                          <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "padding": "10px 14px", "borderBottom": "1px solid #EDF0F3" }}>
                            <span style={{ "display": "flex", "gap": "6px" }}>
                              <span style={{ "width": "9px", "height": "9px", "borderRadius": "50%", "background": "#E1E5EB" }} />
                              <span style={{ "width": "9px", "height": "9px", "borderRadius": "50%", "background": "#E1E5EB" }} />
                              <span style={{ "width": "9px", "height": "9px", "borderRadius": "50%", "background": "#E1E5EB" }} />
                            </span>
                            <span style={{ "flex": "1", "minWidth": "0", "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "color": "#7A8291", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap" }}>
                              {v.feat.name} · {v.feat.shotPos}
                            </span>
                            <span style={{ "display": "flex", "alignItems": "center", "gap": "5px", "fontSize": "11.5px", "color": "#7A8291" }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                              </svg>
                              {v.t.private}
                            </span>
                          </div>
                          <button onClick={v.feat.openShot} aria-label={v.t.seeProject} style={{ "display": "block", "width": "100%", "padding": "0", "border": "0", "background": "#F1F4F8", "cursor": "zoom-in" }}>
                            <img src={v.feat.shotSrc} decoding="async" width="1600" height="1000" alt={v.feat.shotCap} style={{ "display": "block", "width": "100%", "height": "auto", "aspectRatio": "16/9", "objectFit": "cover", "objectPosition": "top left" }} />
                          </button>
                        </div>
                        <div style={{ "display": "flex", "gap": "8px", "overflowX": "auto", "padding": "12px 0 4px" }}>
                          {(v.feat.thumbs || []).map((th, $index) => (
                            <React.Fragment key={$index}>
                              <button onClick={th.select} aria-label={th.cap} className="dc19" style={{ "flex": "0 0 84px", "height": "52px", "padding": "0", "border": `2px solid ${th.ring}`, "opacity": th.op, "borderRadius": "7px", "overflow": "hidden", "background": "#E9EDF3", "cursor": "pointer", "transition": "opacity 180ms" }}>
                                <img src={th.src} loading="lazy" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top left" }} />
                              </button>
                            </React.Fragment>
                          ))}
                        </div>
                        <p style={{ "margin": "0", "fontSize": "13px", "lineHeight": "1.5", "color": "#61697A", "minHeight": "20px" }}>
                          {v.feat.shotCap}
                        </p>
                      </div>
                      <div style={{ "padding": "clamp(20px,2.6vw,32px)", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                        <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                          <span style={{ "fontSize": "12px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "6px", "background": "#E6EEFD", "color": "#1D4ED8" }}>
                            {v.feat.role}
                          </span>
                          <span style={{ "fontSize": "12px", "fontWeight": "500", "padding": "5px 10px", "borderRadius": "6px", "background": "#fff", "border": "1px solid #DDE0E6", "color": "#4B5363" }}>
                            {v.feat.client}
                          </span>
                        </div>
                        <h3 style={{ "margin": "0", "fontSize": "clamp(22px,2.3vw,28px)", "fontWeight": "700", "letterSpacing": "-0.025em", "lineHeight": "1.2", "textWrap": "balance" }}>
                          {v.feat.title}
                        </h3>
                        <p style={{ "margin": "0", "fontSize": "15.5px", "lineHeight": "1.65", "color": "#4B5363", "textWrap": "pretty", "maxWidth": "760px" }}>
                          {v.feat.summary}
                        </p>
                        <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "paddingTop": "4px" }}>
                          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "flex": "1 1 320px", "minWidth": "0" }}>
                            {(v.feat.stackShort || []).map((st, $index) => (
                              <React.Fragment key={$index}>
                                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "padding": "4px 9px", "borderRadius": "5px", "border": "1px solid #D3DDF3", "color": "#1D4ED8", "background": "#fff" }}>
                                  {st}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                          <button onClick={v.feat.open} className="dc20" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "11px 18px", "border": "0", "borderRadius": "9px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "14px", "fontWeight": "600", "cursor": "pointer", "fontFamily": "inherit" }}>
                            {v.t.seeProject}
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                </>
              ) : null}
              <div data-reveal="" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,320px),1fr))", "gap": "24px" }}>
                {(v.others || []).map((p, $index) => (
                  <React.Fragment key={$index}>
                    <article className="dc21" style={{ "display": "flex", "flexDirection": "column", "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "16px", "overflow": "hidden", "transition": "transform 250ms cubic-bezier(.2,.7,.2,1),box-shadow 250ms" }}>
                      <button onClick={p.open} style={{ "padding": "0", "border": "0", "borderBottom": "1px solid #E6E9EE", "background": "#E9EDF3", "cursor": "pointer", "overflow": "hidden" }}>
                        <img src={p.cover} loading="lazy" decoding="async" width="1600" height="1000" alt={p.title} style={{ "width": "100%", "height": "auto", "aspectRatio": "16/10", "objectFit": "contain", "objectPosition": "center" }} />
                      </button>
                      <div style={{ "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "flex": "1" }}>
                        <span style={{ "alignSelf": "flex-start", "fontSize": "12px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "6px", "background": "#E6EEFD", "color": "#1D4ED8" }}>
                          {p.role}
                        </span>
                        <h3 style={{ "margin": "0", "fontSize": "19px", "fontWeight": "700", "letterSpacing": "-0.015em", "lineHeight": "1.25", "textWrap": "balance" }}>
                          {p.title}
                        </h3>
                        <p style={{ "margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "#4B5363", "textWrap": "pretty" }}>
                          {p.summary}
                        </p>
                        <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px" }}>
                          {(p.stackShort || []).map((t, $index) => (
                            <React.Fragment key={$index}>
                              <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "padding": "3px 8px", "borderRadius": "5px", "border": "1px solid #D3DDF3", "color": "#1D4ED8" }}>
                                {t}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                        <div style={{ "marginTop": "auto", "paddingTop": "14px", "display": "flex", "flexWrap": "wrap", "gap": "10px" }}>
                          <button onClick={p.open} className="dc22" style={{ "display": "flex", "alignItems": "center", "gap": "7px", "padding": "9px 14px", "border": "0", "borderRadius": "8px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "13.5px", "fontWeight": "600", "cursor": "pointer" }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                            {v.t.seeProject}
                          </button>
                          <a href={p.link} target="_blank" rel="noopener" className="dc23" style={{ "display": "flex", "alignItems": "center", "gap": "7px", "padding": "9px 14px", "borderRadius": "8px", "border": "1px solid #DDE0E6", "color": "#151B27", "fontSize": "13.5px", "fontWeight": "600" }}>
                            {v.t.live}
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 17 17 7" />
                              <path d="M7 7h10v10" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <section id="skills" data-screen-label="Compétences" style={{ "position": "relative", "overflow": "hidden", "scrollMarginTop": "68px" }}>
            {v.skillsCubes}
            <div style={{ "position": "relative", "zIndex": "1", "maxWidth": "1240px", "margin": "0 auto", "padding": "clamp(72px,9vw,112px) 24px" }}>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "14px", "marginBottom": "56px" }}>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "var(--acc,#2563EB)" }}>
                  {v.t.eySkills}
                </span>
                <h2 style={{ "margin": "0", "fontSize": "clamp(32px,4.2vw,48px)", "fontWeight": "800", "letterSpacing": "-0.035em", "lineHeight": "1.05" }}>
                  {v.t.hS1}{" "}
                  <span style={{ "color": "var(--acc,#2563EB)" }}>
                    {v.t.hS2}
                  </span>
                </h2>
                <p style={{ "margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#61697A", "maxWidth": "620px", "textWrap": "pretty" }}>
                  {v.t.subSkills}
                </p>
              </div>
              <div data-reveal="" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,440px),1fr))", "gap": "20px" }}>
                {(v.skills || []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <div style={{ "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "16px", "padding": "26px 28px", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                        <span style={{ "width": "40px", "height": "40px", "borderRadius": "10px", "background": "#E6EEFD", "color": "#1D4ED8", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                          {c.i1 ? (
                            <>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="8" rx="2" />
                                <rect x="2" y="14" width="20" height="8" rx="2" />
                                <path d="M6 6h.01" />
                                <path d="M6 18h.01" />
                              </svg>
                            </>
                          ) : null}
                          {c.i2 ? (
                            <>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m16 18 6-6-6-6" />
                                <path d="m8 6-6 6 6 6" />
                              </svg>
                            </>
                          ) : null}
                          {c.i3 ? (
                            <>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <ellipse cx="12" cy="5" rx="9" ry="3" />
                                <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                                <path d="M3 12a9 3 0 0 0 18 0" />
                              </svg>
                            </>
                          ) : null}
                          {c.i4 ? (
                            <>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                              </svg>
                            </>
                          ) : null}
                        </span>
                        <h3 style={{ "margin": "0", "fontSize": "19px", "fontWeight": "700", "letterSpacing": "-0.01em" }}>
                          {c.title}
                        </h3>
                      </div>
                      <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column" }}>
                        {(c.rows || []).map((r, $index) => (
                          <React.Fragment key={$index}>
                            <li style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "padding": "11px 0", "borderTop": "1px solid #EEF0F3", "fontSize": "15px" }}>
                              <span style={{ "fontWeight": "500", "color": "#151B27" }}>
                                {r.label}
                              </span>
                              {r.expert ? (
                                <>
                                  <span style={{ "fontSize": "12px", "fontWeight": "600", "padding": "3px 9px", "borderRadius": "999px", "background": "#DCF5E5", "color": "#15803D" }}>
                                    Expert
                                  </span>
                                </>
                              ) : null}
                              {r.note ? (
                                <>
                                  <span style={{ "fontSize": "13px", "color": "#7A8291" }}>
                                    {r.note}
                                  </span>
                                </>
                              ) : null}
                            </li>
                          </React.Fragment>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div data-reveal="" style={{ "marginTop": "20px", "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "16px", "padding": "26px 28px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px 28px" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "flex": "none" }}>
                  <span style={{ "width": "40px", "height": "40px", "borderRadius": "10px", "background": "#DCF5E5", "color": "#15803D", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22v-5" />
                      <path d="M9 8V2" />
                      <path d="M15 8V2" />
                      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                    </svg>
                  </span>
                  <h3 style={{ "margin": "0", "fontSize": "19px", "fontWeight": "700", "letterSpacing": "-0.01em" }}>
                    {v.t.integr}
                  </h3>
                </div>
                <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                  {(v.integrations || []).map((t, $index) => (
                    <React.Fragment key={$index}>
                      <span className="dc24" style={{ "fontSize": "14px", "fontWeight": "500", "padding": "8px 14px", "borderRadius": "8px", "background": "#F3F5F8", "color": "#2A3243" }}>
                        {t}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div data-reveal="" style={{ "marginTop": "56px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "20px" }}>
                <h3 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                  {v.t.methods}
                </h3>
                <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "10px" }}>
                  {(v.methods || []).map((m, $index) => (
                    <React.Fragment key={$index}>
                      <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "11px 18px", "borderRadius": "999px", "border": "1.5px solid #BFD0F7", "background": "#fff", "color": "#1D4ED8", "fontSize": "15px", "fontWeight": "600" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {m}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="certifications" data-screen-label="Certifications" style={{ "background": "#FFFFFF", "scrollMarginTop": "68px", "borderTop": "1px solid #E6E9EE", "borderBottom": "1px solid #E6E9EE" }}>
            <div style={{ "maxWidth": "1240px", "margin": "0 auto", "padding": "clamp(72px,9vw,112px) 24px" }}>
              <div data-reveal="" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "24px", "marginBottom": "40px" }}>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px", "maxWidth": "620px" }}>
                  <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "var(--acc,#2563EB)" }}>
                    {v.t.eyCerts}
                  </span>
                  <h2 style={{ "margin": "0", "fontSize": "clamp(32px,4.2vw,48px)", "fontWeight": "800", "letterSpacing": "-0.035em", "lineHeight": "1.05" }}>
                    {v.t.hC1}{" "}
                    <span style={{ "color": "var(--acc,#2563EB)" }}>
                      Certifications
                    </span>
                  </h2>
                  <p style={{ "margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#61697A", "textWrap": "pretty" }}>
                    {v.t.subCerts}
                  </p>
                  <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px", "paddingTop": "6px" }}>
                    {(v.certTabs || []).map((t, $index) => (
                      <React.Fragment key={$index}>
                        <button onClick={t.pick} style={{ "padding": "8px 14px", "borderRadius": "999px", "border": `1px solid ${t.bd}`, "background": t.bg, "color": t.fg, "fontSize": "13.5px", "fontWeight": "600", "cursor": "pointer" }}>
                          {t.label}{" "}
                          <span style={{ "opacity": ".7", "fontWeight": "500" }}>
                            {t.n}
                          </span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ "display": "flex", "gap": "8px" }}>
                  <button onClick={v.certPrev} aria-label="Précédent" className="dc25" style={{ "width": "44px", "height": "44px", "borderRadius": "50%", "border": "1px solid #DDE0E6", "background": "#fff", "color": "#151B27", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button onClick={v.certNext} aria-label="Suivant" className="dc26" style={{ "width": "44px", "height": "44px", "borderRadius": "50%", "border": "1px solid #DDE0E6", "background": "#fff", "color": "#151B27", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div ref={v.certRef} data-reveal="" style={{ "display": "flex", "gap": "20px", "overflowX": "auto", "scrollSnapType": "x mandatory", "scrollbarWidth": "none", "padding": "4px 2px 8px" }}>
                {(v.certs || []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    <div style={{ "flex": "0 0 clamp(260px,30%,360px)", "scrollSnapAlign": "start", "background": "#F6F7F9", "border": "1px solid #E6E9EE", "borderRadius": "16px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                      <div style={{ "display": "flex", "alignItems": "flex-start", "justifyContent": "space-between" }}>
                        <span style={{ "width": "44px", "height": "44px", "borderRadius": "10px", "background": "#fff", "border": "1px solid #E6E9EE", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "fontWeight": "500", "color": "#151B27" }}>
                          {c.mark}
                        </span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="M22 4 12 14.01l-3-3" />
                        </svg>
                      </div>
                      <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                        <h3 style={{ "margin": "0", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-0.01em", "lineHeight": "1.25" }}>
                          {c.title}
                        </h3>
                        <span style={{ "fontSize": "14px", "color": "#61697A" }}>
                          {c.issuer}
                        </span>
                      </div>
                      <div style={{ "marginTop": "auto", "paddingTop": "14px", "borderTop": "1px solid #E6E9EE", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "6px" }}>
                        <a href={c.href} target="_blank" rel="noopener" style={{ "display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "13.5px", "fontWeight": "600", "color": "var(--acc,#2563EB)" }}>
                          {v.t.seeCert}
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
          <section id="experience" data-screen-label="Expérience" style={{ "position": "relative", "overflow": "hidden", "scrollMarginTop": "68px" }}>
            {v.expCubes}
            <div style={{ "position": "relative", "zIndex": "1", "maxWidth": "1240px", "margin": "0 auto", "padding": "clamp(72px,9vw,112px) 24px" }}>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "14px", "marginBottom": "64px" }}>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "var(--acc,#2563EB)" }}>
                  {v.t.eyExp}
                </span>
                <h2 style={{ "margin": "0", "fontSize": "clamp(32px,4.2vw,48px)", "fontWeight": "800", "letterSpacing": "-0.035em", "lineHeight": "1.05" }}>
                  {v.t.hE1}{" "}
                  <span style={{ "color": "var(--acc,#2563EB)" }}>
                    {v.t.hE2}
                  </span>
                </h2>
                <p style={{ "margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#61697A", "maxWidth": "620px", "textWrap": "pretty" }}>
                  {v.t.subExp}
                </p>
              </div>
              <div style={{ "position": "relative" }}>
                <div style={{ "position": "absolute", "top": "0", "bottom": "0", "left": v.lineLeft, "width": "2px", "marginLeft": "-1px", "background": "#D3DDF3" }} />
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "40px" }}>
                  {(v.exps || []).map((e, $index) => (
                    <React.Fragment key={$index}>
                      <div data-reveal="" style={{ "position": "relative", "display": "flex", "flexDirection": e.dir }}>
                        <span style={{ "position": "absolute", "left": v.lineLeft, "top": "28px", "width": "16px", "height": "16px", "marginLeft": "-8px", "borderRadius": "50%", "background": "var(--acc,#2563EB)", "border": "4px solid #F6F7F9", "boxSizing": "border-box", "boxShadow": "0 0 0 1px #BFD0F7" }} />
                        <div style={{ "width": v.cardW, "marginLeft": v.cardML, "boxSizing": "border-box", "background": "#fff", "border": "1px solid #E6E9EE", "borderRadius": "16px", "padding": "26px", "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                          <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "flex-start", "justifyContent": "space-between", "gap": "10px" }}>
                            <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                              <h3 style={{ "margin": "0", "fontSize": "20px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                                {e.role}
                              </h3>
                              <span style={{ "display": "flex", "alignItems": "center", "gap": "7px", "fontSize": "14.5px", "fontWeight": "600", "color": "#1D4ED8" }}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "none" }}>
                                  <rect x="4" y="2" width="16" height="20" rx="2" />
                                  <path d="M9 22v-4h6v4" />
                                  <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
                                </svg>
                                {e.org}
                              </span>
                            </div>
                            <span style={{ "fontSize": "12px", "fontWeight": "600", "padding": "4px 10px", "borderRadius": "999px", "background": e.badgeBg, "color": e.badgeFg }}>
                              {e.label}
                            </span>
                          </div>
                          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "16px", "fontSize": "13.5px", "color": "#61697A" }}>
                            <span style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                              </svg>
                              {e.period}
                            </span>
                            <span style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                              {e.location}
                            </span>
                          </div>
                          {(e.groups || []).map((g, $index) => (
                            <React.Fragment key={$index}>
                              <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                                {g.title ? (
                                  <>
                                    <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#151B27" }}>
                                      {g.title}
                                    </span>
                                  </>
                                ) : null}
                                <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                                  {(g.items || []).map((b, $index) => (
                                    <React.Fragment key={$index}>
                                      <li style={{ "display": "flex", "gap": "10px", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#3A4252" }}>
                                        <span style={{ "flex": "none", "width": "6px", "height": "6px", "marginTop": "8px", "borderRadius": "50%", "background": "var(--acc,#2563EB)" }} />
                                        <span style={{ "textWrap": "pretty" }}>
                                          {b}
                                        </span>
                                      </li>
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </div>
                            </React.Fragment>
                          ))}
                          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px", "paddingTop": "4px" }}>
                            {(e.stack || []).map((t, $index) => (
                              <React.Fragment key={$index}>
                                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "padding": "3px 8px", "borderRadius": "5px", "border": "1px solid #D3DDF3", "color": "#1D4ED8" }}>
                                  {t}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div data-reveal="" style={{ "marginTop": "72px", "background": "#151B27", "borderRadius": "18px", "padding": "clamp(28px,4vw,44px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "28px" }}>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "textAlign": "center" }}>
                  <span style={{ "fontSize": "44px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#fff" }}>
                    4+
                  </span>
                  <span style={{ "fontSize": "15px", "color": "#B8C0CE" }}>
                    {v.t.st1}
                  </span>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "textAlign": "center" }}>
                  <span style={{ "fontSize": "44px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#fff" }}>
                    4
                  </span>
                  <span style={{ "fontSize": "15px", "color": "#B8C0CE" }}>
                    {v.t.st2}
                  </span>
                </div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "textAlign": "center" }}>
                  <span style={{ "fontSize": "44px", "fontWeight": "800", "letterSpacing": "-0.04em", "color": "#fff" }}>
                    1 700+
                  </span>
                  <span style={{ "fontSize": "15px", "color": "#B8C0CE" }}>
                    {v.t.st3}
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" data-screen-label="Contact" style={{ "position": "relative", "overflow": "hidden", "background": "#FFFFFF", "scrollMarginTop": "68px", "borderTop": "1px solid #E6E9EE" }}>
            {v.contactCubes}
            <div style={{ "position": "relative", "zIndex": "1", "maxWidth": "1240px", "margin": "0 auto", "padding": "clamp(72px,9vw,112px) 24px" }}>
              <div data-reveal="" style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "14px", "marginBottom": "56px" }}>
                <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "var(--acc,#2563EB)" }}>
                  {v.t.eyContact}
                </span>
                <h2 style={{ "margin": "0", "fontSize": "clamp(32px,4.2vw,48px)", "fontWeight": "800", "letterSpacing": "-0.035em", "lineHeight": "1.05" }}>
                  {v.t.hCt1}{" "}
                  <span style={{ "color": "var(--acc,#2563EB)" }}>
                    {v.t.hCt2}
                  </span>
                </h2>
                <p style={{ "margin": "0", "fontSize": "17px", "lineHeight": "1.6", "color": "#61697A", "maxWidth": "620px", "textWrap": "pretty" }}>
                  {v.t.subContact}
                </p>
              </div>
              <div data-reveal="" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,440px),1fr))", "gap": "24px" }}>
                <form onSubmit={v.submit} style={{ "background": "#F6F7F9", "border": "1px solid #E6E9EE", "borderRadius": "18px", "padding": "clamp(22px,3vw,34px)", "display": "flex", "flexDirection": "column", "gap": "18px" }}>
                  <h3 style={{ "margin": "0", "fontSize": "22px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                    {v.t.formTitle}
                  </h3>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px" }}>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px", "fontSize": "14px", "fontWeight": "600" }}>
                      {v.t.fName}
                      <input name="name" required placeholder={v.t.phName} className="dc27" style={{ "height": "46px", "padding": "0 14px", "borderRadius": "9px", "border": "1px solid #D5D9E0", "background": "#fff", "fontSize": "15px", "color": "#151B27", "outline": "none" }} />
                    </label>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px", "fontSize": "14px", "fontWeight": "600" }}>
                      Email *
                      <input name="email" type="email" required placeholder={v.t.phEmail} className="dc28" style={{ "height": "46px", "padding": "0 14px", "borderRadius": "9px", "border": "1px solid #D5D9E0", "background": "#fff", "fontSize": "15px", "color": "#151B27", "outline": "none" }} />
                    </label>
                  </div>
                  <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px", "fontSize": "14px", "fontWeight": "600" }}>
                    {v.t.fSubject}
                    <input name="subject" required placeholder={v.t.phSubject} className="dc29" style={{ "height": "46px", "padding": "0 14px", "borderRadius": "9px", "border": "1px solid #D5D9E0", "background": "#fff", "fontSize": "15px", "color": "#151B27", "outline": "none" }} />
                  </label>
                  <label style={{ "display": "flex", "flexDirection": "column", "gap": "7px", "fontSize": "14px", "fontWeight": "600" }}>
                    Message *
                    <textarea name="message" required rows="6" placeholder={v.t.phMsg} className="dc30" style={{ "padding": "12px 14px", "borderRadius": "9px", "border": "1px solid #D5D9E0", "background": "#fff", "fontSize": "15px", "lineHeight": "1.55", "color": "#151B27", "outline": "none", "resize": "vertical" }} />
                  </label>
                  <button type="submit" className="dc31" style={{ "height": "50px", "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "9px", "border": "0", "borderRadius": "10px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "15px", "fontWeight": "600", "cursor": "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    {v.t.send}
                  </button>
                </form>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <div style={{ "border": "1px solid #E6E9EE", "borderRadius": "18px", "padding": "clamp(22px,3vw,30px)", "display": "flex", "flexDirection": "column", "gap": "6px" }}>
                    <h3 style={{ "margin": "0 0 10px", "fontSize": "20px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                      {v.t.infoTitle}
                    </h3>
                    <a href="mailto:kodonoumahuwanu@gmail.com" className="dc32" style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "10px", "margin": "0 -10px", "borderRadius": "10px", "color": "#151B27" }}>
                      <span style={{ "flex": "none", "width": "44px", "height": "44px", "borderRadius": "10px", "background": "#E6EEFD", "color": "#1D4ED8", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-10 5L2 7" />
                        </svg>
                      </span>
                      <span style={{ "display": "flex", "flexDirection": "column", "minWidth": "0" }}>
                        <span style={{ "fontSize": "13px", "color": "#61697A" }}>
                          Email
                        </span>
                        <span style={{ "fontSize": "15px", "fontWeight": "600", "overflowWrap": "anywhere" }}>
                          kodonoumahuwanu@gmail.com
                        </span>
                      </span>
                    </a>
                    <a href="tel:+2290160905269" className="dc33" style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "10px", "margin": "0 -10px", "borderRadius": "10px", "color": "#151B27" }}>
                      <span style={{ "flex": "none", "width": "44px", "height": "44px", "borderRadius": "10px", "background": "#E6EEFD", "color": "#1D4ED8", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <span style={{ "display": "flex", "flexDirection": "column" }}>
                        <span style={{ "fontSize": "13px", "color": "#61697A" }}>
                          {v.t.phone}
                        </span>
                        <span style={{ "fontSize": "15px", "fontWeight": "600" }}>
                          +229 01 60 90 52 69
                        </span>
                      </span>
                    </a>
                    <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "10px", "margin": "0 -10px" }}>
                      <span style={{ "flex": "none", "width": "44px", "height": "44px", "borderRadius": "10px", "background": "#E6EEFD", "color": "#1D4ED8", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <span style={{ "display": "flex", "flexDirection": "column" }}>
                        <span style={{ "fontSize": "13px", "color": "#61697A" }}>
                          {v.t.locLabel}
                        </span>
                        <span style={{ "fontSize": "15px", "fontWeight": "600" }}>
                          {v.t.loc}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div style={{ "border": "1px solid #E6E9EE", "borderRadius": "18px", "padding": "clamp(22px,3vw,30px)", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px" }}>
                    <h3 style={{ "margin": "0", "fontSize": "20px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                      {v.t.follow}
                    </h3>
                    <div style={{ "display": "flex", "gap": "10px" }}>
                      <a href="https://github.com/Sunday2000" target="_blank" rel="noopener" className="dc34" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "10px 14px", "borderRadius": "10px", "border": "1px solid #DDE0E6", "color": "#151B27", "fontSize": "14px", "fontWeight": "600" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        GitHub
                      </a>
                      <a href="https://linkedin.com/in/sunday-kodonon-b6a8331a5" target="_blank" rel="noopener" className="dc35" style={{ "display": "flex", "alignItems": "center", "gap": "8px", "padding": "10px 14px", "borderRadius": "10px", "border": "1px solid #DDE0E6", "color": "#151B27", "fontSize": "14px", "fontWeight": "600" }}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div style={{ "flex": "1", "background": "#151B27", "color": "#fff", "borderRadius": "18px", "padding": "clamp(22px,3vw,30px)", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                    <h3 style={{ "margin": "0", "fontSize": "20px", "fontWeight": "700", "letterSpacing": "-0.015em" }}>
                      {v.t.availability}
                    </h3>
                    {v.available ? (
                      <>
                        <span style={{ "display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "15px", "fontWeight": "600", "color": "#86EFAC" }}>
                          <span style={{ "width": "9px", "height": "9px", "borderRadius": "50%", "background": "#22C55E", "boxShadow": "0 0 0 4px rgba(34,197,94,.2)" }} />
                          {v.t.avail}
                        </span>
                      </>
                    ) : null}
                    {v.busy ? (
                      <>
                        <span style={{ "display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "15px", "fontWeight": "600", "color": "#FCD34D" }}>
                          <span style={{ "width": "9px", "height": "9px", "borderRadius": "50%", "background": "#F59E0B" }} />
                          {v.t.busyC}
                        </span>
                      </>
                    ) : null}
                    <p style={{ "margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "#B8C0CE" }}>
                      {v.t.reply}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer style={{ "background": "#151B27", "color": "#fff" }}>
          <div style={{ "maxWidth": "1240px", "margin": "0 auto", "padding": "64px 24px 32px" }}>
            <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "40px" }}>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "14px" }}>
                <span style={{ "fontSize": "22px", "fontWeight": "800", "letterSpacing": "-0.02em" }}>
                  Sunday KODONON
                </span>
                <p style={{ "margin": "0", "fontSize": "14.5px", "lineHeight": "1.65", "color": "#B8C0CE", "maxWidth": "340px" }}>
                  {v.t.footP}
                </p>
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                <span style={{ "fontSize": "15px", "fontWeight": "700" }}>
                  Navigation
                </span>
                {(v.nav || []).map((l, $index) => (
                  <React.Fragment key={$index}>
                    <a href={l.href} className="dc36" style={{ "fontSize": "14.5px", "color": "#B8C0CE" }}>
                      {l.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
              <div style={{ "display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "flex-start" }}>
                <span style={{ "fontSize": "15px", "fontWeight": "700" }}>
                  Contact
                </span>
                <a href="mailto:kodonoumahuwanu@gmail.com" className="dc37" style={{ "fontSize": "14.5px", "color": "#B8C0CE", "overflowWrap": "anywhere" }}>
                  kodonoumahuwanu@gmail.com
                </a>
                <a href="tel:+2290160905269" className="dc38" style={{ "fontSize": "14.5px", "color": "#B8C0CE" }}>
                  +229 01 60 90 52 69
                </a>
                <span style={{ "fontSize": "14.5px", "color": "#B8C0CE" }}>
                  {v.t.city}
                </span>
                <a href="#contact" className="dc39" style={{ "marginTop": "6px", "padding": "10px 16px", "borderRadius": "9px", "border": "1px solid rgba(255,255,255,.35)", "color": "#fff", "fontSize": "14px", "fontWeight": "600" }}>
                  {v.t.start}
                </a>
              </div>
            </div>
            <div style={{ "marginTop": "48px", "paddingTop": "24px", "borderTop": "1px solid rgba(255,255,255,.12)", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "12px", "fontSize": "13.5px", "color": "#9AA2B1" }}>
              <span>
                {v.t.rights}
              </span>
              <a href="#hero" className="dc40" style={{ "color": "#B8C0CE" }}>
                {v.t.top}
              </a>
            </div>
          </div>
        </footer>
        {v.showTop ? (
          <>
            <a href="#hero" aria-label="Retour en haut" className="dc41" style={{ "position": "fixed", "right": "24px", "bottom": "24px", "zIndex": "40", "width": "48px", "height": "48px", "borderRadius": "50%", "background": "var(--acc,#2563EB)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "boxShadow": "0 10px 30px -8px rgba(37,99,235,.6)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </a>
          </>
        ) : null}
        {v.toast ? (
          <>
            <div style={{ "position": "fixed", "left": "50%", "bottom": "28px", "transform": "translateX(-50%)", "zIndex": "120", "display": "flex", "alignItems": "center", "gap": "12px", "padding": "14px 18px", "borderRadius": "12px", "background": "#151B27", "color": "#fff", "fontSize": "14.5px", "boxShadow": "0 16px 40px -12px rgba(21,27,39,.5)", "maxWidth": "calc(100% - 48px)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "none" }}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>
                <strong>
                  {v.t.toastA}
                </strong>
                {" "}{v.t.toastB}
              </span>
            </div>
          </>
        ) : null}
        {v.modal ? (
          <>
            <div onClick={v.closeModal} style={{ "position": "fixed", "inset": "0", "zIndex": "100", "background": "rgba(21,27,39,.6)", "backdropFilter": "blur(4px)", "display": "flex", "justifyContent": "center", "alignItems": "flex-start", "overflowY": "auto", "padding": "clamp(12px,4vh,48px) 16px" }}>
              <div onClick={v.stop} style={{ "position": "relative", "width": "100%", "maxWidth": "1000px", "background": "#fff", "borderRadius": "20px", "overflow": "hidden", "boxShadow": "0 40px 80px -20px rgba(21,27,39,.45)" }}>
                <button onClick={v.closeModal} aria-label="Fermer" style={{ "position": "absolute", "top": "14px", "right": "14px", "zIndex": "2", "width": "44px", "height": "44px", "borderRadius": "50%", "border": "0", "background": "rgba(255,255,255,.95)", "color": "#151B27", "display": "flex", "alignItems": "center", "justifyContent": "center", "cursor": "pointer", "boxShadow": "0 2px 8px rgba(21,27,39,.15)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
                <div style={{ "background": "#E9EDF3" }}>
                  <img src={v.modal.shot.src} decoding="async" alt={v.modal.shot.cap} style={{ "width": "100%", "maxHeight": "560px", "objectFit": "contain", "objectPosition": "top" }} />
                </div>
                <div style={{ "padding": "14px 20px", "borderBottom": "1px solid #E6E9EE", "display": "flex", "flexDirection": "column", "gap": "12px" }}>
                  <div style={{ "display": "flex", "gap": "8px", "overflowX": "auto" }}>
                    {(v.modal.shots || []).map((s, $index) => (
                      <React.Fragment key={$index}>
                        <button onClick={s.select} style={{ "flex": "0 0 96px", "padding": "0", "border": `2px solid ${s.ring}`, "opacity": s.op, "borderRadius": "7px", "overflow": "hidden", "background": "#E9EDF3", "cursor": "pointer" }}>
                          <img src={s.src} alt="" loading="lazy" decoding="async" style={{ "width": "100%", "aspectRatio": "16/10", "objectFit": "cover", "objectPosition": "left top" }} />
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <span style={{ "fontSize": "13px", "color": "#61697A" }}>
                    {v.modal.shot.cap}
                  </span>
                </div>
                <div style={{ "padding": "clamp(22px,4vw,40px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,320px),1fr))", "gap": "32px 40px" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px", "gridColumn": "1/-1" }}>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px" }}>
                      <span style={{ "fontSize": "12px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "6px", "background": "#E6EEFD", "color": "#1D4ED8" }}>
                        {v.modal.role}
                      </span>
                      <span style={{ "fontSize": "12px", "fontWeight": "500", "padding": "5px 10px", "borderRadius": "6px", "border": "1px solid #DDE0E6", "color": "#4B5363" }}>
                        {v.modal.kind}
                      </span>
                    </div>
                    <h2 style={{ "margin": "0", "fontSize": "clamp(26px,3.2vw,36px)", "fontWeight": "800", "letterSpacing": "-0.03em", "lineHeight": "1.1", "textWrap": "balance" }}>
                      {v.modal.title}
                    </h2>
                    <span style={{ "fontSize": "14.5px", "color": "#61697A" }}>
                      {v.modal.client}
                    </span>
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "22px" }}>
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#7A8291" }}>
                        {v.t.context}
                      </span>
                      <p style={{ "margin": "0", "fontSize": "15.5px", "lineHeight": "1.65", "color": "#3A4252", "textWrap": "pretty" }}>
                        {v.modal.context}
                      </p>
                    </div>
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>
                      <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#7A8291" }}>
                        {v.t.myRole}
                      </span>
                      <p style={{ "margin": "0", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#151B27", "fontWeight": "500" }}>
                        {v.modal.roleLong}
                      </p>
                    </div>
                    {v.modal.hasMetrics ? (
                      <>
                        <div style={{ "display": "grid", "gridTemplateColumns": "repeat(2,minmax(0,1fr))", "gap": "10px" }}>
                          {(v.modal.metrics || []).map((m, $index) => (
                            <React.Fragment key={$index}>
                              <div style={{ "background": "#F6F7F9", "borderRadius": "10px", "padding": "12px 14px", "display": "flex", "flexDirection": "column", "gap": "2px" }}>
                                <span style={{ "fontSize": "22px", "fontWeight": "700", "letterSpacing": "-0.02em" }}>
                                  {m.v}
                                </span>
                                <span style={{ "fontSize": "12.5px", "color": "#61697A" }}>
                                  {m.l}
                                </span>
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "22px" }}>
                    {v.modal.hasPoints ? (
                      <>
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                          <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#7A8291" }}>
                            {v.t.achievements}
                          </span>
                          <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                            {(v.modal.points || []).map((pt, $index) => (
                              <React.Fragment key={$index}>
                                <li style={{ "display": "flex", "gap": "10px", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#3A4252" }}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "none", "marginTop": "3px" }}>
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                  <span style={{ "textWrap": "pretty" }}>
                                    {pt}
                                  </span>
                                </li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : null}
                    {(v.modal.groups || []).map((g, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                          <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#7A8291" }}>
                            {g.title}
                          </span>
                          <ul style={{ "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                            {(g.items || []).map((pt, $index) => (
                              <React.Fragment key={$index}>
                                <li style={{ "display": "flex", "gap": "10px", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#3A4252" }}>
                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ "flex": "none", "marginTop": "3px" }}>
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                  <span style={{ "textWrap": "pretty" }}>
                                    {pt}
                                  </span>
                                </li>
                              </React.Fragment>
                            ))}
                          </ul>
                        </div>
                      </React.Fragment>
                    ))}
                    <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px" }}>
                      <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "11.5px", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#7A8291" }}>
                        Stack
                      </span>
                      <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "6px" }}>
                        {(v.modal.stack || []).map((t, $index) => (
                          <React.Fragment key={$index}>
                            <span style={{ "fontFamily": "'Geist Mono',monospace", "fontSize": "12px", "padding": "4px 9px", "borderRadius": "5px", "border": "1px solid #D3DDF3", "color": "#1D4ED8" }}>
                              {t}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    {v.modal.hasLink ? (
                      <>
                        <a href={v.modal.link} target="_blank" rel="noopener" className="dc42" style={{ "alignSelf": "flex-start", "display": "flex", "alignItems": "center", "gap": "8px", "padding": "12px 18px", "borderRadius": "10px", "background": "var(--acc,#2563EB)", "color": "#fff", "fontSize": "14.5px", "fontWeight": "600" }}>
                          {v.t.visit} {v.modal.linkLabel}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      </>
                    ) : null}
                    {v.modal.nda ? (
                      <>
                        <span style={{ "display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "14px", "color": "#61697A" }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                          </svg>
                          {v.t.nda}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      </>
    );
  }
}
