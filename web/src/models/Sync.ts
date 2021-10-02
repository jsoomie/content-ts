import axios from "axios";

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number) {
    const res = await axios.get(`${this.rootUrl}/${id}`);
    return res;
  }

  async save(data: T) {
    const { id } = data;
    if (id) {
      return await axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return await axios.post(this.rootUrl, data);
    }
  }
}
