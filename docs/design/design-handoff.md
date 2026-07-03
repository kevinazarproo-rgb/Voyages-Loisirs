# Handoff : Page d'accueil — Voyages Loisirs

## Overview
Page d'accueil marketing pour **Voyages Loisirs**, agence de voyages française spécialisée dans les circuits accompagnés haut de gamme pour une clientèle senior (55–75 ans). Le concept central : **6 destinations sélectionnées par an**, une par période de 2 mois. Quand une destination est complète, elle est retirée. Paiement en 4×, 6× ou 10× sans frais. Objectif de la page : inspirer confiance, transmettre une image premium accessible, et convertir vers la réservation / le rappel téléphonique.

## About the Design Files
Le fichier `Voyages Loisirs.dc.html` de ce bundle est une **référence de design créée en HTML** — un prototype montrant l'apparence et le comportement souhaités, **pas du code de production à copier tel quel**. Il utilise un runtime interne (« Design Components ») propre à l'outil de maquettage ; ne le réutilisez pas dans le projet final.

La tâche consiste à **recréer ce design dans l'environnement existant du codebase cible** (React, Vue, Next.js, Astro, etc.) en suivant ses patterns et bibliothèques établis. Si aucun environnement n'existe encore, choisissez le framework le plus adapté à un site marketing (par ex. Next.js ou Astro) et implémentez-y le design. Toutes les valeurs (couleurs, typo, espacements, copy) sont documentées ci-dessous pour être reproduites fidèlement.

## Fidelity
**High-fidelity (hifi).** Maquette aboutie : couleurs, typographie, espacements et interactions finaux. À recréer au pixel près en utilisant les composants et conventions du codebase. Les images sont des placeholders Unsplash à remplacer par les visuels réels du client. Prix et badges de disponibilité sont des exemples à brancher sur les données réelles.

---

## Design Tokens

### Couleurs
| Rôle | Hex |
|---|---|
| Fond principal (crème/ivoire) | `#FAF6F0` |
| Fond carte / surface claire | `#FFFDFA` |
| Fond section témoignages (sable) | `#F3EBDF` |
| Encre foncée (texte, sections sombres) | `#1C2B2D` |
| Footer (encre plus sombre) | `#16211F` |
| Accent terracotta (CTA, liens, badges) | `#C0754D` |
| Terracotta hover (plus foncé) | `#a9603a` |
| Or doux / accent clair sur fond sombre | `#E8C9A8` |
| Or clair alternatif (surtitres hero) | `#EBD9C4` |
| Texte secondaire (sur crème) | `#55625f` |
| Texte tertiaire / labels gris | `#7d8a86` |
| Texte très clair (notes) | `#94a09c` |

Sur fonds sombres, le texte blanc utilise `rgba(250,246,240,.9 / .75 / .72)` selon la hiérarchie.

