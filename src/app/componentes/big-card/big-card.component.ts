import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  gameCover:string = '';
  @Input()
  gameName:string='';
  @Input()
  gameTitle:string='';
  @Input()
  gamePriceBef:string = ''
  @Input()
  gamePriceAft:string = ''
  @Input()
  gameDesc:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}