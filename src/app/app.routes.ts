import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Modules/Pages/home/home.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './Modules/Pages/about/about.component';
import { PortfolioComponent } from './Modules/Pages/portfolio/portfolio.component';
import { ContactComponent } from './Modules/Pages/contact/contact.component';
import { ProjectPageComponent } from './Modules/Pages/project-page/project-page.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'projectPage', component: ProjectPageComponent },
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }