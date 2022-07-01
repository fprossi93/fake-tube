import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class QueueService {

  queue:any[] = [];

  constructor() { }


  pusIntoQueue(item: string){
    let existItem;
    existItem = this.queue.find(el => el === item);
    if(existItem === undefined){
      this.queue.push(item)
    }
    console.log(this.queue)
  }
}
