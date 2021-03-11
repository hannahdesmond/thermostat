'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimumTemperature = 10;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    return this.temperature += 1
  }

  down() {
    if(this.isMinimumTemperature()) {
      return;
    }
    return this.temperature -= 1
  }

  isMinimumTemperature(){
    return (this.temperature === this.minimumTemperature);
  }

}
