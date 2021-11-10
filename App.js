import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { HomePage } from './src/features/homepage/HomePage';

export default function App() {
  return (
    <>
    <HomePage/>
    <StatusBar style="auto" />
    </>
  );
}

