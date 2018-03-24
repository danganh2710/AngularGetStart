import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number = 4;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5;
    };

    onClick(): void {
        this.notify.emit(`Clicked! ${this.rating}`);
    };
}