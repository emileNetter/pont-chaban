import type { Data } from "./types";
import {
  differenceInDays,
  differenceInHours, 
  differenceInMinutes
} from "date-fns";

const NextClosingDate = ({ data }: { data: Data }) => {
  const nextClosingDate = new Date(data.results[0].date_passage);
  nextClosingDate.setHours(
    Number(data.results[0].fermeture_a_la_circulation.split(':')[0]),
    Number(data.results[0].fermeture_a_la_circulation.split(':')[1])
  );

  const days = differenceInDays(nextClosingDate, new Date());
  const hours = differenceInHours(nextClosingDate, new Date()) - days * 24;
  const minutes = differenceInMinutes(nextClosingDate, new Date()) - days * 24 * 60 - hours * 60;

  const displayDays = days > 1 ? 'jours' : `jour`;

  return (
    <>
    <h2 className="text-2xl font-semibold text-center">
        Prochaine fermeture dans :
      </h2>
      <div className="text-center">
        {days} {displayDays} {hours} heures et {minutes} minutes
      </div>
    </>
  )
};

export default NextClosingDate;
