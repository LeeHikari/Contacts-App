import axios, { AxiosPromise } from "axios";
import { Users } from "../common/types";

export function getContacts(): AxiosPromise<Users[]> {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