### Typographie
- **Titres / display** : `"Cormorant Garamond", serif` — poids 500/600/700, italique 500/600. Utilisée pour tous les `<h1>`/`<h2>`/`<h3>`, les prix, les chiffres clés, les avatars, le logo. **Un mot par titre est mis en italique + couleur accent** (`font-style:italic; color:#C0754D` ou `#E8C9A8`).
- **Corps / UI** : `"DM Sans", system-ui, sans-serif` — poids 400/500/600/700.
- Import Google Fonts :
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap`

**Échelle typo (cible senior — corps ≥ 17px)**
| Usage | Taille | Poids | Autres |
|---|---|---|---|
| Corps de base (`body`) | 18px | 400 | line-height 1.6 |
| H1 hero | clamp(48px, 7vw, 86px) | 600 | line-height 1.02, letter-spacing -.5px |
| H2 sections | clamp(38px, 4.6vw, 58px) | 600 | line-height ~1.05 |
| H3 cartes destination | 32px | 600 | line-height 1 |
| H3 arguments | 25px | 600 | — |
| Surtitres / eyebrows | 14px | 700 | letter-spacing 2.5px, UPPERCASE, couleur accent |
| Labels de champs (barre recherche) | 12px | 700 | letter-spacing 1.2px, UPPERCASE |
| Prix | 30px | 600 | Cormorant |
| Chiffres clés hero | 46px | 600 | Cormorant |
| Citations témoignages | 23px | 500 italic | Cormorant |
| Boutons CTA | 17px | 600 | — |
| Nav links | 15px | 500 | — |

### Espacements & rayons
- Largeur de contenu max : **1280px** (barre de recherche : 1180px ; newsletter : 960px).
- Padding horizontal des sections : **40px**.
- Padding vertical des sections : **110–120px** (sombre 110px, destinations 120px).
- Gap grilles : **28px** (cartes), **34px** (arguments).
- Border radius : cartes/blocs **14px** ; grands blocs image+texte / paiement **18–20px** ; boutons & champs **6–9px** ; badges & pills **100px** ; icônes carrées **12px**.

### Ombres
- Carte destination (repos) : `0 2px 10px rgba(28,43,45,.05)`
- Carte destination (hover) : `0 26px 50px rgba(28,43,45,.16)` + `translateY(-6px)`
- Barre de recherche flottante : `0 24px 60px rgba(28,43,45,.15)`
- Bloc image+texte : `0 20px 50px rgba(28,43,45,.08)`
- CTA terracotta hero : `0 10px 30px rgba(192,117,77,.35)`

### Texture
Overlay de grain SVG (`feTurbulence baseFrequency=0.9`) à **opacity .05–.06** sur le hero et le bloc paiement sombre.

---

## Screens / Views

Page unique, sections empilées verticalement. Ordre de haut en bas :

### 1. Header (fixe)
- **Purpose** : navigation persistante + accès rapide téléphone et réservation.
- **Layout** : `position:fixed`, pleine largeur, `z-index:100`. Contenu centré max 1280px, `display:flex; justify-content:space-between; align-items:center`. Backdrop-blur 10px.
- **Comportement au scroll** : au-delà de 40px de scroll, le fond passe de `rgba(250,246,240,.35)` à `rgba(250,246,240,.92)`, une ombre `0 6px 24px rgba(28,43,45,.08)` apparaît, et le padding vertical passe de 22px à 14px (transition .4s ease).
- **Composants** :
  - Logo texte : « Voyages Loisirs » (Cormorant 26px/600) + sous-titre « CIRCUITS ACCOMPAGNÉS » (10px, letter-spacing 3px, uppercase, `#C0754D`).
  - Nav (DM Sans 15px/500) : Accueil · Destinations · Expériences · Avis · Contact (ancres `#top`, `#destinations`, `#experiences`, `#avis`, `#contact`).
  - Bloc téléphone aligné à droite : label « CONSEILLERS » (11px gris) + « 01 44 55 66 77 » (17px/700), `href="tel:+33144556677"`.
  - Bouton « Réserver » : fond `#1C2B2D`, texte `#FAF6F0`, 14px 26px, radius 6px, hover fond `#C0754D`.

### 2. Hero (plein écran)
- **Purpose** : accroche émotionnelle + preuve de confiance chiffrée.
- **Layout** : `min-height:100vh`, `display:flex; align-items:center`, padding `150px 40px 80px`. Image de fond `cover` position `center 40%`. Overlay dégradé `linear-gradient(100deg, rgba(28,43,45,.82) 0%, rgba(28,43,45,.55) 45%, rgba(28,43,45,.25) 100%)` + grain. Contenu limité à 760px de large, aligné à gauche.
- **Composants** :
  - Pill surtitre : « Voyages accompagnés · Payez en 4×, 6× ou 10× sans frais » — bordure `rgba(235,217,196,.4)`, texte `#EBD9C4`, uppercase 15px/600, radius 100px.
  - H1 : « Le monde vous attend, **partez** le vivre » (« partez » en italique `#E8C9A8`).
  - Sous-titre 20px `rgba(250,246,240,.9)`, max 560px.
  - 2 CTA : « Découvrir nos destinations » (fond `#C0754D`, ombre portée) + « Être rappelé » (fond translucide `rgba(250,246,240,.12)`, bordure claire). Padding `19px 38px`, radius 8px.
  - 3 chiffres clés séparés par filets verticaux : **6** destinations par an · **10×** sans frais · **4.9/5** note voyageurs. Chiffres en Cormorant 46px, « /5 » en `#E8C9A8`.

