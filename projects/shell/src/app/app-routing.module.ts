import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'alpha',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './AlphaModule'
      }).then(m => m.AlphaModule)
  },

  // Load AboutModule (remote MFE) dynamically
  {
    path: 'about',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './AboutModule'
      }).then(m => m.AboutModule)
  },
  // Render with remote AboutModule (remote MFE) already loaded upfront
  // {
  //   path: 'about',
  //   loadChildren: () =>
  //     import('alpha/AboutModule').then(m => m.AboutModule)
  // }

  // Load Product Module (remote MFE) dynamically
  {
    path: 'product',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './ProductModule'
      }).then(m => m.ProductModule)
  }
    // Render with remote ProductModule (remote MFE) already loaded upfront
  // {
  //   path: 'product',
  //   loadChildren: () =>
  //     import('alpha/ProductModule').then(m => m.ProductModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
