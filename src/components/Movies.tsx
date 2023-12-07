"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  item: any;
};

function Movies({ item }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="relative cursor-pointer text-white group"
    >
      <div className="absolute bottom-0 p-3">
        <div className="text-2xl font-bold">{item?.title || item?.name}</div>
        <div className="hidden group-hover:block transition-all">
          {item?.release_date} - {item?.vote_average}
        </div>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${item?.poster_path || item?.backdrop_path}`}
        alt={item?.title || item?.name}
        width={500}
        height={500}
        className="group-hover:opacity-50 transition-opacity object-cover"
      />
    </div>
  );
}

export default Movies;
