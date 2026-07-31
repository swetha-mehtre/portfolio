# Pushing this portfolio to GitHub

The site is already committed locally in this folder (git repo initialized, 1 commit on `main`).
I can't push it myself — I don't have access to your GitHub credentials. Here's how to finish it:

## Option A — new repo (recommended)

1. Go to https://github.com/new and create a repo named e.g. `portfolio` (public, **do not** initialize with a README).
2. Then run these commands in this folder (`Desktop/portfolio/site`):

```bash
git remote add origin https://github.com/swetha-mehtre/portfolio.git
git push -u origin main
```

You'll be prompted to log in via your browser the first time (Git Credential Manager handles this automatically).

## Option B — reuse your existing `my-portfolio` repo

Since `my-portfolio` is your old, superseded portfolio, you could replace its content instead:

```bash
git remote add origin https://github.com/swetha-mehtre/my-portfolio.git
git push -u origin main --force
```

⚠️ `--force` overwrites the old repo's history entirely — only use this if you're fine losing the old portfolio's commit history.

## After pushing

Once it's on GitHub, let me know and I can:
- Add the repo link to the portfolio's own Contact section
- Set up GitHub Pages as a free backup host alongside the Vercel deployment
