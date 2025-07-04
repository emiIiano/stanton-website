document.addEventListener('DOMContentLoaded', function () {
  const ticketBtn1 = document.getElementById('merch-btn-1');
  const ticketBtn2 = document.getElementById('tickets-btn-2');

  if (ticketBtn1) {
    ticketBtn1.addEventListener('click', function () {
      window.location.href = 'https://stantonmerch.bigcartel.com/?_gl=1*es47pd*_gcl_au*MTA4NDE3NzMxMi4xNzUxNTgxNzUx*_ga*Nzc3MDQ4MDAwLjE3NTE1ODE3NTE.*_ga_QZ4HDFTSEZ*czE3NTE1ODE3NTAkbzEkZzEkdDE3NTE1ODI3NjAkajMxJGwwJGg5NTY0Njc4OA..'; // Replace with real URL
    });
  }

  if (ticketBtn2) {
    ticketBtn2.addEventListener('click', function () {
      window.location.href = "https://www.etix.com/ticket/p/39365227/yungatita-wstantonhazy-portraitsand-dog-house-berkeley-the-starry-plough"; // Replace with real URL
    });                     /* change link to latest show */
  } 
});
