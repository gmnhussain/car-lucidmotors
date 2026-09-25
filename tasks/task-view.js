const gulp = require("gulp");
const concat = require("gulp-concat");
const beautify = require("gulp-beautify");

const sections = {
  index: [
    "./src/views/header.html", //
    "./src/views/home/banner.html",
    "./src/views/home/car-slider.html",
    "./src/views/home/our-vision.html",
    "./src/views/home/blog-list-slider.html",
    "./src/views/home/links.html",
    "./src/views/home/instagram-slider.html",
    "./src/views/footer.html",
  ],
  "blog-list": [
    "./src/views/header.html", //
    "./src/views/blog-list.html",
    "./src/views/footer.html",
  ],
  "blog-detail": [
    "./src/views/header-2.html", //
    "./src/views/blog-detail.html",
    "./src/views/footer.html",
  ],
  "team-list": [
    "./src/views/header.html", //
    "./src/views/team-list.html",
    "./src/views/footer.html",
  ],
  "team-detail": [
    "./src/views/header.html", //
    "./src/views/team-detail.html",
    "./src/views/footer.html",
  ],
  company: [
    "./src/views/header.html", //
    "./src/views/company.html",
    "./src/views/footer.html",
  ],
};

const createTask = (key) => {
  gulp.task(key, () => {
    return gulp
      .src(sections[key])
      .pipe(concat(key + ".html"))
      .pipe(
        beautify.html({
          indent_size: 2,
        })
      )
      .pipe(gulp.dest("./dist"));
  });
};

let tasks = [];

for (const key in sections) {
  createTask(key);
  tasks.push(key);
}

exports.views = gulp.series(tasks);
