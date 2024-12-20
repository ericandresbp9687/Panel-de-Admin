import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadComponent:() => import('./shared/components/layout/layout.component'),
        children : [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')     
            },
            {
                path: 'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path: 'table',
                loadComponent: () =>
                  import('./business/table/table.component').then((m) => m.ListProductsComponent),
            },

            
            {
                path: 'add',
                loadComponent: () =>
                    import('./business/add-edit-products/add-edit-product.component').then((m) => m.AddEditProductComponent),
            },
            
            { 
                path: 'edit/:id',loadComponent: () =>
                    import('./business/add-edit-products/add-edit-product.component').then((m) => m.AddEditProductComponent),
            },

            {
                path: '',
                redirectTo: ' ',
                pathMatch: 'full'
            },


       ]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch:'full'
    }
];