### 3. Barre de recherche / filtres (flottante)
- **Purpose** : point d'entrée de recherche, chevauche le hero.
- **Layout** : conteneur max 1180px, `margin-top:-52px` (chevauchement), `z-index:20`. Carte `#FFFDFA`, radius 14px, ombre `0 24px 60px`. `display:grid; grid-template-columns:1fr 1fr 1fr 1fr auto; gap:6px`. Chaque champ : label uppercase accent + `<select>`. Séparateurs `border-left` entre champs. Hover champ : fond `#FAF6F0`.
- **Champs** : Voyageurs · Budget · Destination · Date de départ · bouton « Rechercher » (fond `#1C2B2D`, icône loupe, hover `#C0754D`).

### 4. Nos 6 destinations 2026
- **Purpose** : présenter la sélection annuelle avec rareté/urgence.
- **Layout** : max 1280px, padding `120px 40px 40px`. En-tête flex space-between (titre à gauche, « 06 départs garantis » à droite en Cormorant 60px `#C0754D`). Grille `repeat(3,1fr); gap:28px` → 3×2 cartes.
- **En-tête** : eyebrow « LA SÉLECTION 2026 » · H2 « Nos 6 destinations **de l'année** » · accroche « Une seule sélection par an, une par période de deux mois. Quand c'est complet, c'est complet. »
- **Carte destination** (répétée ×6) :
  - `<a>` cliquable, fond `#FFFDFA`, radius 14px, bordure `rgba(28,43,45,.07)`. Hover : `translateY(-6px)` + ombre forte (transition .5s ease).
  - Image `aspect-ratio:4/3`, `object-fit:cover`, dégradé bas `rgba(28,43,45,.35)`.
  - Badge en haut à gauche (radius 100px, uppercase 12px/700) — deux styles :
    - « Dernières places » / « Bientôt complet » : fond `#C0754D`, texte `#FAF6F0`.
    - « Places disponibles » : fond `rgba(255,253,250,.92)`, texte `#1C2B2D`.
  - Corps : période (13px uppercase `#C0754D`) · nom (Cormorant 32px) · description (16px `#55625f`) · pied avec « à partir de » + prix (Cormorant 30px) et « Voir le circuit → » (`#C0754D`).
  - **Contenu des 6 cartes :**
    1. **Marrakech** — Janvier–Février — « Médina, palmeraies et douceur de l'hiver marocain. » — à partir de **1 290 €** — badge *Dernières places*.
    2. **Tokyo** — Mars–Avril — « Les cerisiers en fleurs et l'art de vivre japonais. » — **2 490 €** — *Places disponibles*.
    3. **Santorin** — Mai–Juin — « Couchers de soleil sur la Caldeira et villages blancs. » — **1 690 €** — *Bientôt complet*.
    4. **Bali** — Juillet–Août — « Rizières en terrasses, temples et hospitalité balinaise. » — **2 190 €** — *Places disponibles*.
    5. **Safari Kenya** — Septembre–Octobre — « La grande faune du Masaï Mara au rythme de la savane. » — **2 890 €** — *Dernières places*.
    6. **Maldives** — Novembre–Décembre — « Lagons turquoise et repos absolu au bord de l'eau. » — **2 690 €** — *Places disponibles*.

