document.addEventListener('DOMContentLoaded', function() {
  // Initialize charts
  const collectionCtx = document.getElementById('collectionChart');
  if (collectionCtx) {
    new Chart(collectionCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Weight Collected (kg)',
          data: [120, 150, 180, 90, 160, 200, 170],
          borderColor: '#4CAF50',
          backgroundColor: 'rgba(76, 175, 80, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  }
  
  const plasticCtx = document.getElementById('plasticChart');
  if (plasticCtx) {
    new Chart(plasticCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['PET', 'HDPE', 'PVC', 'LDPE', 'PP', 'Other'],
        datasets: [{
          data: [35, 25, 10, 15, 10, 5],
          backgroundColor: [
            '#4CAF50',
            '#388E3C',
            '#8BC34A',
            '#CDDC39',
            '#AFB42B',
            '#689F38'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  }
  
  // Login form handling
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(this);
      
      fetch('/login', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
          loginModal.hide();
          
          if (data.role === 'admin') {
            window.location.href = '/admin/dashboard';
          } else {
            window.location.href = '/collector/dashboard';
          }
        } else {
          alert('Login failed: ' + data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
    });
  }
  
  // USSD simulation
  const ussdCode = document.querySelector('.ussd-code');
  if (ussdCode) {
    ussdCode.addEventListener('click', function() {
      const code = this.textContent.trim();
      alert(`USSD simulation: Dialing ${code}\n\nIn a real implementation, this would connect to the USSD gateway and backend system.`);
    });
  }
});