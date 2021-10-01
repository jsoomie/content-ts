import axios, { AxiosResponse } from "axios";

export class Sync {
  async fetch(): Promise<void> {
    const id = this.get("id");
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    this.set(res.data);
  }

  async save(): Promise<void> {
    const id = this.get("id");
    let res: AxiosResponse;
    if (id) {
      res = await axios.put(`http://loclahost:3000/users/${id}`, this.data);
    } else {
      res = await axios.post("http://localhost:3000/users", this.data);
    }
  }
}
