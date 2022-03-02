import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { mockInitialState } from './mocks/state.mock';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ContactsListComponent, ToolbarComponent],
      imports: [MatFormFieldModule, MatDialogModule, MatToolbarModule],
      providers: [provideMockStore({ initialState: mockInitialState })]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
