import {Component} from '@angular/core';

@Component({
    selector: 'app-left-navigation',
    template: `
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <h2>
            {{title}}
        </h2>

        <ul>
            <li *ngfor="let item of items">{{items}}</li>
        </ul>
        
    
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
    title: string = "News";
    items: Array<string> = ["Welcome", "Welcome #2"];
}