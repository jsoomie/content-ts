import axios, { AxiosResponse } from "axios";

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  async fetch(id: number): Promise<AxiosResponse<any>> {
    return await axios.get(`${this.rootUrl}/${id}`);
  }

  async save(data: T): Promise<AxiosResponse<any>> {
    const { id } = data;
    if (id) {
      return await axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return await axios.post(this.rootUrl, data);
    }
  }
}
