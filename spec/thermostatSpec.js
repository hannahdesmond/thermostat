'use strict';

describe('Thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat;
  })
  it('has a default of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it('can increase the temperature', function(){
    expect(thermostat.up()).toEqual(21);
  })

  it('can decrease the temperature', function(){ 
    expect(thermostat.down()).toEqual(19);
  })
})
