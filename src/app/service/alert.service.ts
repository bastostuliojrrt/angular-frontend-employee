import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
   
  constructor() { }

  create(message: string, type: string, id: string){

    let alertPlaceholder = document.getElementById(`${id}`)

    if (!alertPlaceholder) {
      return
    }

    alertPlaceholder.innerHTML = '';
    const wrapper = document.createElement('div')
    wrapper.innerHTML = ''
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
    
    
  }

  

}
