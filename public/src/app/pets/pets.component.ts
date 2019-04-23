import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  allPets: any = []

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    //on init means itll show up on the first page when you start up the app
    let observable = this.petsService.getPets();
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.allPets = data['pets'];//data that you are pushing into the array must match the key kame of the data
    });
  }

}
