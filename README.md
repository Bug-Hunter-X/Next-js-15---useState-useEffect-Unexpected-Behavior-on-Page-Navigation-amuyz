# Next.js 15 - useState/useEffect Unexpected Behavior

This repository demonstrates an uncommon issue encountered in a Next.js 15 application involving the `useState` and `useEffect` hooks.  The issue manifests as unexpected behavior when navigating between pages.

## Bug Description

The `About` page uses `useState` and `useEffect` to create a simple counter that increments every second.  The problem occurs when navigating away from the `About` page and then returning. The counter continues to increment, even though the component is unmounted and remounted.

## How to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Navigate to `/` (Home page).
6. Navigate back to `/about`. The counter will continue from where it left off instead of restarting from 0.

## Solution

The solution involves adding a cleanup function inside the useEffect which clears the interval. See the provided solution file for details. 
