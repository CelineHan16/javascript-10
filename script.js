let example1 = document.querySelector('#example1');
example1.addEventListener('click', function(event) {
  window.location.href = "https://www.youtube.com/";

  event.preventDefault();
});


document.body.addEventListener('contextmenu', function(event) {
  // event.preventDefault();
});

document.querySelector('div').addEventListener('dblclick', function(event) {
  alert('Hello!');
  // event.preventDefault(); -- doesn't work 
});

// document.querySelector('div').addEventListener('mousemove', function(event) {
//   // event.preventDefault(); -- doesn't work
//   console.log(event);
// });


// let example = document.createElement('section');
// example.textContent = '🍕';
// example.style.fontSize = '2rem';
// example.style.position = 'absolute';
// document.body.append(example);
// document.body.addEventListener('mousemove', function(event) {
//   example.style.top = event.clientX + 'px';
//   example.style.left = event.clientY + 'px';
// });

// document.querySelector('div').addEventListener('mousemove', function(event) {
//   console.log(event.clientX);
//   console.log(event.clientY);
// });

// document.body.addEventListener('mousedown', function(event) {
//   console.log('mousedown');
// });
// document.body.addEventListener('click', function(event) {
//   console.log('click');
// });
// document.body.addEventListener('mouseup', function(event) {
//   console.log('mouseup');
// });
// example1.style.background = 'black';
// example1.addEventListener('mouseover', function(event) {
//   console.log('mouseover');
// });
// example1.addEventListener('mouseout', function(event) {
//   console.log('mouseout');
// });


let example2 = document.querySelector('#example2');
example2.addEventListener('keydown', function(event) {
  console.log('keydown', event);
  const preventList = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
  if (preventList.includes(event.key)) {
    event.preventDefault();
  }
});
example2.addEventListener('keyup', function(event) {
  console.log('keyup', event);
});


let example3 = document.querySelector('#example3');
let span = document.querySelector('span');
example3.addEventListener('keydown', function(event) {
  span.textContent = example3.value;
  span.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});


