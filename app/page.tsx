import type { Data } from "./types";
import DataList from "./DataList";
import NextClosingDate from "./NextClosingDate";

const Home = async () => {
  const dataUrl = 'https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/previsions_pont_chaban/records?where=date_passage%20%3E%20now()&limit=20';
  const data = await fetch(dataUrl, { cache: 'no-store' })
    .then(res => res.json()) as Data;

  return (
    <main className="container min-h-screen mx-auto px-4 bg-image">
      <h1 className="text-4xl font-semibold text-center my-8">
        Horaires de fermeture du pont Chaban-Delmas
      </h1>
     <NextClosingDate data={data} />
      <h3 className="text-2xl font-semibold text-center mt-4">
        Prochains passages
      </h3>
      <div className="mx-auto w-fit p-4">
        <DataList data={data} />
      </div>
    </main>
  );
}

export default Home;
