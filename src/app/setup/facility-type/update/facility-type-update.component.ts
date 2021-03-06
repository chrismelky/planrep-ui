import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { CustomResponse } from '../../../utils/custom-response';

import { FacilityType } from '../facility-type.model';
import { FacilityTypeService } from '../facility-type.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-facility-type-update',
  templateUrl: './facility-type-update.component.html',
})
export class FacilityTypeUpdateComponent implements OnInit {
  isSaving = false;
  formError = false;
  errors = [];

  /**
   * Declare form
   */
  editForm = this.fb.group({
    id: [null, []],
    name: [null, [Validators.required]],
    code: [null],
  });

  constructor(
    protected facilityTypeService: FacilityTypeService,
    public dialogRef: DynamicDialogRef,
    public dialogConfig: DynamicDialogConfig,
    protected fb: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.updateForm(this.dialogConfig.data); //Initilize form with data from dialog
  }

  /**
   * When form is valid Create FacilityType or Update Facilitiy type if exist else set form has error and return
   * @returns
   */
  save(): void {
    if (this.editForm.invalid) {
      this.formError = true;
      return;
    }
    this.isSaving = true;
    const facilityType = this.createFromForm();
    if (facilityType.id !== undefined) {
      this.subscribeToSaveResponse(
        this.facilityTypeService.update(facilityType)
      );
    } else {
      this.subscribeToSaveResponse(
        this.facilityTypeService.create(facilityType)
      );
    }
  }

  protected subscribeToSaveResponse(
    result: Observable<CustomResponse<FacilityType>>
  ): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      (result) => this.onSaveSuccess(result),
      (error) => this.onSaveError(error)
    );
  }

  /**
   * When save successfully close dialog and dispaly info message
   * @param result
   */
  protected onSaveSuccess(result: any): void {
    this.toastService.info(result.message);
    this.dialogRef.close(true);
  }

  /**
   * Error handiling specific to this component
   * Note; general error handleing is done by ErrorInterceptor
   * @param error
   */
  protected onSaveError(error: any): void {}

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  /**
   * Set/Initialize form values
   * @param facilityType
   */
  protected updateForm(facilityType: FacilityType): void {
    this.editForm.patchValue({
      id: facilityType.id,
      name: facilityType.name,
      code: facilityType.code,
    });
  }

  /**
   * Return form values as object of type FacilityType
   * @returns FacilityType
   */
  protected createFromForm(): FacilityType {
    return {
      ...new FacilityType(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      code: this.editForm.get(['code'])!.value,
    };
  }
}
