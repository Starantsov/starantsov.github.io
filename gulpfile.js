var gulp = require("gulp");
var server = require("browser-sync");
var del = require("del");


gulp.task("default", ["serve"], () => {
  console.log('starting browser sync');
})
gulp.task("serve", function() {
  server.init({
    server: "."
  });
  
  gulp.watch("./*.html").on("change" , server.reload);
 });

gulp.task("clean", function() {
  return del("build");
});



