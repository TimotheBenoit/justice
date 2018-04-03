import { User } from './user';

console.log('Welcome !');

let name = 'Bastien';
const user = new User(name);

(($) => {

  // Scroll animation speed
  const speed = 400

  // Cashing objects
  const $root = $('html, body')
  const $selector = $('a[href*="#"]:not([href="#"])')

  $selector.on('click', function(event) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
        location.hostname == this.hostname) {

      // Prevent default link behavior
      event.preventDefault()

      // Store target object
      let target = $(this.hash)
      target = target.length ? target : $('[name=' + target.slice(1) + ']')

      // Animate scroll
      if (target.length) {
        $root.animate({
          scrollTop: target.offset().top
        }, speed, () => {
          // Update URL witch correct hash
          window.location.hash = target['selector']
        })
      }
    }
  });

})(jQuery)
