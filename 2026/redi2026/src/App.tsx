// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Newsfeed } from './Newsfeed'
import { BASE_URL } from './queries/useNewsItems'
// import { ProductFeed } from './ProductFeed';

const SEED_TITLES = [
  "Space Exploration Reaches New Heights",
  "Breakthroughs in Renewable Energy",
  "AI Transforms Modern Healthcare",
  "Ocean Cleanup Project Hits Milestone",
  "Electric Vehicles Outsell Combustion Cars",
  "Scientists Discover New Deep-Sea Species",
];

async function seedIfEmpty() {
  const items = await fetch(BASE_URL).then(r => r.json());
  if (items.length === 0) {
    await Promise.all(
      SEED_TITLES.map(title =>
        fetch(BASE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title }),
        })
      )
    );
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000 * 60,
    },
  },
});
seedIfEmpty();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Newsfeed />
      {/* <ProductFeed /> */}
    </QueryClientProvider>
  )
}

export default App
