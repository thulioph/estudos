function checkTitle(expectedTitle) {
  var title = element(by.className('title-primary'));
  expect(title.getText()).toEqual(expectedTitle);
};

module.exports = {
  checkTitle: checkTitle
}