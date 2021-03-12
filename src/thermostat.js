'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.minimumTemperature = 10;
    this.powerSavingMode = true;
    this.MAX_PSM_LIMIT_ON = 25;
    this.MAX_PSM_LIMIT_OFF = 32;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    } else {
      return this.temperature += 1;
    }
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

  switchPowerSavingModeOn() {
    return this.powerSavingMode = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_PSM_LIMIT_OFF;
    } else {
      return this.temperature === this.MAX_PSM_LIMIT_ON;
    }
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMP;
  }

   currentUsage() {
     if (this.temperature < 18) {
       return 'low-usage'
     }
     if (this.temperature >= 25) {
       return 'high-usage'
     }
     return 'medium-usage';
   }

}
