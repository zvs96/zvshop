import { trigger, state , animate, transition, style } from '@angular/animations';


export const start=trigger('start', [
    state('in', style({transform: 'translateX()'})),
    transition('void <=> *', [
      style({transform: 'translateY(-100%)'}),
      animate(500)
    ])
    
  ])
  export const startCard=trigger('startCard', [
    state('in', style({transform: 'translateX()'})),
    transition('void <=> *', [
      style({transform: 'translateY(-10%)'}),
      animate(500)
    ])
    
  ])

  export const start1=  trigger('start1', [
    state('in', style({transform: 'translateX()'})),
    transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate(500)
    ])
   
  ])



 


  export const start2= trigger('start2', [
    state('go', style({transform: 'translateX(100%)'})),
    state('togo',   style({transform: 'translateX(0)'})),
    transition('go <=> togo', animate('500ms ease-in')),
    
    
  ]);


  export const start3= trigger('start3', [
    state('go1', style({transform: 'translateY(-120%)'})),
    state('togo1',   style({transform: 'translateY(0)'})),
    transition('go1 <=> togo1', animate('700ms ease-in')),
    
    
  ])


  