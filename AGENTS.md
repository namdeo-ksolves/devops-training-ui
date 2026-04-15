# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Vite + React site for a single training-plan page. The React entrypoint lives in `src/main.jsx`, the app wrapper in `src/App.jsx`, and the main UI component in `devops-training-plan.jsx` at the repository root. Deployment automation lives in `.github/workflows/deploy.yml`. If the app grows, move the main component and any shared data into `src/` instead of adding more large top-level files.

## Build, Test, and Development Commands
Use `npm install` once to install dependencies. Run `npm run dev` for local development, `npm run build` to create the production bundle in `dist/`, and `npm run preview` to inspect the built output locally. GitHub Pages deployment is handled by the `Deploy GitHub Pages` workflow on pushes to `main`.

## Coding Style & Naming Conventions
Match the existing file style: 2-space indentation, semicolons, and double-quoted strings. Use PascalCase for React components (`DevOpsTrainingPlan`), camelCase for functions and state (`toggleTopic`, `completedItems`), and descriptive `const` names for static datasets (`trainingData`, `weeklyScheduleTemplate`). Preserve the current `className` plus inline-style approach unless a broader refactor introduces dedicated styling files.

## Testing Guidelines
There is no automated test suite configured yet. Manual verification is required for every change: run `npm run dev`, expand and collapse phases, toggle checklist items, and confirm that per-phase and overall progress percentages update correctly. If you add automated tests, colocate them beside the component as `*.test.jsx` and focus on rendering, toggle behavior, and progress calculations.

## Commit & Pull Request Guidelines
Git history is not available in this workspace, so no existing commit convention can be inferred. Use short, imperative commit messages such as `Add topic progress toggle` or `Update OpenShift resources`. Pull requests should include a concise summary, screenshots or a short GIF for UI changes, the host-app validation steps you ran, and a note if any external links or curriculum content were changed.

## Content Maintenance
Keep the training data schema consistent: each phase should retain `phase`, `title`, `duration`, `description`, `topics`, and `resources` fields. When editing content, preserve phase order and verify external URLs before merging.
