import { AnimaisService } from './../animais.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: ['./detalhe-animal.component.css']
})
export class DetalheAnimalComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<Animal>;

  constructor(private animaisService: AnimaisService
            , private activatedRout:ActivatedRoute
            , private router:Router) { }

  ngOnInit(): void {
    this.animalId = this.activatedRout.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorID(this.animalId);
  }

  curtir(){
    this.animaisService.curtir(this.animalId).subscribe((curtida) =>{
      if(curtida){
        this.animal$ = this.animaisService.buscaPorID(this.animalId);
      }
    });
  }

  excluir(){
    this.animaisService.excluiAnimal(this.animalId).subscribe(()=> {
      this.router.navigate(['/animais/']);
    },
    (error) => console.log(error)
  );
  }

}
