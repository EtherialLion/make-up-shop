import { Component } from '@angular/core';
import {MakeupService} from "./makeup.service";
import {subscribeOn} from "rxjs/operators";
import {Makeup} from "./makeup.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories = [
    { caption: 'Lipstick', value: 'lipstick' },
    { caption: 'Nail polish', value: 'nail_polish' },
    { caption: 'Blush', value: 'blush' },
    { caption: 'Eyeliner', value: 'eyeliner' },
    { caption: 'Eyeshadow', value: 'eyeshadow' },
    { caption: 'Mascara', value: 'mascara' }
  ];
  productInfo: Makeup[] = [];
  constructor (private makeupService: MakeupService) {
  }

  getProductInfo(value: string){
    this.makeupService.getMakeUpInfo(value).subscribe( res => {
      this.productInfo = res
    })
  }

}
