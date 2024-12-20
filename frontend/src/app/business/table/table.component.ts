import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone:true,
  imports: [NgFor,NgIf],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
