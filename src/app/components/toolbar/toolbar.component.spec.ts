import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { mockContact } from 'src/app/mocks/contact.mock';
import { mockInitialState } from 'src/app/mocks/state.mock';
import { addContact } from 'src/app/store/contacts-book.actions';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MatDialogModule, BrowserAnimationsModule],
      providers: [provideMockStore({ initialState: mockInitialState })]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add Contact Dialog', () => {
    it('should open add contact dialog', async () => {
      component.addContact();
      const dialogHarness = await loader.getHarness(MatDialogHarness);

      expect(dialogHarness).toBeTruthy();
      await dialogHarness.close();
    });

    it('should dispatch an add contact action on dialog close', () => {
      const dispatchSpy = spyOn(component['store'], 'dispatch');
      const openSpy = spyOn(component['dialog'], 'open').and.returnValue({
        afterClosed: () => of(mockContact)
      } as MatDialogRef<AddContactDialogComponent>);

      component.addContact();

      expect(dispatchSpy).toHaveBeenCalledWith(
        addContact({ newContact: mockContact })
      );
      openSpy.and.callThrough();
    });

    it('should not dispatch an add contact action on dialog falsy close', () => {
      const dispatchSpy = spyOn(component['store'], 'dispatch');
      const openSpy = spyOn(component['dialog'], 'open').and.returnValue({
        afterClosed: () => of(null)
      } as MatDialogRef<AddContactDialogComponent>);

      component.addContact();

      expect(dispatchSpy).not.toHaveBeenCalled();
      openSpy.and.callThrough();
    });
  });
});
