#!/usr/bin/python3

import unittest

class TextprocTestCase(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        print("")
        print("PROVIDE YOUR SPEC INPUTS:")
        battsinseries = float(input("Number of batteries in series: "))
        paralleliters = float(input("Parallel Iterations: "))
        motorkv = float(input("Motor KV: "))
        pulleyteeth = float(input("Number of Pulley Gear Teeth: "))
        wheelteeth = float(input("Wheel Gear Teeth: "))
        mAH = float(input("Milli-Amp Hours (mAH): "))
        motorefficiency = float(input("Motor Efficiency %: "))
        wheelsize = float(input("Wheel size: "))

        maxvoltage = battsinseries * 4.2
        motorRPM = motorkv * motorefficiency * maxvoltage
        amphours = (mAH * paralleliters) / 1000
        maxrange = maxvoltage * amphours / 18
        gearratio = pulleyteeth / wheelteeth
        maxspeed =  2 * 3.14 * (wheelsize / 2) * ((motorRPM/gearratio) * 60) / 1609000

        print("")
        print("------------------------------------")
        print("PROVIDE APP OUTPUTS TO TEST AGAINST:")
        print("(within a few decimal places)")
        maxvoltage_t = float(input("Max Voltage: "))
        motorRPM_t = float(input("Motor RPM: "))
        maxspeed_t = float(input("Max Speed: "))
        maxrange_t = float(input("Max Range: "))
        gearratio_t = float(input("Gear Ratio: "))
        amphours_t = float(input("Amp Hours: "))
        print("")
        
        # do calcs and create class variables for testing
        cls.voltdiff = abs(maxvoltage - maxvoltage_t)
        cls.rpmdiff = abs(motorRPM - motorRPM_t)
        cls.ampdiff = abs(amphours - amphours_t)
        cls.rangediff = abs(maxrange - maxrange_t)
        cls.ratiodiff = abs(gearratio - gearratio_t)
        cls.speeddiff = abs(maxspeed - maxspeed_t)

    @classmethod
    def tearDownClass(cls):
        pass

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def test_voltage(self):
        self.assertTrue(self.voltdiff <= 1 and self.voltdiff >= 0)
    
    def test_rpms(self):
        self.assertTrue(self.rpmdiff <= 1 and self.rpmdiff >= 0)

    def test_amp(self):
        self.assertTrue(self.ampdiff <= 1 and self.ampdiff >= 0)

    def test_range(self):
        self.assertTrue(self.rangediff <= 1 and self.rangediff >= 0)

    def test_gearratios(self):
        self.assertTrue(self.ratiodiff <= 1 and self.ratiodiff >= 0)

    def test_speed(self):
        self.assertTrue(self.speeddiff <= 1 and self.speeddiff >= 0)

# Main: Run Test Cases
if __name__ == '__main__':
    unittest.main()