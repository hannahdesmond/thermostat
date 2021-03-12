'use strict';

describe('Thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('has a default of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('can increase the temperature', function() {
    expect(thermostat.up()).toEqual(21);
  })

  it('can decrease the temperature', function() {
    expect(thermostat.down()).toEqual(19);
  })

  it('has a minimum temperture', function(){
    expect(thermostat.minimumTemperature).toEqual(10);
  })

  describe('#isMinimumTemperature', function(){
    it('returns true if temperature is minimum', function(){
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(thermostat.isMinimumTemperature()).toBe(true)
    })
  })

  describe('power saving mode', function() {
    it('has power saving mode on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })
    it('can switch off power saving mode', function() {
      thermostat.switchPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    })
    it('can switch power saving mode on', function() {
      thermostat.switchPowerSavingModeOff();
      thermostat.switchPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })
     describe('whan power saving mode is on', function() {
      it('has a maximum temperature of 25 degrees', function() {
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      })
    })
    describe('when power saving mode is off', function () {
      it('has a maximum temperature of 32 degrees', function() {
        thermostat.switchPowerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      })
    })
  })
  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
  describe('current energy usage', function() {
    it('returns medium usage at the default temp', function() {
      expect(thermostat.currentUsage()).toBe('medium-usage');
    })
    it('returns low-usage when the temp is below 18', function() {
      thermostat.temperature = 17;
        expect(thermostat.currentUsage()).toBe('low-usage');
    })
    it('returns high-usage when temp is >=25', function() {
      thermostat.temperature = 25;
        expect(thermostat.currentUsage()).toBe('high-usage');
    })
  })

})
