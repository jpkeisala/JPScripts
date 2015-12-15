//Function to the css rule
function checkSize(){
  // Phone: <768px (container: full width) - Bootstrap standard reference: XS
  if (window.matchMedia('(max-width: 768px)').matches){
      // do functionality on screens smaller than 768px

    }
  // Tablet: <992px (container: full width) - Bootstrap standard reference: SM
  else if (window.matchMedia('(min-width: 768px)').matches) {

  }
  // Small Desktop: <1440px (container: full width) - Bootstrap standard reference: MD (No graphical design, design should reflect as close as possible to LG design)
  else if (window.matchMedia('(min-width: 992px)').matches) {

  }
  // Large Desktop: >1440px (container: 1440px) - Bootstrap standard reference: LG
  else if (window.matchMedia('(min-width: 1399px)').matches) {

  }

}
