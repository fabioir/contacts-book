import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { mockContact } from 'src/app/mocks/contact.mock';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { SelectedContactComponent } from './selected-contact.component';

describe('SelectedContactComponent', () => {
  let component: SelectedContactComponent;
  let fixture: ComponentFixture<SelectedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedContactComponent],
      providers: [provideMockStore({ initialState: mockInitialState })],
      imports: [MatCardModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show selected contact details', () => {
    const detailsTextContent = fixture.debugElement.query(
      By.css('.contact-details')
    )?.nativeElement.textContent;

    expect(detailsTextContent).toContain(mockContact.name);
    expect(detailsTextContent).toContain(mockContact.familyName);
    expect(detailsTextContent).toContain(mockContact.email);
    expect(detailsTextContent).toContain(mockContact.phone);
    expect(detailsTextContent).toContain(mockContact.address);
  });
});
