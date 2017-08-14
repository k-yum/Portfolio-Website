function openGW() {
  $('body').css ({
    overflowY: 'hidden'
  });
  $("#myGW").css ({
    height: '100%',
  });
}

function closeGW() {
  $('body').css ({
    overflowY: 'visible'
  });
  $('#myGW').css ({
    height: '0%'
  });

}
