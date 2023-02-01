function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements1 = document.querySelectorAll('.restaurant-section-title');
let elements2 = document.querySelectorAll('.title-room');
let elements3 = document.querySelectorAll('.hotel-room-two-title');
let elements4 = document.querySelectorAll('.hotel-gallery-triple-title');
for (let elm of elements1) {
  observer.observe(elm);
}
for (let elm of elements2) {
  observer.observe(elm);
}
for (let elm of elements3) {
  observer.observe(elm);
}
for (let elm of elements4) {
  observer.observe(elm);
}