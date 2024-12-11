import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ProjetsComponent } from './projets/projets.component';
import { ServicesComponent } from './services/services.component';
// import { ContactComponent } from './contact/contact.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



export const routes: Routes = [

  { path: '', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'services', component: ServicesComponent },
//   { path: 'contact', component: ContactComponent },
{ path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },

];
