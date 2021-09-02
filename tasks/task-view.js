const gulp = require("gulp");
const concat = require("gulp-concat");
const beautify = require("gulp-beautify");

const sections = {
  index: [
    "./src/header.html", //
    "./src/index.html",
    "./src/footer.html",
  ],
  "blog-list": [
    "./src/header.html", //
    "./src/blog-list.html",
    "./src/footer.html",
  ],
  "blog-detail": [
    "./src/header-2.html", //
    "./src/blog-detail.html",
    "./src/footer.html",
  ],
  "team-list": [
    "./src/header.html", //
    "./src/team-list.html",
    "./src/footer.html",
  ],
  "team-detail": [
    "./src/header.html", //
    "./src/team-detail.html",
    "./src/footer.html",
  ],
  company: [
    "./src/header.html", //
    "./src/company.html",
    "./src/footer.html",
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
