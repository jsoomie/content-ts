/// <reference types="@types/google.maps" />
import { CustomMap } from "./models";
import { User, Company } from "./models";

const user = new User();
const customMap = new CustomMap("map");

customMap.addUserMarker(user);
