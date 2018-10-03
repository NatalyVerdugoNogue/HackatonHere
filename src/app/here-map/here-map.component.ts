import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'here-map',
    templateUrl: './here-map.component.html',
    styleUrls: ['./here-map.component.css']
})
export class HereMapComponent implements OnInit, OnChanges {

    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public start: any;

    @Input()
    public finish: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    public directions: any;

    private platform: any;
    private map: any;
    private router: any;

    public constructor() { }

    public ngOnInit() {
        this.platform = new H.service.Platform({
            "app_id": this.appId,
            "app_code": this.appCode
        });
        this.directions = [];
    }

    public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 14,
                center: { lat:"-33.4726900" , lng:"-70.6472400"  }
            }
        );
    }

    public ngOnChanges(changes: SimpleChanges) { }

}