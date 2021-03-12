'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimumTemperature = 10;
    this.powerSavingMode = true;
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

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    return this.powerSavingMode = false;
  }
  // why is this only = not === ?


}
