/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { AuthModule } from './auth.module';

/* Containers */
import * as authContainers from './containers';

/* Guards */
import * as authGuards from './guards';

import * as blogContainers from '../blog/containers';



/* Routes */
export const ROUTES: Routes = [
    {
        path: 'login',
        canActivate: [],
        component: authContainers.LoginComponent,
        data: {
            title: 'Pages Login - SB Clean Blog Angular',
        } as SBRouteData,
    },
    {
            path: 'new',
            component: blogContainers.NewPostComponent,
     },
];

@NgModule({
    imports: [AuthModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
