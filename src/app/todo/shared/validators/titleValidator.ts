import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export  class TitleValidator {

  static titleValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const tempTitle = nameRe.test(control.value);
      return !tempTitle ? {title: {value: control.value}} : null;
    };
  }
}
