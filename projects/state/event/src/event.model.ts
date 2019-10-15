/**
 * The Event interface represents an group's event that is returned by the Meetup API
 */
export interface Event {
  id: string;
  name: string;
  date: string;
  venue: {
    name: string;
    address: string;
    city: string;
    country: string;
  };
  link: string;
  description: string;
}
