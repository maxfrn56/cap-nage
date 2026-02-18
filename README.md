# Cap'Nage – Bien-être en milieu aquatique

Site vitrine pour une maître-nageuse indépendante. Next.js 14, Tailwind CSS, Framer Motion.

## Lancer le projet

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Structure du projet

```
Cap'Nage/
├── app/
│   ├── layout.tsx          # Layout global, polices, Navbar/Footer
│   ├── page.tsx            # Accueil
│   ├── globals.css         # Design system, variables CSS
│   ├── qui-suis-je/
│   ├── prestations/
│   ├── reservation/
│   ├── evenements/
│   └── contact/
├── components/
│   ├── Navbar.tsx          # Barre de navigation (transparente → blanche au scroll)
│   ├── Footer.tsx
│   ├── Hero.tsx            # Section hero accueil
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Section.tsx         # Sections avec fade-in au scroll
│   └── Title.tsx
├── public/
│   └── images/
│       └── logo.png        # Logo Cap'Nage
├── tailwind.config.ts      # Couleurs (azur, indigo, cyan…), polices, animations
└── package.json
```

## Charte graphique

- **Couleurs :** Azur pastel (#a3daeb), Indigo (#1800ad), Cyan grisé (#1d393b), Blanc, Cream (#efe7dc)
- **Typographies :** Radley (titres), Raleway (sous-titres / textes)
- **Animations :** Fade-in au scroll, hover fluides, légère animation flottante (Hero)

## Personnalisation

- **Logo :** Remplacer `public/images/logo.png` par votre logo.
- **Photo portrait :** Sur la page « Qui suis-je », ajouter une image dans `public/images/portrait-placeholder.jpg` et réactiver le composant `Image` dans `app/qui-suis-je/page.tsx`.
- **Contact :** Modifier email, téléphone et liens réseaux dans `app/contact/page.tsx` et dans le Footer si besoin.
- **Carte :** Remplacer le placeholder Google Maps dans `app/contact/page.tsx` par un iframe ou composant carte.

## Prérequis

- Node.js 18+
- npm (ou yarn / pnpm)
