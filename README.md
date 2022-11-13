Préparation pour le test : 

Pour réaliser ce test, j’ai choisi d’utiliser un template basé sur l’un des dernier projet que j’ai réalisé, ma carte de visite à destination des recruteurs ( https://nano.daviani.dev ), pour deux raison : 
- NextJS propose une version simplifiée du système de routage que l’on peut initialement trouvé sur ReactJS, ce qui me permettra de gagner du temps, si le test contient plusieurs pages.
- En créant un template à partir d’un projet déjà existant, je n’ai pas de configuration, tout est déjà prêt à être utilisé afin de démarrer le test au plus vite.


Concernant la palette de couleur, j’utilise le theme Nord.
Afin de finaliser mes préparations, j’ai créé le repository git, que j’ai ensuite déployé sur vercel.

Pendant le test technique : 

J’ai pris environ 20 minutes afin d’analyser l'ensemble des consignes, ainsi que la maquette adobe XD.

Après avoir pris en compte le sujet, j’ai créé une feuille de route -sur papier- afin de tracer un plan général d’action et ainsi organiser les différentes tâches à effectuer.

Voici les différentes étapes :
- Création du composant ProgressBar et import de ce dernier dans mon composant Layout.
- Création du composant Button et import de ce dernier dans mon composant Layout.
- Création de deux state “mainPercentage” et “secondaryPercentage”, qui ont pour valeur initiale, respectivement 50 et 25.
- Implémentation d’une première fonction “backToZero” dont l’objectif est de passer à 0.
- Implémentation de deux fonctions, dont l’objectif est d’incrémenter la valeur de nos deux state, de respectivement 5% et 10%, après réflection, j’ai également ajouter une condition afin d’empêcher les différentes valeur de passer les 100 %, dans le but d’empêcher de futur soucis d’affichage à venir.
- Pour les composants  ProgressBar et Button, j’ai créé une première props “title”, afin pouvoir pouvoir réutiliser ces derniers sur l’ensemble de mes besoins (j'appelle deux fois ProgressBar et trois fois le composant Button).
- Pour le composant ProgessBar, je donne la props “percentage”, avec pour valeur “mainPercentage” et “secondaryPercentage” que j’affiche dans un premier temps en brut dans le composant ProgessBar.
- Pour le composant Button, je créer une props  “action”, avec pour valeur les trois méthode implémenter plutôt, afin de pouvoir les exécuter ensuite grâce à un écouteur d’événement de type onClick.
- Un petit peu de CSS maintenant, j’englobe ensuite les boutons dans une balise et j’utilise flexbox pour les afficher à l’horizontal, j’en profite également pour créer une règle CSS  afin de donner un style au bouton. 
- Sur le composant ProgessBar, j’ajoute une règle CSS afin de définir le cadre de la barre de progression (hauteur, largeur ainsi qu’une bordure).
- Je créer un composant Filler au quel je passe la props "percentage",  ce composant représente le remplissage de ma barre de progression.
- Dans le composant Filler j’utilise la balise style pour définir donner une largeur qui à pour valeur ma props “percentage” et je créer une fonction qui a pour but de définir la couleur à utiliser en fonction du pourcentage



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
