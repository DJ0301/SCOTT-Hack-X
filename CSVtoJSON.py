import csv
import json

# Function to convert CSV to JSON
def csv_to_json(csv_file, json_file):
    # Create an empty list to store the data
    data = []

    # Open the CSV file for reading
    with open(csv_file, 'r') as csv_file:
        # Create a CSV reader object
        csv_reader = csv.DictReader(csv_file)

        # Iterate through each row in the CSV file
        for row in csv_reader:
            # Append each row as a dictionary to the data list
            data.append(row)

    # Open the JSON file for writing
    with open(json_file, 'w') as json_file:
        # Use the json.dump() function to write the data as JSON
        json.dump(data, json_file, indent=4)

# Specify the CSV input file and JSON output file
csv_input_file = 'AI/Data/Supplier Data.csv'
json_output_file = 'Test-Data/Supplier_supplier.json'

# Call the function to convert CSV to JSON
csv_to_json(csv_input_file, json_output_file)

print("CSV file has been successfully converted to JSON.")