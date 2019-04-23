import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//We use dependency injection when one part of our app depends on another. For example, our service depends on HttpClient to make http requests!

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  //class must match the services your importing

  constructor(private _http: HttpClient) {
    this.getPets();
  }
  getPets() {
    return this._http.get('/pets');
  }

  getOnePet(id: string) {
    console.log("got Pet");
    return this._http.get('/pet/' + id);
  }

  addPet(newpet) {
    return this._http.post('/newpet', newpet)
  }

  editPet(id, updatedPet){
    return this._http.put('/pet/' + id, updatedPet);
  }
  //.put is the update function

  deleteTa(id) {
    console.log(id, "http service")
    return this._http.delete('/pet/' + id);
  }

  addLike(id, like:object){
    console.log("id from service.ts")
    console.log(id)
    return this._http.put('/like/' + id, like);
  }

  postToServer(num) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/pets', num);
  }
}