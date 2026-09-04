# Bagel Doctor — Website

A menu, cart, and demo checkout for Bagel Doctor.

## Files

```
bagel-doctor/
├── index.html      the page structure and content
├── css/
│   └── styles.css  all styling (colors, layout, fonts)
├── js/
│   └── script.js   menu data, tabs, cart, and checkout logic
└── README.md        this file
```

## Running it

No build step needed. Just open `index.html` in a browser, or serve the
folder with any static file server, e.g.:

```
npx serve .
```

or in Python:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## What's interactive right now

- **Tabs** — Bagels / Breakfast / Sandwiches / Drinks / By the Pound, with a
  Cold/Hot toggle inside Sandwiches.
- **Add to cart** — every item is clickable: bagel/flat flavor chips, the "+"
  button on any priced row (spreads, breakfast, salads, meats, coffee,
  by-the-pound, etc.), and the On Roll / On Hero buttons on hot sandwiches.
- **Cart drawer** — top-right "Cart" button opens a slide-out panel with
  quantity controls, item removal, and a running subtotal.
- **Checkout** — collects name, phone, email, and either a pickup time or a
  delivery address + window, then shows an order confirmation with a demo
  order number.

## About the checkout — this is a demo

The checkout does **not** process real payments and never collects real
card details. It's a placeholder so the ordering flow can be tested end to
end. To make it real, you'll need:

1. **A payment provider account** — Stripe is the simplest to wire in here;
   Square or PayPal also work.
2. **Business verification** with that provider (legal business name,
   address, bank account for payouts, tax ID).
3. **Your Publishable key only** (never the Secret key — that stays private
   to you) — from the provider's dashboard.
4. A choice between **Payment Links** (no backend needed, fastest to launch)
   or a **full Checkout integration** (needs a small backend to create
   charges — useful if you want the cart total passed through dynamically).
5. Your **real pickup address/hours** and **delivery fee/radius** —
   `js/script.js` currently uses `123 Main Street` and a flat `$4.99`
   delivery fee as placeholders (search for `DELIVERY_FEE` and
   `123 Main Street` to edit them).

Once you have a Publishable key or Payment Link, that's the only thing that
needs to be added — everything else (cart, totals, order form) is already
built and ready to connect.
