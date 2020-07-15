import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

interface ExtendedMarker extends google.maps.Marker {
  name?: string;
  photos?: Array<any>;
  formatted_address?: string;
  formatted_phone_number?: string;
  placeId?: string;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, AfterViewInit {
  constructor(public cd: ChangeDetectorRef, private snackBar: MatSnackBar, private ngZone: NgZone) {
  }

  @ViewChild('mapEl', {static: true}) public mapEl: ElementRef;
  @ViewChild('dynamicInfoContent', {static: true}) public dynamicInfoContent: ElementRef;

  @ViewChild('infoWindowEl', {static: true}) public infoWindowEl: ElementRef;
  @ViewChild('locationInput', {static: true}) public locationInput: ElementRef;
  @ViewChild('placesInput', {static: true}) public placesInput: ElementRef;

  public googleMap: google.maps.Map;
  public infoWindow: google.maps.InfoWindow;
  public placesSearch: google.maps.places.PlacesService;
  public locationAutocomplete: google.maps.places.Autocomplete;
  public markers: Array<ExtendedMarker> = [];
  public types = [
    'museum',
    'food',
    'shopping_mall',
    'tourist_attraction',
    'cafe'
  ];
  public chosenType: string;
  public placeInputModel: string = null;
  public currentInfoWindowProps: ExtendedMarker = null;
  public locationBounds: google.maps.LatLngBounds = null;
  public defaultLocation: google.maps.LatLngLiteral = { lat: -33.866, lng: 151.196 };

  ngOnInit() {
    this.chosenType = this.types[1];
  }

  ngAfterViewInit(): void {
    this.createGoogleMapWidget();
  }


  private createGoogleMapWidget() {
    this.googleMap = new google.maps.Map(this.mapEl.nativeElement, {
      center: this.defaultLocation,
      zoom: 10
    });

    this.createInfoWindows();
    this.createLocationAutocomplete();
    this.createPlacesSearch();
  }

  /**
   *
   * @param val string
   */
  public searchPlaces(val: string) {
    const request: google.maps.places.PlaceSearchRequest = {
      keyword: val,
      radius: 500,
      bounds: this.locationBounds,
      type: this.chosenType
    };

    if (this.locationBounds) {
      request.bounds = this.locationBounds;
    } else {
      // apply default location if no bounds was provided and extends radius
      request.location = this.defaultLocation;
      request.radius = 50000;
    }

    this.placesSearch.nearbySearch(request, this.onNearbySearchResults.bind(this));

  }

  /**
   *
   * @param results Array<google.maps.places.PlaceResult>
   * @param status google.maps.places.PlacesServiceStatus
   */
  private onNearbySearchResults(results: Array<google.maps.places.PlaceResult>, status: google.maps.places.PlacesServiceStatus) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.clearMarkers();
        this.createMarkers(results);
        this.cd.detectChanges();
      } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {

        // works well only inside ngZone
        this.ngZone.run(() => {
          this.snackBar.open(
            'Nothing was found',
            'End now',
            {
              verticalPosition: 'top',
              horizontalPosition: 'center',
              duration: 1500
            });
        });

    }
  }

  /**
   *
   * @param marker google.maps.Marker
   */
  public onMouseEnter(marker: google.maps.Marker) {
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
  }

  public onMouseLeave() {
    this.markers.forEach(m => {
      m.setIcon(null)

    });
  }

  /**
   *
   * @param $event MatSelectChange
   */
  public onTypeChange($event: MatSelectChange) {
    this.chosenType = $event.value;
  }

  /**
   *
   * @param places Array<any>
   */
  private createMarkers(places: Array<google.maps.places.PlaceResult>) {
    const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      const marker = new google.maps.Marker({
        position: place.geometry.location,
        animation: google.maps.Animation.DROP,
        map: this.googleMap,
        name: place.name,
        placeId: place.place_id
      } as any) ;

      this.markers.push(marker);
      google.maps.event.addListener(marker, 'click', () => this.showInfoWindow(marker));

      bounds.extend(place.geometry.location);
    });

    this.googleMap.fitBounds(bounds);
    this.cd.detectChanges();
  }

  private onLocationInputChange() {
    this.clearMarkers();
    const place = this.locationAutocomplete.getPlace();

    if (!place.geometry) {
      return;
    }

    // update map viewport
    this.googleMap.setCenter(place.geometry.location);
    this.googleMap.setZoom(10);

    // save location bounds to be able to search inside last user location area
    this.locationBounds = this.googleMap.getBounds();
    this.cd.detectChanges();

    // run search again if place was typed
    if (this.placeInputModel) {
      this.searchPlaces(this.placeInputModel);
    }
  }


  private clearMarkers() {
    this.markers.forEach((m: ExtendedMarker) => {
      m.setMap(null);
    });
    this.markers = [];
  }

  /**
   *
   * @param marker ExtendedMarker
   */
  private showInfoWindow(marker: ExtendedMarker) {
    this.placesSearch.getDetails({placeId: marker.placeId}, (place, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      Object.assign(marker, place);
      marker.photos = place.photos ? place.photos.filter((p, i) => i < 4) : [];
      this.currentInfoWindowProps = marker;
      this.infoWindow.setContent(this.dynamicInfoContent.nativeElement);
      this.infoWindow.open(this.googleMap, marker);
      this.cd.detectChanges();
    });
  }

  private createLocationAutocomplete() {
    this.locationAutocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement, {
      types: ['geocode']
    });

    this.locationAutocomplete.addListener('place_changed', this.onLocationInputChange.bind(this));
  }

  private createPlacesSearch() {
    this.placesSearch = new google.maps.places.PlacesService(this.googleMap);
  }

  private createInfoWindows() {
    this.infoWindow = new google.maps.InfoWindow();
  }
}
