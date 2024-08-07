import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionFormComponent,
  ]
})
export class SharedModule { }
