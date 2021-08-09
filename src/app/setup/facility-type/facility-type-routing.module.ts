import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityTypeComponent } from './facility-type.component';

const routes: Routes = [
  {
    path: '',
    component: FacilityTypeComponent,
    data: {
      defaultSort: 'id,asc',
    },
    // canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilityTypeRoutingModule {}
