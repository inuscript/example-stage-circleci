describe("SomeTest", function() {
  it("test", function() {
    if (process.env.CI) {
      this.skip();
    }
    console.log("Some test");
  });
});
