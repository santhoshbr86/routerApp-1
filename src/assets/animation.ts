import { animate, state, style, transition, trigger,query } from '@angular/animations';
// Component transition animations
//export const slideInDownAnimation =
//   trigger('routeAnimation', [
//     state('*',
//       style({
//         opacity: 1,
//         transform: 'translateX(0)'
//       })
//     ),
//     transition(':enter', [
//       style({
//         opacity: 0,
//         transform: 'translateX(-100%)'
//       }),
//       animate('0.6s ease-in')
//     ]),
//     transition(':leave', [
//       animate('0.6s ease-out', style({
//         opacity: 0,
//         transform: 'translateY(100%)'
//       }))
//     ])
//   ]);

export const slideInDownAnimation = trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            width:'100%',
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('500ms ease',
            style({
              position: 'fixed',
              width:'100%',
              transform: 'translateX(100%)'
            })
          ),
        {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
]);
