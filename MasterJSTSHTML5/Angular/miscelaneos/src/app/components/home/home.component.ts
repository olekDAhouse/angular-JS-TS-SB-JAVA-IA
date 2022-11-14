import { Component, OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>

    <p [appResaltado]="'red'">Hola mundo desde app.component</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
  console.log (changes,"ngOnChanges");
  }
  ngAfterViewInit(){
  console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");

  }
 ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked");
 }
 ngAfterContentInit(): void {
  console.log("ngAfterContentInit");
 }
 ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked");
 }
 ngOnDestroy(): void {
  console.log("ngOnDestroy");
 }
}
