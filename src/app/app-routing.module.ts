import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StronaGlownaComponent } from './components/strona-glowna/strona-glowna.component';
import { OAplikacjiComponent } from './components/o-aplikacji/o-aplikacji.component';

const routes: Routes = [
  { path: '', component: StronaGlownaComponent },
  { path: 'o-aplikacji', component: OAplikacjiComponent },
  {
    path: 'produkty',
    loadChildren: () =>
      import('./modules/produkty/produkty.module').then(m => m.ProduktyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
