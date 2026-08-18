# 💐 Evelyn & Alexander — Premium Wedding Invitation

A cinematic, ultra-premium **interactive digital wedding invitation** built with React + Vite + TypeScript, featuring:

- 🌸 **60fps Canvas Blossom Petal Engine** — physics-based falling petals with depth & wind
- 🕯️ **Wax Seal Envelope Opening** — animated luxury reveal ceremony
- 🎵 **Procedural Romantic Music** — Web Audio API piano & harp synthesizer
- 📖 **Our Story Timeline** — floating parallax scroll narrative
- 🖼️ **Cinematic Gallery** — full-screen image carousels
- 🗺️ **Interactive Venue Map** — embedded with directions
- ✉️ **RSVP Form** — animated guest response
- ✨ **Glassmorphism UI** — premium frosted-glass components

---

## 🚀 Deploy to GitHub Pages

### Step 1 — Push your code to GitHub

If you haven't already, create a repo named **`Wedding_invitation`** on GitHub, then run:

```bash
cd "c:\Users\cozme\Desktop\invitation"
git init
git add .
git commit -m "✨ Initial commit — Premium Wedding Invitation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Wedding_invitation.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your GitHub username.

### Step 2 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

That's it! 🎉 The `.github/workflows/deploy.yml` workflow will automatically build and deploy on every push to `main`.

### Step 3 — Visit your live invitation

Your invitation will be live at:

```
https://YOUR_USERNAME.github.io/Wedding_invitation/
```

> **First deploy takes ~2 minutes.** Check the **Actions** tab in your repo to watch it build.

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/Wedding_invitation/](http://localhost:5173/Wedding_invitation/)

## 📦 Build

```bash
npm run build
```

The production-ready files are output to `dist/`.

---

## ✏️ Customize

All wedding details (names, dates, venue, events, RSVP, photos) live in one file:

**[`src/config/weddingConfig.ts`](./src/config/weddingConfig.ts)**

Edit that file to make this invitation your own!
