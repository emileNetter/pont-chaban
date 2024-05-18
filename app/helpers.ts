export const createCalendarEvent = ({
  boat,
  date,
  start,
  end
}: { boat: string, date: string, start: string, end: string }) => {
  const formatDate = date.replace(/-/g, '');
  const formattedStart = start.replace(/:/g, '') + '00';
  const formattedEnd = end.replace(/:/g, '') + '00';

  const isMaintenance = boat === 'MAINTENANCE';

  const calendarEvent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate}T${formattedStart}`,
    `DTEND:${formatDate}T${formattedEnd}`,
    'SUMMARY:Fermeture pont Chaban-Delmas',
    `DESCRIPTION:Le pont Chaban-Delmas sera fermé à la circulation pour ${isMaintenance ? 'maintenance' : `le passage du bateau ${boat}`}`,
    'LOCATION:Pont Jacques Chaban Delmas 33300 Bordeaux France',
    'GEO:44.858254;-0.551738',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\n');

  return encodeURI(`data:text/calendar;charset=utf8,${calendarEvent}`);
};