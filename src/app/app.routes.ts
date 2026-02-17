import { Routes } from '@angular/router';
import { CommingSoonComponent } from './Components/comming-soon/comming-soon.component';

export const routes: Routes = [
    {path: '', component: CommingSoonComponent},
    {path: '**', redirectTo: "/", pathMatch: "full"}
];
