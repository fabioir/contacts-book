import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatInputHarness } from '@angular/material/input/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { noop } from 'rxjs';
import { mockContact } from 'src/app/mocks/contact.mock';
import { AddContactDialogComponent } from './add-contact-dialog.component';

describe('AddContactDialogComponent', () => {
  let component: AddContactDialogComponent;
  let fixture: ComponentFixture<AddContactDialogComponent>;
  let loader: HarnessLoader;

  const mockDialogRef = {
    close: noop
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContactDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
      imports: [
        ReactiveFormsModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.documentRootLoader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel and return null', async () => {
    const closeSpy = spyOn(component.dialogRef, 'close');
    const cancelButtonHarness = await loader.getHarness(
      MatButtonHarness.with({ selector: '.cancel-contact' })
    );

    expect(cancelButtonHarness).toBeTruthy();

    await cancelButtonHarness.click();

    expect(closeSpy).toHaveBeenCalledWith(null);
  });

  it('should disable addition on an invalid form', async () => {
    const addContactButtonHarness = await loader.getHarness(
      MatButtonHarness.with({ selector: '.add-contact' })
    );

    expect(component.contactFormGroup.invalid).toBeTrue();
    expect(addContactButtonHarness).toBeTruthy();
    expect(await addContactButtonHarness.isDisabled()).toBeTrue();
  });

  it('should close with new contact data as argument', async () => {
    const closeSpy = spyOn(component.dialogRef, 'close');

    const inputHarnesses = await loader.getAllHarnesses(MatInputHarness);
    expect(inputHarnesses.length).toBe(5);

    await inputHarnesses[0].setValue(mockContact.name);
    await inputHarnesses[1].setValue(mockContact.familyName);
    await inputHarnesses[2].setValue(mockContact.email);
    await inputHarnesses[3].setValue(mockContact.phone);
    await inputHarnesses[4].setValue(mockContact.address);

    const addContactButtonHarness = await loader.getHarness(
      MatButtonHarness.with({ selector: '.add-contact' })
    );

    await addContactButtonHarness.click();

    expect(closeSpy).toHaveBeenCalledWith(mockContact);
  });
});
