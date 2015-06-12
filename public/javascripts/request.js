var data = [{
  "room": [
    {"room-id":"1","name":"Room 1"},
    {"room-id":"2","name":"Room 2"},
    {"room-id":"3","name":"Room 3"},
    {"room-id":"4","name":"Room 4"},
    {"room-id":"5","name":"Room 5"}
  ],
  "times" : [
    {"room-id": "1","time" : "12:30"},
    {"room-id": "2","time" : "13:30"},
    {"room-id": "3","time" : "14:30"},
    {"room-id": "4","time" : "15:30"},
    {"room-id": "5","time" : "16:30"}
  ],
  "facilities" : [
    {"facilities-id": "1","name" : "Projector"},
    {"facilities-id": "2","name" : "Hearing Loop"},
    {"facilities-id": "3","name" : "Disability Access"},
    {"facilities-id": "4","name" : "Interpreter - Polish"}
  ]
}

]


exports.getTableData = function () {
  return data;
}
