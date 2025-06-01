/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Engineer","Artist","Arsenal Fan"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)


  /* ----- CONTACT FORM ----- */

  document.querySelector('.form-button .btn').addEventListener('click', async function (event) {
  event.preventDefault();

  const button = this;
  button.disabled = true;
  button.innerHTML = 'Sending... <i class="uil uil-message"></i>';

  // Get the input values using class selectors
  const inputFields = document.querySelectorAll('.form-inputs .input-field');
  const name = inputFields[0].value.trim();
  const email = inputFields[1].value.trim();
  const message = document.querySelector('.text-area textarea').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    button.disabled = false;
    button.innerHTML = 'Send <i class="uil uil-message"></i>';
    return;
  }

  const data = { name, email, message };

  try {
    const response = await fetch('https://vrls7lrjg5.execute-api.us-east-1.amazonaws.com/prod/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Thank you for reaching out! I will get back to you soon.');
      // Clear fields
      inputFields[0].value = '';
      inputFields[1].value = '';
      document.querySelector('.text-area textarea').value = '';
    } else {
      alert('There was an error submitting the form. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  } finally {
    button.disabled = false;
    button.innerHTML = 'Send <i class="uil uil-message"></i>';
  }
});


  /* ----- DOWNLOAD CV ----- */
  /*function downloadCV() {
    const link = document.createElement('a');
    link.href = 'asses'; // Local test path
    link.download = 'Sujal_Phaiju_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  /* ----- VIEWS COUNTER ----- */

  async function incrementView() {
  try {
    const response = await fetch('https://9xv5bq7iwe.execute-api.us-east-1.amazonaws.com/dev/view', {    // PortfolioViewCounterAPI
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error('Failed to fetch');

    const data = await response.json();
    document.getElementById('view-count').innerText = data.count;
  } catch (error) {
    console.error('Error fetching view count:', error);
    document.getElementById('view-count').innerText = 'error';
  }
}

window.onload = incrementView;

