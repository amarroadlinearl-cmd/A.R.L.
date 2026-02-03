document.getElementById("enquiryForm").addEventListener("submit", function(e){
  e.preventDefault();

  let text =
    "Freight Enquiry%0A" +
    "Name: " + name.value + "%0A" +
    "Mobile: " + mobile.value + "%0A" +
    "Pickup: " + pickup.value + "%0A" +
    "Delivery: " + delivery.value + "%0A" +
    "Material: " + material.value + "%0A" +
    "Weight: " + weight.value + "%0A" +
    "Message: " + message.value;

  window.open("https://wa.me/917500134320?text=" + text, "_blank");
  window.location.href =
    "mailto:amarroadlinearl@gmail.com?subject=Freight Enquiry&body=" + text;
});
