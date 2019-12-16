import { isMainThread } from "worker_threads";

describe("Routes: Token", () => {

    const Users = app.db.models.Users;
    describe("POST /token", () => {
        beforeEach(done => {
            // Runs before each test...
        });
        
        describe("status 200", () => {
            it("returns authenticated user token", done => {
                // Test's Logic...
            });
        });

        describe("status 401", () => {
            it("throws error when password is incorect", done => {
                // Test's Logic...
            });
            it("throws error when email not exist", done => {
                // Test's Logic
            });
            it("throws error when email and password are blank", done => {
                // Test's Logic
            });
        });
    });
});