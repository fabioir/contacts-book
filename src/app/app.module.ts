import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { SelectedContactComponent } from './components/selected-contact/selected-contact.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { contactsBookReducer } from './store/reducers/contacts-book.reducer';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ToolbarComponent,
    AddContactDialogComponent,
    SelectedContactComponent
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
