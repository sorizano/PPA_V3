import {Component} from '@angular/core';

@Component({
    selector: 'app-left-navigation',
    template: `
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <p class="left-paragraph">
            Left Component
        </p>
    </div>
    `,
    styles: [
        `
            .left-paragraph{
                border: 1px solid red;
                height: 300px;
            }
        `
    ]
})

export class LeftComponent{

}