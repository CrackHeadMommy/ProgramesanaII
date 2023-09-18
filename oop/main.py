from cilveks import Cilveks as hum
import PySimpleGUI as sg

sg.theme('DarkAmber')   # Add a touch of color
# All the stuff inside your window.
layout = [  [sg.Text('Create your human!')],
            [sg.Text('The name: '), sg.InputText()],
            [sg.Text('The age: '), sg.InputText()],
            [sg.Text('The sex: '), sg.InputText()],
            [sg.Button('Ok'), sg.Button('Cancel')] ]

def huamnWindow(name, age, sex):
    human = hum(name, age, sex)
    if(sex=="s"):
        Sex = "woman"
    else:
        Sex = "man"
    layout = [  [sg.Text("I'm " + name)],
                [sg.Text("Change name to: "), sg.InputText(), sg.Button("Save")],
                [sg.Text("I'm " + age + " years old."),sg.Button("Age Up!")]
                [sg.Text("I'm a " + Sex)]
                [sg.Button("Done")]]
    window = sg.Window("Human", layout)

    
    while True:
        event, values = window.read()
        if event == sg.WIN_CLOSED or event == 'Done': # if user closes window or clicks cancel
            del human
            break
        if event == "Age up!":
            age+=1
            window.upadte(age)
        if event == "Save":
            name = values[0]
            window.upadte(name)


    window.close()


# Create the Window
window = sg.Window('Human creator', layout)
# Event Loop to process "events" and get the "values" of the inputs
while True:
    event, values = window.read()
    if event == sg.WIN_CLOSED or event == 'Cancel': # if user closes window or clicks cancel
        break
    print(values)
    if event == "Ok":
        huamnWindow(values[0], int(values[1]),values[2])

window.close()
