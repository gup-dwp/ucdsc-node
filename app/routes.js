module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here
    app.get('/ucdsc/apt2', function (req, res) {
      res.render('ucdsc/apt2');
    });
    app.post('/ucdsc/apt3', function (req, res) {
      var data = require('./assets/javascripts/offices');
      res.render('ucdsc/apt3',{
        data : data.getTableData(),
      });
    });

    app.post('/ucdsc/apt4', function (req, res) {
      var data = require('./assets/javascripts/request');
      res.render('ucdsc/apt4',{
        data : data.getTableData(),
      });
    });
    app.post('/ucdsc/apt5', function (req, res) {
      res.render('ucdsc/apt5');
    });

  }
};
