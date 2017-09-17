import {Component, Output, EventEmitter, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {RestaurantModel} from "../../model/restaurant.model";

@Component({
    templateUrl: 'templates/restaurant/restaurant-edit.html',
    selector: 'restaurant-edit'
})
export class RestaurantEditComponent implements OnInit {
    showToggle: boolean = false;
    restaurantForm: FormGroup;


    @Output()
    onSaveEvent: EventEmitter<RestaurantModel> = new EventEmitter<RestaurantModel>();

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.restaurantForm = this.formBuilder.group(
            {
                id: [''],
                name: ['', Validators.required],
                address: ['', Validators.required],
                site: ['']
            }
        )
    }

    fillRestaurantForm(restaurant: RestaurantModel) {
        this.restaurantForm.patchValue({
            id: restaurant.id,
            name: restaurant.name,
            address: restaurant.address,
            site: restaurant.site
        });
    }

    onRestSave() {
        this.onSaveEvent.emit(this.restaurantForm.value);
        this.restaurantForm.reset();
        this.closeModal();
    }

    closeModal() {
        this.showToggle = false;
    }

    resetForm() {
        this.restaurantForm.reset();
    }


}