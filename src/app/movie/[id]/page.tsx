import Image from "next/image";
import React from "react";

type Props = {
  params: any;
};

const getMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=fcc8b808bc96eb2c84fb28b8da9ffdfa`
  );
  return await res.json();
};

const Movie = async ({ params }: Props) => {
  const id = params.id;
  const movieDetail = await getMovie(id);

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        src={`https://image.tmdb.org/t/p/original${movieDetail?.backdrop_path}`}
        alt={movieDetail?.title || movieDetail?.name}
        fill
        className="group-hover:opacity-50 transition-opacity object-cover"
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">{movieDetail.release_date} - {movieDetail.vote_average}</div>
        <div className="my-2 border w-32 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black">Trail</div>
      </div>
    </div>
  );
};

export default Movie;
