import Movies from "@/components/Movies";
import React from "react";

type Props = {
  params: any;
};

const Page = async ({ params }: Props) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=fcc8b808bc96eb2c84fb28b8da9ffdfa&language=en-US&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div className="text-4xl font-bold text-center">No Result</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-5">
          {data.results.map((item: any, index: number) => (
            <Movies key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
