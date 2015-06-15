exports.index = (req, res, next) => {
    res.render('screencasts', {
      title: 'Grow your  expert full-stack JavaScript skills with tagtree screencasts.',
      library: library,
      progress: JSON.stringify(library.progress),
      layout: false,
      free : req.free
    });
}