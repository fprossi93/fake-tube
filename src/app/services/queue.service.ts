import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class QueueService {
  queue: any[] = [];

  constructor() {}

  pushIntoQueue(item: string) {
    this.queue.push(item);
    console.log(this.queue);
  }
}
