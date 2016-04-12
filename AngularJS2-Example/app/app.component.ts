// Import neccessary Libraries
import {Component}      from 'angular2/core';
import {AppService}     from './app.service';
import {HTTP_PROVIDERS} from 'angular2/http';

// Component definition: defines the name the component, templates/styles, and providers
@Component({
	selector: 'my-weather-app',
	templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.style.css'],
    providers: [
       HTTP_PROVIDERS,
       AppService,
  ]
      
})

// Explor the component class for use in other components.
// This declaration is where the functionality for the component resides
export class AppComponent {
    constructor(private _appService: AppService) {}
    
    // Title of the page
    title = 'Example 2: AngularJS 2.0'; 
    // Sub-title of the page
    subTitle = "Display information from OpenWeatherMap by using an AngularJS 2 Component";  
    
    // Function call to subscribe to the AppService.getWeather method which pulls JSON data from OpenWeatherMap
    getWeather() {
        this._appService.getWeather()
            .subscribe(
                weather => this.weather = weather,
                error => this.errorMessage = <any>error);
    }
    
}

