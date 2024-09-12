const boxes = document.querySelectorAll('.box')
// console.log(boxes)
const body = document.querySelector('body')
boxes.forEach(function (box) {
  // console.log(box);
  box.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'pink') {
      body.style.backgroundColor = '#ff5d8f'
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = '#ffd60a'
    }
    if (e.target.id === 'sky') {
      body.style.backgroundColor = '#90e0ef'
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = '#9ef01a'
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = '#c77dff'
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = '#fb8500'
    }
  })
})
