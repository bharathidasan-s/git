import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule ({
    imports:[
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatCheckboxModule
    ],
    exports:[
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        MatSelectModule,
        MatListModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {};