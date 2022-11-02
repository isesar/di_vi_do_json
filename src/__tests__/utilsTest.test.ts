import { recompose } from "../utils";

describe("testing utils functions", () => {
  test("Testing recompose function", () => {
    const testObject = {
      enviroment: "dev",
      database: {
        host: "postgre",
        port: "3034",
        username: "postgre",
      },
    };

    const path = "database";
    const results = recompose(testObject, path);

    expect(results).toEqual({
      host: "postgre",
      port: "3034",
      username: "postgre",
    });
  });
});
