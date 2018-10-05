import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { UploadFileService } from '../views/upload/upload-file.service';

declare let H: any;
interface Card {
  title: any;
  vicinityNoBr: any;
  image: string;
  time: any;
}

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})

export class HereMapComponent implements OnInit {

  cards: Card[] = [];

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;
  private ui: any;
  private search: any;
  private platform: any;
  private map: any;

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    this.search = new H.places.Search(this.platform.getPlacesService());
  }

  public ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 12,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
    this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
  }
  public places(query: string) {
    this.map.removeObjects(this.map.getObjects());
    this.search.request({ "q": query, "at": this.lat + "," + this.lng }, {}, data => {
      for (let i = 0; i < data.results.items.length; i++) {
        this.dropMarker({ "lat": data.results.items[i].position[0], "lng": data.results.items[i].position[1] }, data.results.items[i]);
      }
    }, error => {
      console.error(error);
    });
  }
  private dropMarker(coordinates: any, data: any) {
    const image = '../../assets/img/pin2.png';
    let svgMarkup = image;
    let icon = new H.map.Icon(svgMarkup);
    let marker = new H.map.Marker(coordinates, { icon: icon });

    this.cards.push({
      image,
      title: data.title,
      vicinityNoBr: data.vicinity.split("<br/>", 1),
      time: ('Horario: 09:00-14:00'),
    });
    
    this.map.addObject(marker);
  }
}