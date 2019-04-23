import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  thisPet: any = [];
  likeButton;
  numberOfLikes;
  error: any;

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log("Pet ID is ", params['id'])
      let observable = this.petsService.getOnePet(params['id']);
      observable.subscribe(petsReturned => {
        this.thisPet = petsReturned["pet"];
        console.log("121212121212121212121212121212121212")
        console.log(this.thisPet);

        this.likeButton = true;
        this.numberOfLikes = this.thisPet.likes
      })


  });
  }
  deletePet() {
    console.log(this.thisPet._id, "ts component")
    this.petsService.deleteTa(this.thisPet._id).subscribe(data => {
    })
    this.router.navigateByUrl('/')
  }


  addLike(){
    this.likeButton = false;
    this.route.params.subscribe((params)=>{
      let observable = this.petsService.addLike(params['id'], this.thisPet);
      observable.subscribe((data:any) => {
        console.log(data)
        if(data.error){
          this.error = data.error
        }
        else{
          console.log("~Edit~");
        }
      })
    })
  }

}

