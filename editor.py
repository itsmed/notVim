import sys

v = sys.version

# print v

if "2.7" in v:
  from Tkinter import *
elif "3.3" in v or "3.4" in v:
  from tkinter import *
root=Tk("Text Editor")

root.mainloop()
