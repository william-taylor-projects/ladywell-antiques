
import { AdminRoutes } from "../model/app.routes";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Admin } from '../components/admin.component';
import { Login } from '../components/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Nav } from "../components/nav.component";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        NgbModule
    ],
    declarations: [Nav, Admin, Login],
    exports: [Nav]
})
export class AdminModule {

}