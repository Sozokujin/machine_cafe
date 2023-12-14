# machine_cafe

Ce projet est une simulation de machine à café en ligne de commande qui sert un café lorsque l'utilisateur insère au moins le montant nécessaire pour un café. Si l'utilisateur insère moins que le montant requis, ou si la machine est dans un état où elle ne peut pas servir, elle retourne l'argent.

## Fonctionnalités

- Accepte les montants de monnaie et sert un café si le montant est suffisant.
- Retourne l'argent si le montant est insuffisant ou si la machine ne peut pas servir.
- Les montants acceptés pour un test réussi sont : 50 cts, 1 € et 2 €.
- Les montants qui causeront un retour d'argent pour un test réussi sont : 1 ct, 2 cts, 5 cts, 10 cts, 20 cts.
- Peut être configurée pour simuler un état de non-fonctionnement et retourner l'argent même si le montant suffisant est inséré.

## Prérequis

Ce projet utilise Node.js et npm installés sur votre machine. Ce projet est construit avec TypeScript et utilise Jest pour les tests.

## Installation

Pour configurer le projet, il faut exécuter les commandes suivantes dans le répertoire du projet :

```sh
npm install
```

## Lancer l'application

Pour démarrer la simulation il faut exécuter la commande :

```sh
npm start
```

## Exécuter les tests

Pour démarrer les tests il faut exécuter la commande :

```sh
npm start
```
