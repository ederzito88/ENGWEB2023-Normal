import json

input_file = "plantas.json"
output_file = "plantas_final.json"

with open(input_file, "r", encoding="utf-8") as file:
    data = json.load(file)

# Modify "Id" to "_id"
for item in data:
    item["_id"] = item.pop("Id")

with open(output_file, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

