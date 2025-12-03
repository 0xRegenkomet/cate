# $CATE - Le Surfing Guitar Cat

A Next.js web app for the $CATE memecoin.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js 14 App Router pages and layouts
- `components/` - React components (Navbar, MainSection, SocialSection, ChartSection, Footer)
- `public/` - Static assets (add CATE Logo.png here when available)

## Features

- ✅ Responsive Navbar with ticker, CA (coming soon), and Buy Now button
- ✅ Main section with logo placeholder
- ✅ Social section with X Community, X Account, and Dexscreener cards
- ✅ Chart section placeholder
- ✅ Footer with regenkomet.dev attribution
- ✅ Styled with logo colors (orange, blue, pink, purple, gold)
- ✅ Banner background pattern

## Next Steps

1. Add `CATE Logo.png` to the `public/` folder
2. Update the MainSection component to use the actual logo image
3. Add actual social media links to the SocialSection cards
4. Integrate Dexscreener or TradingView chart in ChartSection
5. Update contract address in Navbar when available
