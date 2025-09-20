# alx-project-0x00

## Setup

This project was scaffolded using:

```bash
npx create-next-app@latest alx-project-0x00 --typescript

## Routing

Implemented basic routing using Next.js Pages Router.

Routes added:
- `/landing` → Landing Page
- `/about` → About Page

## Components

Created reusable components:
- `Card`: displays property listing with image, title, location, rating, and price
- `Pill`: dynamic label component used inside `Card`

Images used:
- `/public/assets/images/house.png`
- `/public/assets/images/star.png`

## Component Usage

Used the `Card` component inside the `Landing` page to render multiple property listings.

Each `Card` includes:
- Static image
- Dynamic `Pill` components with props
- Title, location, rating, and price

Demonstrates modular design and reusability.

## TypeScript Interfaces

Defined `PillProps` interface in `interfaces/index.ts` to type the `Pill` component.

This enables:
- Prop validation
- Reusability across components
- Cleaner, scalable architecture

## Button Component

Created a reusable `Button` component with dynamic props:
- `title`: button label
- `styles`: Tailwind CSS classes for size and shape

Used in `/landing` page with variations:
- Small, Medium, Large
- Rounded-sm, rounded-md, rounded-full

