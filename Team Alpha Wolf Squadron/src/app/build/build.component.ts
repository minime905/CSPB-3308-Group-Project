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
    const pulleyGearTeeth = target.querySelector('#pulleyGearTeeth').value
    const wheelGearTeeth = target.querySelector('#wheelGearTeeth').value
    const milliAmpHours = target.querySelector('#milliAmpHours').value
    const motorEfficiency = target.querySelector('#motorEfficiency').value
    const wheelSize = target.querySelector('#wheelSize').value
    const wpmavg = 18
    const cellvoltage = 4.2
    const mmtoMile = 1609000
    var maxVoltage = batteriesInSeries * cellvoltage
    document.getElementById("maxVoltage").innerHTML = maxVoltage.toString()
    var maxAmpHrs = milliAmpHours * parallelIterations / 1000
    document.getElementById("ampHours").innerHTML = maxAmpHrs.toString()
    var motorRPM = motorKV * motorEfficiency * maxVoltage
    document.getElementById("motorRPM").innerHTML = motorRPM.toString()
    var gearRatio = pulleyGearTeeth / wheelGearTeeth
    document.getElementById("gearRatio").innerHTML = gearRatio.toString()
    var maxSpeed = 2 * 3.14 * wheelSize / 2 * (motorRPM/gearRatio) * 60 / mmtoMile
    document.getElementById("maxSpeed").innerHTML = maxSpeed.toString()
    var range = maxVoltage * maxAmpHrs / wpmavg
    document.getElementById("maxRange").innerHTML = range.toString()
  }
}
