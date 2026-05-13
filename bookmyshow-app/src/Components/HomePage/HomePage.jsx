import React from "react";

import AddCarousel from "./AddCarousel";
import CommonCarousel from "./CommonCarousel";
import Entertainment from "./Entertainment";
import LatestEvents from "./LatestEvents";
import LaughterEvents from "./LaughterEvents";
import MovieCarousel from "./MovieCarousel";
import OutdoorEvents from "./OutdoorEvents";
import PopularEvents from "./PopularEvents";
import PremierMovies from "./PremierMovies";
import RecommendedMovies from "./RecommendedMovies";

function HomePage() {
  return (
    <div>
      <AddCarousel />
      <MovieCarousel />
      <RecommendedMovies />
      <PremierMovies />
      <Entertainment />
      <LatestEvents />
      <LaughterEvents />
      <OutdoorEvents />
      <PopularEvents />
      <CommonCarousel />
    </div>
  );
}

export default HomePage;
