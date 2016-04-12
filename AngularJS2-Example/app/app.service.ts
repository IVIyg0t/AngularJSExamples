// Import dependencies for the AppService
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

// Declare this service as an Injectable
@Injectable()


// Export & Define the class definition
export class AppService {
    // Inherit the Http object throgh the constructor
    constructor(private http: Http) {}
    
    // Query URL for grabbing JSON data from OpenWeatherMap
    apiURL = "http://api.openweathermap.org/data/2.5/weather?id=4781756&units=imperial&APPID=8b30e25b0299f4ffd354a318e139ca0d";
    
    // Method used to retrieve data from the API.
    getWeather(){
        return this.http.get(this.apiURL)
            .map(res => res.json())
            .catch(this.handleError);
    }
    
    // Function handler in case the getWeather() method fails
    private handleError (error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }   
}