import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  text: string;
  randomText: string;

  constructor() {
        
        // this.text = this.service.get(10, 2);
        // this.randomText = this.service.getRandom(10, 20, 5);


   }

  ngOnInit(): void {


    //private service: NgxLoremIpsumService
  }

}
