import { Component, OnInit } from '@angular/core';
import { QouteService } from '../qoute.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  qoutesArray: any = [];

  qoute: any = {};
  qouteLoaded: boolean = false;

  constructor(private qouteService: QouteService) { }

  ngOnInit(): void {

    this.qouteService.generate().subscribe(async res => {
      // console.log('res ', res);
      if (res.length > 0) {
        this.qoutesArray = res;

        this.qoute = await this.loadRandomQoute(this.qoutesArray);
        console.log('qoute ', this.qoute);
        this.qouteLoaded = true;
      } else {
        this.qouteLoaded = false;
      }
    })

  }

  loadRandomQoute(qoutes: any) {
    return qoutes[Math.floor(Math.random()*qoutes.length)];
  }

}
