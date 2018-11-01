function openGrp(grpName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('info');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(grpName).style.display = "block";

}
document.getElementById('defaultOpen').click();