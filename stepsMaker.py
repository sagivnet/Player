import json
import os

def main():
    steps = []
    stepsCount = int(input('How many steps: '))
    for stepIndx in range(stepsCount):
        print("Step "+str(stepIndx+1))
        type =  input('Type (tip/closeScenario): ')
        if (type == 'closeScenario'):
            tourStep = {        
                "stepOrdinal": int(input('StepNumber: ')),
            }
            steps.append(tourStep)
            continue
        tourStep = {   
                "selector": input('Selector: '),
                "content": input('Content: '),
                "placement": input('Placement: '),
                "stepOrdinal": int(input('StepNumber: ')),
                "duration": int(input('Duration: ')),
                "type": type,
                "classes": input('Classes: '),
        }
        print("\n")
        steps.append(tourStep)
        
    print(steps)

main()