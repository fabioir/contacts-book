import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { mockContact } from 'src/app/mocks/contact.mock';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { selectContact } from 'src/app/store/contacts-book.actions';
import { ContactsListComponent } from './contacts-list.component';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule],
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

  describe('Contacts displaying', () => {
    it('should display contacts', () => {
      const contact = fixture.debugElement.query(By.css('.contact-item'))
        ?.nativeElement.textContent;
      expect(contact).toContain(mockContact.name);
      expect(contact).toContain(mockContact.familyName);
    });
  });

  describe('selected contact highlighting', () => {
    it('should get the selected contact email so list item can be identified', () => {
      expect(component.selectedContactEmail).toBe(
        mockInitialState.contactsBook.selectedContact?.email as string
      );
    });
  });

  describe('contacts selection', () => {
    it('should select a contact', () => {
      const dispatchSpy = spyOn(component['store'], 'dispatch');

      const contact = fixture.debugElement.query(By.css('.contact-item'));
      contact.nativeElement.click();

      expect(dispatchSpy).toHaveBeenCalledWith(
        selectContact({ selectedContact: mockContact })
      );
    });
  });
});
