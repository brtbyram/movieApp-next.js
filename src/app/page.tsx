import Movies from "@/components/Movies";

type Props = {
  searchParams: any;
};

const Home = async ({ searchParams }: Props) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=fcc8b808bc96eb2c84fb28b8da9ffdfa&language=en-US&page=1`,
    {
      next: { revalidate: 10000 },
    }
  );

  const data = await res.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center">
      {data.results.map((item: any, index: number) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};

export default Home;
