import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;


  constructor(private route: ActivatedRoute) { 

    this.bmi = +route.snapshot.paramMap.get('valor')!;
    console.log(this.bmi)
  }

  ngOnInit(): void {
  }

}
