import React from 'react';
import MovieListings from '../client/components/listing';
import { Page } from '../client/components/Theme/page';

export default function Home() {
  
  

  return(
    <>
      <Page>
        <MovieListings />
      </Page>
    </>
  );
  
}