import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

//
export class APISync<T extends HasId> {
  constructor(public rootUrl:string) {}

  // we don't do anything with the data - we just call get & return the promise
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`,  data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
