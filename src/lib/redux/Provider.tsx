// lib/redux/Provider.tsx

'use client'; // 👈 Essential: Marks this as a Client Component

import { Provider } from 'react-redux';
import { store } from './store'; // Import the store instance

// We receive the children (the rest of the app) as props
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  // We pass the single, global store instance to the Provider
  return <Provider store={store}>{children}</Provider>;
}