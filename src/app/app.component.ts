import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private platform: any;

    @ViewChild("map")
    public mapElement: ElementRef;

    public constructor() {
        this.platform = new H.service.Platform({
            "app_id": "VGLR85mWlnbk1IC32Sdf",
            "app_code": "B_vLITHwu1cJU6qp1tsBwg"
        });
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 14,
                center: { lat: -33.4726900, lng: -70.6472400 }
            }
        );
    }

}