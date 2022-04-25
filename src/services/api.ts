import axios, { AxiosPromise } from "axios";
import { User } from "../common/types";

export function getContacts(): AxiosPromise<User[]> {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
