



import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MealModel} from "../../model/meal.model";

@Component({

    templateUrl:"templates/meal/meal-edit.html",
    selector:"meal-edit"
})
export class MealEditComponent
{
    showToggle: boolean = false;
    mealForm: FormGroup;


    @Output()
    onSaveEvent: EventEmitter<MealModel> = new EventEmitter<MealModel>();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.mealForm = this.formBuilder.group(
            {
                id: [''],
                name: ['', Validators.required],
                price: ['', Validators.required],

            }
        )
    }

    fillMealForm(meal: MealModel) {
        this.mealForm.patchValue({
            id: meal.id,
            name: meal.name,
            price: meal.price,
        });
    }

    onMealSave() {
        this.onSaveEvent.emit(this.mealForm.value);
        this.mealForm.reset();
        this.closeModal();
    }

    closeModal() {
        this.showToggle = false;
    }

    resetForm() {
        this.mealForm.reset();
    }

}