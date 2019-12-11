module.exports = app => {
    // A simple sync function between Sequelize and the database
    // It performs, if necessary, alterations on the database tables, according to what is going to be set up on the models
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`iTask API - Port ${app.get("port")}`);
        });
    });
};