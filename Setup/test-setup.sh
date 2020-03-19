#!/bin/sh

## HOW TO USE THIS SCRIPT:
#
# Run this test whenever making substantial changes to the project makeup or dependencies
# It is also useful when setting up your dev environment for the first time. 
#
# If on Windows machine, see powershell script intead. 
#
# 1. clone the CSPB-3308-Group-Project repo into an empty directory of your choice
#   - git clone git@github.com:minime905/CSPB-3308-Group-Project.git
# 2. immediately run this script 
#   - This script will install all project dependences per package-lock.json file and 
#   - test to see whether the project compiles and run. 
#
##

PDIR='../Team Alpha Wolf Squadron/'

# verify script is being run from correct location relevant to project directory
if [ ! -d "$PDIR" ]; then
	echo "The project directory does not exist."
	echo "Clone the project repo and run this script from there."
	exit 1
fi

cd "$PDIR"

npm install

ng serve

exit 1


