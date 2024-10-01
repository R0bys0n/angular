import { Component, Input, OnInit } from '@angular/core';
import { GradeFotosAnimaisComponent } from 'src/app/animais/grade-fotos-animais/grade-fotos-animais.component';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css'],
})
export class CartaoComponent implements OnInit {
  @Input() titulo = '';

  constructor() {}

  ngOnInit(): void {}
}
