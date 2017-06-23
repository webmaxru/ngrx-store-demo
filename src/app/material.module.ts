import { NgModule } from '@angular/core';

import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule, MdSelectModule, MdMenuModule, MdSidenavModule, MdListModule, MdIconModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdProgressBarModule, MdProgressSpinnerModule } from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdMenuModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdProgressBarModule,
        MdProgressSpinnerModule
    ],
    exports: [
        MdButtonModule,
        MdCheckboxModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdSelectModule,
        MdMenuModule,
        MdSidenavModule,
        MdListModule,
        MdIconModule,
        MdSlideToggleModule,
        MdSnackBarModule,
        MdTabsModule,
        MdProgressBarModule,
        MdProgressSpinnerModule
    ],
})
export class MaterialModule { }