import React from 'react';
import Footer from '../client/components/Theme/footer';
import Header from '../client/components/Theme/header';
import MovieListings from '../client/components/listing';

export default function Home() {
  
  

  return(
    <>
      <Header />
        <MovieListings />
      <Footer />
    </>
  );
  
}