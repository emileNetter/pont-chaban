export declare interface Result {
  bateau: string,
  date_passage: string,
  fermeture_a_la_circulation: string,
  re_ouverture_a_la_circulation: string,
  type_de_fermeture: string,
  fermeture_totale: string,
  sens_fermeture: string
}

export declare interface Data {
  total_count: number,
  results: Result[],
}