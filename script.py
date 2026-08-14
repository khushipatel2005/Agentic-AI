import csv

marks = []


with open("students.csv", "r") as file:

    
    reader = csv.DictReader(file)

    
    for row in reader:
        marks.append(int(row["marks"]))

count = len(marks)
average = sum(marks) / count
minimum = min(marks)
maximum = max(marks)

print("Column: Marks")
print("Count:", count)
print("Average:", average)
print("Minimum:", minimum)
print("Maximum:", maximum)