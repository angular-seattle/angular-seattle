/**
 * The Event interface represents an group's event that is returned by the Meetup API
 */
export interface Event {
  id: string;
  name: string;
  status: string;
  local_date: string;
  local_time: string;
  venue: {
    id: number;
    name: string;
    address_1: string;
    city: string;
    country: string;
    localized_country_name: string;
  };
  link: string;
  description: string;
}
