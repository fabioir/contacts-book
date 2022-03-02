import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { ContactsListComponent } from './contacts-list.component';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactsListComponent],
      providers: [provideMockStore({ initialState: mockInitialState })]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selected contact highlighting', () => {
    it('should get the selected contact email so list item can be identified', () => {
      expect(component.selectedContactEmail).toBe(
        mockInitialState.contactsBook.selectedContact?.email as string
      );
    });
  });
});
