import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  errors: any;
  message: any;
  thisPet: any = [];
  updatedPet: any = [];

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.findPet();
    this.thisPet = {
      name: "",
      type: "",
      description: "",
      skillone: "",
      skilltwo: "",
      skillthree: ""
    };
    this.updatedPet = {
      thisPet: {
        name: "",
        type: "",
        description: "",
        skillone: "",
        skilltwo: "",
        skillthree: ""
      }
    };
  }

  findPet() {
    this.route.params.subscribe((params: Params) => {
      console.log("pet ID is ", params['id'])
      let observable = this.petsService.getOnePet(params['id']);
      observable.subscribe(petsReturned => {
        this.thisPet = petsReturned["pet"];
        console.log("121212121212121212121212121212121212")
        console.log(this.thisPet);
      })
    });
  }


  updatePet() {
    this.route.params.subscribe((params: Params) => {
      console.log(this.thisPet)
      let observable = this.petsService.editPet(params['id'], this.thisPet);
      observable.subscribe((response: any) => {
        if (response.error) {
          console.log("99999999999999999")
          console.log(response)
          console.log("8888888888888888")
          console.log(response.error)
          console.log("77777777777777777")
          console.log(response.error.message)
          console.log("6666666666666666666")
          this.errors = response.error.message
        }
        else {
          this.router.navigateByUrl('/')
        }
      })
    }
    )
  }
}
