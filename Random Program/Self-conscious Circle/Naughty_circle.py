from tkinter import *
from tkinter.messagebox import *
from time import *


class Naughty_circle:
    def __init__(self, t, root, canvas, canvas_width, canvas_height):
        self.start_time = t
        self.root = root
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
            self.move(15, 0)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y <= y <= self.y + self.length:  # horizontal left
            self.move(-15, 0)
        if self.y - gap - 10 <= y <= self.y and self.x <= x <= self.x + self.length:  # vertical down
            self.move(0, 15)
        if self.y + self.length <= y <= self.y + self.length + gap and self.x <= x <= self.x + self.length:  # vertical up
            self.move(0, -15)
        if self.x - gap <= x <= self.x and self.y - gap - 10 <= y <= self.y:  # diagonal down right
            self.move(15, 15)
        if self.x - gap <= x <= self.x and self.y + self.length <= y <= self.y + self.length + gap:  # diagonal up right
            self.move(15, -15)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y - gap - 10 <= y <= self.y:  # diagonal down left
            self.move(-15, 15)
        if self.x + self.length <= x <= self.x + self.length + gap and self.y + self.length <= y <= self.y + self.length + gap:  # diagonal up left
            self.move(-15, -15)
        if self.x + self.length <= 0:  # if reach left border
            self.move(self.canvas_width, 0)
        if self.x >= self.canvas_width:  # if reach right border
            self.move(-self.canvas_width, 0)
        if self.y + self.length <= 0:  # if reach top border
            self.move(0, self.canvas_height)
        if self.y >= self.canvas_height:  # if reach bottom border
            self.move(0, -self.canvas_height)
        if self.x <= x <= self.x + self.length and self.y <= y <= self.y + self.length:  # if player manage to control mouse cursor to reach circle
            duration = time() - self.start_time
            if duration >= 60:
                showinfo("Greetings from above", "Congratulations, beloved user, you just spent " + "%.1f" % (duration/60) + " minutes on catching a circle!\nHere's a hug ... lonely f#$%")
            else:
                showinfo("Greetings from above", "Congratulations, beloved user, you just spent " + "%.1f" % duration + " seconds on catching a circle!\nHere's a hug ... lonely f#$%")
            self.root.destroy()


class Arena:
    def __init__(self):
        self.t = time()
        self.root = Tk()
        self.root.wm_title("Catch the circle")
        self.width = 600
        self.height = 600
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()
        self.canvas.focus_set()
        self.canvas.create_rectangle(0, 0, self.width, self.height, fill='white')  # background
        self.conscious_circle()
        self.root.update()
        self.root.mainloop()

    def conscious_circle(self):
        circle = Naughty_circle(self.t, self.root, self.canvas, self.width, self.height)
        self.canvas.bind('<Motion>', circle.motion)

Arena()