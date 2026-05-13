def on_button_pressed_a():
    global a
    basic.clear_screen()
    a += -1
    if a < 0:
        a += 26
    basic.show_arrow(a)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("" + str((a)))
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global a
    basic.clear_screen()
    a += 1
    if a > 25:
        a += -26
    basic.show_string("" + str((a)))
input.on_button_pressed(Button.B, on_button_pressed_b)

a = 0
