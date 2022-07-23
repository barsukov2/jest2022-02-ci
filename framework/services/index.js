import Users from './users.service';
import Airports from './airportgap.service';
import Account from './bookstore.service';
import Mailboxlayer from "./mailboxlayer.service";

const api = () => ({
  Account: () => ({ ...Account }),
  Airports: () => ({ ...Airports }),
  Users: () => ({ ...Users }),
  Mailboxlayer: () => ({ ...Mailboxlayer }),
});

export default api;
