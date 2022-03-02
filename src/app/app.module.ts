import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { contactsBookReducer } from './store/reducers/contacts-book.reducer';

@NgModule({
  declarations: [AppComponent, ContactsListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contactsBook: contactsBookReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
