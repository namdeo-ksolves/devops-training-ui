# DevOps Training UI

A small React + Vite site that presents a structured DevOps team training roadmap for on-prem environments.

## Live Site

`https://namdeo-ksolves.github.io/devops-training-ui/`

## Tech Stack

- React 18
- Vite 5
- GitHub Pages
- GitHub Actions

## Project Structure

- `src/main.jsx`: Vite entrypoint
- `src/App.jsx`: app wrapper
- `devops-training-plan.jsx`: main training-plan component and dataset
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Deployment

This repository deploys automatically to GitHub Pages when changes are pushed to `main`.

GitHub configuration:

- Repository `Settings` -> `Pages`
- `Source` -> `GitHub Actions`

## Updating Content

To edit the training roadmap, update the data and UI in `devops-training-plan.jsx`. The main curriculum is defined in `trainingData`, and the weekly summary bar is defined in `weeklyScheduleTemplate`.
