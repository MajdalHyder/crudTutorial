$("#add_user").submit(function(event){
  alert("Data Inserted successfully !")
})

$("#update_user").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};
  console.log(data);
  $.map(unindexed_array, function(n,i) {
    data[n["name"]] = n["value"]
  })

  console.log(unindexed_array);

  var request = {
    "url" : `http://localhost:3000/api/user/${data.id}`,
    "method": "PUT",
    "data": data
  }

  $.ajax(request).done(function(responnse){
    alert("Data Updated Successfully!");
  })
})
