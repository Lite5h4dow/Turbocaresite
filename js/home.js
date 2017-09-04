$(document).ready(function(){
  $('.header').slick({
    autoplay: true,
    autoplayspeed: 4000,
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.header-nav',
    arrows: false
  });
  $('.header-nav').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.header',
    focusOnSelect: true,
    centerMode: true,
    arrows: false
  });
  $('.company.bar').slick({
    dots: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 300,
    infinate: true,
  });
  $('#Services').dropdown({
    on: 'hover'
  });
  $('#Technical').dropdown({
    on: 'hover'
  });
  $('#Equipment').dropdown({
    on: 'hover'
  });
  $('#ATRButton').click(function(){
    $('#ATR').modal('show');
  });
  $('#VSRBRButton').click(function(){
    $('#VSRBR').modal('show');
  });
  $('#ATButton').click(function(){
    $('#AT').modal('show');
  });
  $('#UBButton').click(function(){
    $('#UB').modal('show');
  });
  $('#RWButton').click(function(){
    $('#RW').modal('show');
  });
  $('#RBButton').click(function(){
    $('#RB').modal('show');
  });
  $('#findUs').click(function(){
    $('#findUsModal').modal('show');
  });
  $('#VNTVCButton').click(function(){
    $('#VNTVC').modal('show');
  });
  $('#NTCButton').click(function(){
    $('#NTC').modal('show');
  });
  $('#IDYTButton').click(function(){
    $('#IDYT').modal('show');
  });
  $('#RTButton').click(function(){
    $('#RT').modal('show');
  });
  $('#TCRButton').click(function(){
    $('#TCR').modal('show');
  });
  $('#OFPButton').click(function(){
    $('#OFP').modal('show');
  });
  $('#ELRepairButton').click(function(){
    $('#ELRepair').modal('show');
  });
  $('#HATWbutton').click(function(){
    $('#HATW').modal('show');
  });
  $('#VNTAirButton').click(function(){
    $('#VNTAir').modal('show');
  });
  $('#VNTTurboButton').click(function(){
    $('#VNTTurbo').modal('show');
  });
  $('#TDButton').click(function(){
    $('#TD').modal('show');
  });
  $('#MIButton').click(function(){
    $('#MI1').modal('show');
  });
  $('#MI1Next').click(function(){
    $('#MI2').modal('show');
  });
  $('#MI2Back').click(function(){
    $('#MI1').modal('show');
  });
  $('#MI2Next').click(function(){
    $('#MI3').modal('show');
  });
  $('#MI3Back').click(function(){
    $('#MI2').modal('show');
  });
  $('#MI3Next').click(function(){
    $('#MI4').modal('show');
  });
  $('#MI4Back').click(function(){
    $('#MI3').modal('show');
  });
  $('#MI4Next').click(function(){
    $('#MI5').modal('show');
  });
  $('#MI5Back').click(function(){
    $('#MI4').modal('show');
  });
  $('#MI5Next').click(function(){
    $('#MI6').modal('show');
  });
  $('#MI6Back').click(function(){
    $('#MI5').modal('show');
  });
  $('#MI6Next').click(function(){
    $('#MI7').modal('show');
  });
  $('#MI7Back').click(function(){
    $('#MI6').modal('show');
  });
  $('#MI7Next').click(function(){
    $('#MI8').modal('show');
  });
  $('#MI8Back').click(function(){
    $('#MI7').modal('show');
  });
  $('#MI8Next').click(function(){
    $('#MI9').modal('show');
  });
  $('#MI9Back').click(function(){
    $('#MI8').modal('show');
  });
  $('#MI9Next').click(function(){
    $('#MI10').modal('show');
  });
  $('#MI10Back').click(function(){
    $('#MI9').modal('show');
  });
  $('#MI10Next').click(function(){
    $('#MI11').modal('show');
  });
  $('#MI11Back').click(function(){
    $('#MI10').modal('show');
  });
  $('#MI11Next').click(function(){
    $('#MI12').modal('show');
  });
  $('#MI12Back').click(function(){
    $('#MI11').modal('show');
  });
  $('#MI12Next').click(function(){
    $('#MI13').modal('show');
  });
  $('#MI13Back').click(function(){
    $('#MI12').modal('show');
  });
  $('#MI13Next').click(function(){
    $('#MI14').modal('show');
  });
  $('#MI14Back').click(function(){
    $('#MI13').modal('show');
  });
  $('#MI14Next').click(function(){
    $('#MI15').modal('show');
  });
  $('#MI15Back').click(function(){
    $('#MI14').modal('show');
  });
  $('#MI15Next').click(function(){
    $('#MI16').modal('show');
  });
  $('#MI16Back').click(function(){
    $('#MI15').modal('show');
  });
  $('#MI16Next').click(function(){
    $('#MI17').modal('show');
  });
  $('#MI17Back').click(function(){
    $('#MI16').modal('show');
  });
  $('#OLButton').click(function(){
    $('#OL').modal('show');
  });
  $('#TCButton').click(function(){
    $('#TC').modal('show');
  });
});
