import { NgModule } from '@angular/core';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TreeModule } from 'primeng/tree';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [],
  exports: [
    CalendarModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    TableModule,
    PaginatorModule,
    TreeModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    DialogModule,
    MessagesModule,
    ToastModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    MenuModule,
    AccordionModule,
    CardModule,
    TooltipModule,
  ],
})
export class SharedPrimengModule {}
