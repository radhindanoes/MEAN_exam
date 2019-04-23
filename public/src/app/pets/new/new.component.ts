import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  errors: any;

  mongoerrors: any;

  newPet:any = {
      name: "",
      type: "",
      description: "",
      skillone: "",
      skilltwo: "",
      skillthree: ""
  }

  constructor(private petsService: PetsService,
              private router: Router) { }

  ngOnInit() {
  }
  submitNewPet(){
    console.log(this.newPet)
    this.petsService.addPet(this.newPet)
    .subscribe(  (response: any) =>{ 
      // data=>{ console.log(data)---- this gives you and object that includes errors data... this.error= data[][][][]}
      console.log("////////////////////////")
        console.log(response)
        console.log("+++++++++++++++++++++++++")
        console.log(response.errors)
        console.log("==========================")
        console.log(response.errors)

        console.log("it worked")

        if(response.errors ){

          this.errors = response.errors.message
          this.mongoerrors = response.errors.errmsg
          this.router.navigateByUrl('/pets/newpet')
        }
        else{
          this.newPet = {
              name: "",
              type: "",
              description: "",
              skillone: "",
              skilltwo: "",
              skillthree: ""
          } 
          this.router.navigateByUrl('/')
        }
      },
      (err) => {
        console.log(err)
      }
    )
    
    
  }
}
