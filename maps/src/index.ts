/// <reference types="@types/google.maps" />
import { CustomMap } from "./models";
import { User, Company } from "./models";

// Create instances of user and company
const user = new User();
const company = new Company();

// Create limited instance of google maps
const customMap = new CustomMap("map");

// Marker Creation
customMap.addMarker(user);
customMap.addMarker(company);
