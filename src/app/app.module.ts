import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { contactsBookReducer } from './store/reducers/contacts-book.reducer';

const materialModules = [MatToolbarModule];

@NgModule({
  declarations: [AppComponent, ContactsListComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contactsBook: contactsBookReducer }),
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
