import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { animation } from '@angular/animations/src/animation_metadata';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myanimation',[
      state('small',style({
        transform:'scale(1)',
      })),
      state('large',style({
        transform:'scale(1.2)',
      })),
      state('extralarge',style({
        transform:'scale(2)',
      })),
      // transition('small <=> large',animate('300ms ease-in',style({
      //   transform:'translateY(40px)'
      // }))),
      transition(`* => *`, animate('500ms')),
    ]),
  ]
})
export class AppComponent {
  title = 'app';

  state : string = 'extralarge';

  animateme(){
    this.state = (this.state === 'small'? 'large': 'small');
  }
}