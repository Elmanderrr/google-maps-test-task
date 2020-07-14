import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {

  constructor(public cd: ChangeDetectorRef) {
  }

  @ViewChild('mapEl', {static: true}) public mapEl: ElementRef;
  @ViewChild('locationInput', {static: true}) public locationInput: ElementRef;
  @ViewChild('placesInput', {static: true}) public placesInput: ElementRef;
  @ViewChild(GoogleMap, {static: false}) public googleMap: GoogleMap;
  @ViewChildren(MapMarker) public markersa: QueryList<GoogleMap>;
  @ViewChild(MapInfoWindow, { static: false })  public infoWindow: MapInfoWindow;

  public placesSearch;
  public locationAutocomplete;
  public markers: Array<any> = [];
  public center: any = { lat: -33.866, lng: 151.196 };
  public zoom = 15;
  public types = [
    'museum',
    'food',
    'point_of_interest'
  ]
  public typeModel;

  ngOnInit() {
    this.typeModel = this.types[0];
  }

  ngAfterViewInit(): void {
    this.createGoogleMapWidget();

  }


  public onSearch(val) {
    const request = {
      keyword: val,
      radius: 500,
      location: {
        lat: this.center.lat,
        lng: this.center.lng
      },
      type: this.typeModel
    };

    this.placesSearch.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.createMarkers(results);
        this.cd.detectChanges();
      }
    });

  }

  /**
   *
   * @param places Array<any>
   */
  private createMarkers(places: Array<any>) {
    const bounds = new google.maps.LatLngBounds();

    this.markers = [];
    places.forEach(place => {

      this.markers.push({
        position: place.geometry.location,
        title: place.name,
        options: {
          id: Math.floor(Math.random() * Date.now()),
        }
      });

      bounds.extend(place.geometry.location);
    });

    this.googleMap.fitBounds(bounds);

  }

  private createGoogleMapWidget() {
    this.createLocationAutocomplete();
    this.createLocationSearch();
  }



  private createLocationAutocomplete() {
    this.locationAutocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement, {
      types: ['geocode']
    });

    this.locationAutocomplete.addListener('place_changed', this.onLocationInputChange.bind(this));
  }

  private createLocationSearch() {
    this.placesSearch = new google.maps.places.PlacesService(document.createElement('div'));
  }

  private onLocationInputChange() {
    const place = this.locationAutocomplete.getPlace();

    if (!place.geometry) {
      return;
    }

    // update map viewport
    this.center.lat = place.geometry.location.lat();
    this.center.lng = place.geometry.location.lng();
    this.zoom = 10;
    this.googleMap.panTo(place.geometry.location);

    this.cd.detectChanges();
  }

  /**
   *
   * @param marker any
   */
  onMarkerClick(marker: any) {
      this.markersa.forEach((m: any) => {
        if (m._options.value.id === marker.options.id) {
          m.marker.setAnimation(google.maps.Animation.BOUNCE);
        } else {
          m.marker.setAnimation(null);
        }
      });

  }

  /**
   *
   * @param marker
   */
  openInfo(marker: MapMarker) {
    this.infoWindow.open(marker)
  }
}
