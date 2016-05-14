from tkinter import *
from random import *


class Naughty_circle:
    def __init__(self, canvas, canvas_width, canvas_height):
        self.canvas = canvas
        self.canvas_width = canvas_width
        self.canvas_height = canvas_height
        self.x = canvas_width/2 - 25
        self.y = canvas_height/2 - 25
        self.length = 50
        self.oval = self.canvas.create_oval(self.x, self.y, self.x + self.length, self.y + self.length, fill='blue')

    def move(self, x_velocity, y_velocity):
        self.x += x_velocity
        self.y += y_velocity
        self.canvas.move(self.oval, x_velocity, y_velocity)

    def motion(self, event):
        x, y = event.x, event.y
        gap = 20
        value = 0
        if self.x - gap <= x <= self.x and self.y <= y <= self.y + self.length:  # horizontal right
            self.move(10, 0)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y <= y <= self.y + self.length:  # horizontal left
            self.move(-10, 0)
        if self.y - gap - 10 <= y <= self.y and self.x <= x <= self.x + self.length:  # vertical down
            self.move(0, 10)
        if self.y + self.length <= y <= self.y + self.length + gap and self.x <= x <= self.x + self.length:  # vertical up
            self.move(0, -10)
        if self.x - gap <= x <= self.x and self.y - gap - 10 <= y <= self.y:  # diagonal down right
            self.move(10, 10)
        if self.x - gap <= x <= self.x and self.y + self.length <= y <= self.y + self.length + gap:  # diagonal up right
            self.move(10, -10)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y - gap - 10 <= y <= self.y:  # diagonal down left
            self.move(-10, 10)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y + self.length <= y <= self.y + self.length + gap:  # diagonal up left
            self.move(-10, -10)
        # if self.x < 0:
        #     if self.y - 10 < 0:
        #         self.move(10, 10)
        #     elif self.y + self.length + 10 > self.canvas_height:
        #         self.move(10, -10)
        #     else:
        #         while not (value == -10 or value == 10):
        #             value = randint(-10, 10)
        #             if value == -10 or value == 10:
        #                 self.move(10, value)
        #                 value = 0
        # if self.x + self.length > self.canvas_width:
        #     if self.y - 10 < 0:
        #         self.move(-10, 10)
        #     elif self.y + self.length + 10 > self.canvas_height:
        #         self.move(-10, -10)
        #     else:
        #         while not (value == -10 or value == 10):
        #             value = randint(-10, 10)
        #             if value == -10 or value == 10:
        #                 self.move(-10, value)
        #                 value = 0
        # if self.y < 0:
        #     if self.x - 10 < 0:
        #         self.move(10, 10)
        #     if self.x + self.length + 10 > self.canvas_width:
        #         self.move(-10, 10)
        #     else:
        #         while not (value == -10 or value == 10):
        #             value = randint(-10, 10)
        #             if value == -10 or value == 10:
        #                 self.move(value, 10)
        #                 value = 0
        # if self.y + self.length > self.canvas_height:
        #     if self.x - 10 < 0:
        #         self.move(10, -10)
        #     if self.x + self.length + 10 > self.canvas_width:
        #         self.move(-10, -10)
        #     else:
        #         while not (value == -10 or value == 10):
        #             value = randint(-10, 10)
        #             if value == -10 or value == 10:
        #                 self.move(value, -10)
        #                 value = 0


class Arena:
    def __init__(self):
        root = Tk()
        self.width = 600
        self.height = 600
        self.canvas = Canvas(root, width=self.width, height=self.height)
        self.canvas.pack()
        self.canvas.focus_set()
        self.canvas.create_rectangle(0, 0, self.width, self.height, fill='white')  # background
        self.conscious_circle()
        root.update()
        root.mainloop()

    def conscious_circle(self):
        circle = Naughty_circle(self.canvas, self.width, self.height)
        self.canvas.bind('<Motion>', circle.motion)

Arena()