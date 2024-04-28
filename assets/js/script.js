$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd', // customize date format if needed
        autoclose: true
    });
     
    $('.dropdown-toggle').click(function() {
        $(this).siblings(".dropdown-menu").toggle();
      
    });
    $('.SliderDoctors').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                autoHeight: true,
                
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
               
            },
            1400:{
                items:4,
               
            }
        }
    });
    $('.similerDoctorsProfile').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoHeight: true,
                
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
               
            },
            1400:{
                items:3,
               
            }
        }
    });
    $('.topDoctors').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoHeight: true,
                
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
               
            },
            1400:{
                items:4,
               
            }
        }
    });
    $('.similerSlider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                autoHeight: true,
                
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
               
            },
            1400:{
                items:4,
               
            }
        }
    });
    $('.testimonials_slider ').owlCarousel({
        loop:true,
        margin:20,
        autoplay:false,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:2,
            },
            1000:{
                items:3,
               
            },
            1400:{
                items:4,
               
            }
        }
    });
    $('.trustSlider').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        dots:false,
        nav:true,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
               
            },
            1400:{
                items:3,
               
            }
        }
    });   
    $('.appo-box').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        dots:false,
        nav:false,
        smartSpeed: 900,
        navText: ["<i class='fa-solid fa-angle-left'></i>, <i class='fa-solid fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
               
            },
            1400:{
                items:5,
               
            }
        }
    }); 
    $('.madtripz_bg_slider').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        nav:true,
        dots:false,
        responsiveClass:true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true,
                
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true
            }
        }
    });
    
  

});
const countryCodeElement = document.getElementById('countryCode');
const mobileNumberElement = document.getElementById('mobileNumber');
const countrySelectElement = document.getElementById('countrySelect');

// Set initial country code
countryCodeElement.textContent = `(+${countrySelectElement.value})`;

// Update country code when country is changed
countrySelectElement.addEventListener('change', () => {
    const countryCode = countrySelectElement.value;
    countryCodeElement.textContent = `(+${countryCode})`;
});

function updateCountry() {
    var selectedCountry = document.getElementById("countrySelecthospital").value;
    document.getElementById("selectedCountryHospitals").textContent = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1);
}
function updateFileCount() {
    var fileInput = document.getElementById('fileInput');
    var fileCount = document.getElementById('fileCount');
    
    if (fileInput.files.length === 0) {
        fileCount.innerText = "No file selected";
    } else if (fileInput.files.length === 1) {
        fileCount.innerText = "1 file selected";
    } else {
        fileCount.innerText = fileInput.files.length + " files selected";
    }
}

