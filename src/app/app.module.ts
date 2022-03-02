import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { AddContactDialogComponent } from './components/add-contact-dialog/add-contact-dialog.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { contactsBookReducer } from './store/reducers/contacts-book.reducer';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ToolbarComponent,
    AddContactDialogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contactsBook: contactsBookReducer }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
