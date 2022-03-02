import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { contactsBookReducer } from './store/reducers/contacts-book.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contactsBook: contactsBookReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
