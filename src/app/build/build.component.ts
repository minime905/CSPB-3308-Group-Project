import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calculate(event){
    event.preventDefault()
    const target = event.target
    const batteriesInSeries = target.querySelector('#batteriesInSeries').value
    const parallelIterations = target.querySelector('#parallelIterations').value
    const motorKV = target.querySelector('#motorKV').value
    const wheelGearTeeth = target.querySelector('#wheelGearTeeth').value
    const motorGearTeeth = target.querySelector('#motorGearTeeth').value
    const milliAmpHours = target.querySelector('#milliAmpHours').value
    const motorEfficiency = target.querySelector('#motorEfficiency').value / 100
    const wheelSize = target.querySelector('#wheelSize').value
    const wpmavg = 18
    const cellvoltage = 4.2
    const mmtoMile = 1609000
    var maxVoltage = batteriesInSeries * cellvoltage
    document.getElementById("maxVoltage").innerHTML = maxVoltage.toFixed(1).toString()
    var maxAmpHrs = milliAmpHours * parallelIterations / 1000
    document.getElementById("ampHours").innerHTML = maxAmpHrs.toFixed(1).toString()
    var motorRPM = motorKV * motorEfficiency * maxVoltage
    document.getElementById("motorRPM").innerHTML = motorRPM.toFixed(0).toString()
    var gearRatio = wheelGearTeeth / motorGearTeeth
    document.getElementById("gearRatio").innerHTML = gearRatio.toFixed(1).toString()
    var maxSpeed = (2 * 3.14 * wheelSize / 2) * (motorRPM/gearRatio) * 60 / mmtoMile
    document.getElementById("maxSpeed").innerHTML = maxSpeed.toFixed(1).toString()
    var range = maxVoltage * maxAmpHrs / wpmavg
    document.getElementById("maxRange").innerHTML = range.toFixed(1).toString()
  }
}
