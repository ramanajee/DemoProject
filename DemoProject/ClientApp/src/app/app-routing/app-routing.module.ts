import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnhPageMainComponent } from '../pages/main-page/main-page.component';
import { conflictsComponent } from '../pages/conflicts-page/conflicts-page.component';
import { companylistPageComponent } from '../pages/company-list-page/company-list-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'farm',
    pathMatch: 'full'
  },
  {
    path: 'farm',
     component: CnhPageMainComponent,
      children: [
        {
          path: 'conflicts/:companyId',
          component: conflictsComponent
        },
      {
        path: 'companyList',
        component: companylistPageComponent
        // children: [
        //   {
        //     path: ':partnerId',
        //     component: CnhPagePartnerDataAccessComponent
        //   }
        // ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
