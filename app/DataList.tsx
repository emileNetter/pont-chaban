'use client';;

import { format } from "date-fns";
import { fr } from "date-fns/locale";

import type { Data } from "./types";
import { createCalendarEvent } from "./helpers";

const DataList = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col gap-4">
      { data.results.map((result, index) => (
        <div key={index} className="flex flex-col p-4 border border-gray-600 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{result.bateaux}</h2>
          { result.bateaux !== 'MAINTENANCE' && (
            <span>
              Date de passage : &nbsp;
              {format(result.date_passage, 'PPPP', { locale: fr })}
            </span>
          ) }
          <span>
            Heure de fermeture : &nbsp;
            {result.fermeture_a_la_circulation}
          </span>
          <span>
            Heure de ré ouverture : &nbsp;
            {result.re_ouverture_a_la_circulation}
          </span>
          <a 
            href={createCalendarEvent({
              boat: result.bateaux,
              date: result.date_passage,
              start: result.fermeture_a_la_circulation,
              end: result.re_ouverture_a_la_circulation
            })}
          >
            <button className="px-4 py-2 rounded-lg mt-3 bg-gray-600 hover:bg-gray-700 transition-colors duration-100 w-full">
              Ajouter au calendrier
            </button>
          </a>
        </div>
      )) }
    </div>
  )
};

export default DataList;