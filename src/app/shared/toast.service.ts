import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(protected messageService: MessageService) {}

  info(summary: string): void {
    this.messageService.add({ key: 'info', severity: 'info', summary });
  }

  error(summary: string, detail?: any) {
    this.messageService.add({
      key: 'error',
      severity: 'error',
      summary,
      sticky: true,
      detail: JSON.stringify(detail),
    });
  }
}
