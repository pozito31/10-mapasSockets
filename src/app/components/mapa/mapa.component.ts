import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  @ViewChild('map') mapaElement: ElementRef;
  map: google.maps.Map;

  constructor() {}

  ngOnInit() {
    this.cargarMapa();
  }

  cargarMapa() {
    const latLng = new google.maps.LatLng(37.784679, -122.395936);

    const mapaOpciones: google.maps.MapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapaOpciones
    );
  }
}
