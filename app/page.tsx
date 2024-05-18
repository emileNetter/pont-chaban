import type { Data } from "./types";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

import DataList from "./DataList";

const Home = async () => {
  const dataUrl = 'https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/previsions_pont_chaban/records?where=date_passage%20%3E%20now()&limit=20';
  const data = await fetch(dataUrl).then(res => res.json()) as Data;

  const nextClosingDate = new Date(data.results[0].date_passage);
  nextClosingDate.setHours(
    Number(data.results[0].fermeture_a_la_circulation.split(':')[0]),
    Number(data.results[0].fermeture_a_la_circulation.split(':')[1])
  );

  const days = differenceInDays(nextClosingDate, new Date());
  const hours = differenceInHours(nextClosingDate, new Date()) - days * 24;
  const minutes = differenceInMinutes(nextClosingDate, new Date()) - days * 24 * 60 - hours * 60;

  const displayDays = days > 1 ? 'jours' : `jour`;

  console.log(nextClosingDate);
  return (
    <main className="container min-h-screen mx-auto px-4 bg-image">
      <h1 className="text-4xl font-semibold text-center my-8">
        Horaires de fermeture du pont Chaban-Delmas
      </h1>
      <h2 className="text-2xl font-semibold text-center">
        Prochaine fermeture dans :
      </h2>
      <div className="text-center">
        {days} {displayDays} {hours} heures et {minutes} minutes
      </div>
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
