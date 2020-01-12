import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SynonymsAttributeService {

  uri = 'http://localhost:3000/sysnonymes-attribute/';
  constructor(private http: HttpClient) { }

  getAllSynonyms() {
    return this.http.get(this.uri);
  }

  deleteSynonyms(id) {
    console.log('Deleting Node Service' + id);
    return this.http.request('delete', this.uri + id);
  }

  addNewSynonym(data) {
    return this.http.post(this.uri, data);
  }

  updateSynonym(data) {
    return this.http.patch(this.uri + 'update/' + data._id, data);
  }
}
