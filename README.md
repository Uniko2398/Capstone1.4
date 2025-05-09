# Capstone1.1

📦 EpicMediaWorld – E-Commerce React + Sanity CMS
EpicMediaWorld è un progetto e-commerce sviluppato con React, TypeScript e Sanity CMS. L’obiettivo è simulare un sito professionale per la vendita online di prodotti tech, ispirato a noti marketplace digitali. Il progetto include un frontend dinamico e una gestione dei dati strutturata tramite CMS headless.

🚀 Tech Stack

Frontend: React + TypeScript

Styling: React Bootstrap

State Management: Context API

Routing: React Router v6

Backend: Sanity.io (CMS headless)

Build Tooling: Vite / Create React App

Deployment: GitHub (esportabile)

🛒 Funzionalità principali

✅ Navigazione e UX

Header dinamico con icone interattive (carrello, wishlist, utente)

Navbar responsiva e adattiva con search bar, link rapidi e branding

Sidebar filtri per la navigazione per categoria

Alert promozionale dinamico in alto

🧩 Gestione prodotti

Lista prodotti con filtro dinamico per categoria

Schede prodotto con:

Badge dinamici

Prezzo con sconto calcolato

Rating visivo (stelle)

Specifiche tecniche basate sulla categoria

ProductPage con dettagli completi, specs e azione “Aggiungi al carrello”

❤️ Wishlist

Aggiunta/rimozione prodotti dalla wishlist

Salvataggio persistente in localStorage

Badge wishlist aggiornato in tempo reale

🛍️ Carrello

CartPage con:

Visualizzazione dei prodotti aggiunti

Modifica quantità

Calcolo totale dinamico

Pulsante “Paga ora” con redirect a pagina di conferma

Stato del carrello salvato in localStorage

✅ Checkout

Simulazione del processo di pagamento

Redirect a Thank You Page

📦 CMS – Sanity

Utilizziamo Sanity.io per la gestione dinamica del catalogo prodotti.

Tipi di contenuto configurati:

Product con:

Titolo, immagine, categoria, item, prezzo, rating

Campi specifici per categoria (Telefonia, Computer, Console, etc.)

Specifiche tecniche condizionali

Query GROQ:

Fetch dinamico dei prodotti tramite:

client.fetch(`*[_type == "product"]{ ... }`)

🧠 Architettura stato

CartContext.tsx: gestisce logica carrello globale

useProducts.ts: hook per fetch dinamico da Sanity

ProductCard.tsx: UI + gestione eventi locali (carrello, wishlist)

🛠️ Setup progetto

Clona il repository

git clone https://github.com/Uniko2398/Capstone1.4.git

cd Capstone1.4

⚙️ Installa le dipendenze frontend

cd frontend

npm install

npm run start

⚙️Setup Sanity CMS

cd backend/studio

npm install

npm run dev

🎯 Obiettivi futuri

Integrazione con gateway di pagamento reale (Stripe, PayPal)

Login/registrazione utente

Dashboard admin per ordini e prodotti

Barra di ricerca dinaminca

🤝 Autore

O. Nicolas Osauwa
GitHub: @Uniko2398