### 5. Voyager l'esprit tranquille (4 arguments, fond sombre)
- **Purpose** : réassurance, lever les freins de la cible senior.
- **Layout** : fond `#1C2B2D`, texte crème, padding `110px 40px`. En-tête centré (eyebrow « L'ESPRIT TRANQUILLE », H2 « Voyager sans **la moindre** inquiétude »). Grille `repeat(4,1fr); gap:34px`.
- **Item** : icône (SVG line, `stroke:#E8C9A8`, 26px) dans un carré 56px radius 12px fond `rgba(232,201,168,.14)` · titre Cormorant 25px · texte 16px `rgba(250,246,240,.72)`.
- **Les 4 arguments** :
  1. **Accompagné de bout en bout** (icône personne) — « Un accompagnateur francophone à vos côtés, du départ jusqu'au retour à la maison. »
  2. **Un rythme tranquille** (icône horloge) — « Des journées pensées sans course ni précipitation. On prend le temps de tout savourer. »
  3. **4×, 6× ou 10× sans frais** (icône carte bancaire) — « Étalez le règlement de votre voyage à votre rythme, sans aucun frais supplémentaire. »
  4. **Des conseillers à l'écoute** (icône téléphone) — « Une vraie personne au téléphone pour répondre à toutes vos questions, avant et pendant. »

### 6. Tout est déjà organisé pour vous (image + texte)
- **Layout** : max 1280px, padding `120px 40px`. Bloc `grid-template-columns:1.05fr .95fr`, radius 18px, fond `#FFFDFA`. Gauche : image `min-height:520px` cover. Droite : padding `70px 66px`, texte centré verticalement.
- **Contenu** : eyebrow « CLÉ EN MAIN » · H2 « Tout est déjà **organisé** pour vous » · paragraphe 18px · liste de 4 items avec pastille ronde terracotta ✓ (26px) :
  - Vols au départ de Paris inclus
  - Hôtels de charme, confort garanti
  - Excursions et repas typiques prévus
  - Assistance 24h/24 pendant le séjour

### 7. Témoignages
- **Purpose** : preuve sociale rassurante.
- **Layout** : fond `#F3EBDF`, padding `110px 40px`. En-tête centré (eyebrow « ILS SONT PARTIS AVEC NOUS », H2 « Des souvenirs **pour la vie** »). Grille `repeat(3,1fr); gap:28px`.
- **Carte avis** : fond `#FFFDFA`, radius 14px, padding `38px 34px`. Étoiles ★★★★★ (`#C0754D`, 20px, letter-spacing 3px). Citation Cormorant 23px italic. Avatar rond 48px fond `#C0754D` avec initiales (Cormorant blanc) + nom (16px/600) + contexte (14px gris).
  - **Jacqueline M.** — Santorin · Mai 2025 — « Tout était parfait, du premier appel jusqu'au retour. On s'est laissés porter, sans aucun souci. Santorin restera un souvenir merveilleux. »
  - **Michel & Françoise** — Safari Kenya · Oct. 2025 — « Le safari au Kenya était un rêve d'enfance. Un rythme adapté, un accompagnateur formidable et attentionné. Nous recommandons les yeux fermés. »
  - **Colette R.** — Marrakech · Févr. 2025 — « J'appréhendais de voyager seule à mon âge. J'ai été rassurée dès le départ et parfaitement entourée. Marrakech était éblouissant. Merci à toute l'équipe. »

### 8. Réassurance paiement
- **Layout** : max 1280px, padding `110px 40px`. Bloc `#1C2B2D`, radius 20px, padding `70px 60px`, centré, grain en overlay.
- **Contenu** : eyebrow « PAIEMENT EN TOUTE SÉRÉNITÉ » · H2 « Payez en 4×, 6× ou 10× — **sans frais** » · paragraphe · rangée de 5 pills moyens de paiement (fond `rgba(250,246,240,.1)`, bordure claire, 12px 26px, radius 8px) : Visa · Mastercard · American Express · PayPal · Apple Pay · puis 2 mentions avec icônes : « Paiement crypté SSL » (cadenas) et « Voyage garanti & assuré » (bouclier), texte `rgba(250,246,240,.7)`.

### 9. Newsletter
- **Layout** : max 960px, padding `0 40px 120px`, centré.
- **Contenu** : H2 « Les meilleures offres, **avant tout le monde** » · paragraphe · formulaire inline (`<input type=email>` + bouton « S'inscrire » terracotta). À la soumission, le bouton affiche « Merci ✓ » (state local). Note « Pas de spam. Désinscription en un clic. »

### 10. Footer
- **Layout** : fond `#16211F`, texte `rgba(250,246,240,.75)`, padding `80px 40px 40px`. Grille `1.4fr 1fr 1fr 1fr; gap:48px`, filet bas puis rangée légale.
- **Colonnes** :
  - **Marque** : logo Cormorant + sous-titre + phrase « Six destinations d'exception chaque année, pour voyager l'esprit léger. » + 3 icônes sociales (Facebook, Instagram, YouTube) en carrés 40px bordés.
  - **Découvrir** : Nos 6 destinations · Nos circuits accompagnés · Voyages sur mesure · Cartes cadeaux.
  - **L'agence** : Qui sommes-nous · Avis voyageurs · Nos garanties · Conditions générales.
  - **Contact** : « 01 44 55 66 77 » (19px/600 blanc) · « Du lundi au samedi, 9h – 19h » · « 18 rue du Voyage, 75008 Paris, France » · « bonjour@voyages-loisirs.fr ».
  - Ligne légale : « © 2026 Voyages Loisirs · IM075240012 · Voyages garantis APST » + liens Mentions légales · Confidentialité · Cookies.

---

## Interactions & Behavior
- **Header au scroll** : listener `scroll` (passif) ; bascule d'état booléen à `scrollY > 40` → change fond / ombre / padding avec transition CSS .4s.
- **Scroll reveal** : chaque élément marqué `data-reveal` démarre à `opacity:0; translateY(26px)` et s'anime vers `opacity:1; translateY(0)` (transition .8s `cubic-bezier(.22,.61,.36,1)`) quand il entre dans le viewport (IntersectionObserver, threshold 0.12, rootMargin `0px 0px -8% 0px`, `unobserve` après). **Progressive enhancement** : si IntersectionObserver absent, le contenu reste visible (ne jamais masquer sans JS).
- **Hover cartes destination** : `translateY(-6px)` + ombre renforcée (.5s ease).
- **Hover CTA / boutons** : bascule de couleur de fond (terracotta ↔ terracotta foncé, ou encre ↔ terracotta).
- **Newsletter** : `preventDefault` sur submit, label bouton → « Merci ✓ ». (À brancher sur le vrai service d'emailing.)
- **Ancres** : `scroll-behavior:smooth` sur `<html>` ; les liens nav pointent vers les `id` de sections.
- **Responsive** : les grilles `repeat(3/4,1fr)` doivent passer à 2 puis 1 colonne sur tablette/mobile ; la barre de recherche passe en colonne ; le bloc image+texte s'empile. Le hero garde `min-height:100vh` avec padding réduit. (Le prototype n'implémente pas encore les breakpoints — à ajouter avec les conventions du codebase ; recommandé : ≥1024px = desktop, 640–1023px = 2 col, <640px = 1 col.)

## State Management
- `scrolled: boolean` — header condensé.
- `subscribed: boolean` — état du formulaire newsletter.
- Données à externaliser côté prod : liste des **destinations** (nom, période, description, prix, badge de disponibilité, image, URL circuit), **témoignages**, moyens de paiement. Prévoir un statut de disponibilité (`disponible` / `dernieres_places` / `bientot_complet` / `complet`) piloté par le back-office, avec retrait automatique quand complet.

## Assets
- **Images** : placeholders Unsplash (hero plage/voyage, Marrakech, Tokyo, Santorin, Bali, safari Kenya, Maldives, bloc « organisé »). **À remplacer par les visuels réels du client** (droits à sécuriser). Prévoir un léger overlay chaud + éventuellement un grain sur les photos.
- **Icônes** : SVG inline en trait (style Feather/Lucide) — personne, horloge, carte bancaire, téléphone, loupe, cadenas, bouclier, réseaux sociaux. Remplaçables par la lib d'icônes du codebase.
- **Fonts** : Cormorant Garamond + DM Sans (Google Fonts).
- **Logos moyens de paiement** : rendus en texte dans le proto — utiliser les vrais logos vectoriels Visa/Mastercard/Amex/PayPal/Apple Pay en prod.

## Files
- `Voyages Loisirs.dc.html` — prototype de référence complet (design + interactions). Ouvrir dans un navigateur pour voir le rendu ; s'en servir comme source de vérité visuelle, sans réutiliser le runtime interne.
