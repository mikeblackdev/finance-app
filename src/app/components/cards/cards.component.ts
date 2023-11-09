import { Component, OnInit } from "@angular/core";
import { Card } from "src/app/interfaces/card.interface";
import { DummyCardService } from "src/app/services/dummy-card.service";

@Component({
    selector: 'cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
    public cards?: Card[];

    constructor(private _cardsSvc: DummyCardService) {}

    ngOnInit() {
        this._cardsSvc.getCards().subscribe((cards: Card[]) => {
            this.cards = cards;
        });
    }
}