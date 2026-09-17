# TirScore — Basket N'EPS

Application pour la saisie des scores de tir par les élèves (sur une tablette
unique mise à disposition de la classe) et le classement des équipes,
en EPS.

Elle fonctionne **entièrement hors-ligne, sans compte ni serveur** : toutes
les données (classes, équipes, élèves, leçons, résultats, matchs) sont
stockées directement sur la tablette, dans le navigateur. C'est une PWA
(Progressive Web App) : elle peut s'installer comme une vraie application,
avec son icône, et continuer de fonctionner sans connexion internet une
fois ouverte une première fois.

## Installer le site sur GitHub Pages (une fois, ~2 minutes)

1. Sur GitHub, ouvrez ce dépôt puis **Settings → Pages**.
2. Sous « Build and deployment », choisissez **Deploy from a branch**,
   branche `main`, dossier `/ (root)`, puis **Save**.
3. Au bout d'une à deux minutes, GitHub affiche l'adresse du site
   (`https://<votre-compte>.github.io/<nom-du-dépôt>/`). C'est terminé —
   aucune autre configuration n'est nécessaire (pas de clé, pas de compte à
   créer).

## Installer l'app sur la tablette de la classe

1. Ouvrez l'adresse du site (ci-dessus) dans le navigateur de la tablette.
2. Utilisez le menu du navigateur : **« Ajouter à l'écran d'accueil »**
   (Chrome/Android) ou **« Sur l'écran d'accueil »** (Safari/iPad).
3. Une icône TirScore apparaît sur l'écran d'accueil, comme une app
   installée. Elle continue de fonctionner sans connexion internet.

## Pour plusieurs enseignants

Chaque enseignant qui souhaite utiliser TirScore peut simplement ouvrir la
même adresse GitHub Pages sur sa propre tablette de classe : les données de
chacun restent séparées, puisqu'elles sont stockées localement, sur
l'appareil qui les a saisies. Il n'y a rien à configurer ni à partager entre
enseignants. Si vous préférez que chaque enseignant ait sa propre copie du
site (pour la personnaliser), utilisez le bouton **« Fork »** de GitHub sur
ce dépôt, puis répétez l'étape « Installer sur GitHub Pages » ci-dessus dans
le dépôt forké.

## Sauvegarde et transfert des données

Comme les données vivent uniquement sur la tablette (pas de serveur), pensez
à faire des sauvegardes régulières : dans l'espace enseignant, onglet
**Classes**, utilisez **« Télécharger la sauvegarde complète (JSON) »**.
Le fichier obtenu peut être réimporté avec **« Restaurer une sauvegarde
JSON »**, sur la même tablette ou sur une autre (utile si vous changez de
tablette, ou en cas de réinitialisation du navigateur).
Les résultats de tir peuvent aussi être exportés en CSV ou en Excel
(.xlsx) depuis l'onglet **Résultats tir**.

⚠️ Vider le cache du navigateur, ou désinstaller l'app, efface les données
stockées localement — pensez à sauvegarder avant.

## Contenu du dépôt

- `index.html` — l'application (page unique, HTML/CSS/JS).
- `manifest.json` — le manifeste PWA (nom, icônes, couleurs).
- `service-worker.js` — mise en cache pour le fonctionnement hors-ligne.
- `logo.png` et les fichiers `icon-*.png` / `apple-touch-icon.png` —
  le logo et ses déclinaisons (Android, iPad/iPhone, Windows) pour l'icône
  de l'app, afin qu'elle s'installe correctement sur tout type de tablette.

## À propos de la version « Artifact Claude »

Une version de cette même application existe aussi en tant qu'Artifact
hébergé par Claude (aucune installation nécessaire, lien à ouvrir
directement). Les deux versions partagent le même code ; seule la manière
de stocker les données diffère (base de données partagée fournie par Claude
côté Artifact, stockage local du navigateur côté GitHub Pages).
